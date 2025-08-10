import { Pool, PoolConfig, QueryResult, QueryResultRow } from 'pg';
import Redis from 'ioredis';
import { logger } from '@/lib/utils/logger';

// Initialize database connections
logger.debug('Database Connection Module Loading', {
  postgres: !!process.env.POSTGRES_URL,
  redis: !!process.env.REDIS_URL
});

// Function to parse Redis URL into individual components
function parseRedisUrl(url?: string): {
  host: string;
  port: number;
  password?: string;
  db: number;
} {
  if (!url) {
    return {
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379'),
      password: process.env.REDIS_PASSWORD,
      db: parseInt(process.env.REDIS_DB || '0'),
    };
  }
  
  try {
    const urlObj = new URL(url);
    return {
      host: urlObj.hostname || 'localhost',
      port: parseInt(urlObj.port) || 6379,
      password: urlObj.password || undefined,
      db: parseInt(urlObj.pathname.replace('/', '')) || 0,
    };
  } catch (error) {
    console.warn('⚠️ Failed to parse REDIS_URL, using defaults:', error);
    return {
      host: 'localhost',
      port: 6379,
      password: undefined,
      db: 0,
    };
  }
}

// Function to get database connection configuration dynamically
function getDatabaseConfig(): PoolConfig {
  const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  
  // Security: Never log connection details
  if (!connectionString && !process.env.PGHOST) {
    throw new Error('Database connection not configured. Please set DATABASE_URL or POSTGRES_URL environment variable.');
  }
  
  const config: PoolConfig = {
    connectionString,
    max: 20, // Maximum number of clients in the pool
    min: 5, // Minimum number of clients in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
    connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
    maxUses: 7500, // Close connection after 7500 uses (for load balancing)
    ...(process.env.NODE_ENV === 'production' && {
      ssl: {
        rejectUnauthorized: false
      }
    })
  };
  
  return config;
}

// PostgreSQL connection pool with lazy initialization
let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    logger.debug('Creating new PostgreSQL connection pool');
    
    // Get configuration dynamically to ensure environment variables are available
    const poolConfig = getDatabaseConfig();
    
    pool = new Pool(poolConfig);
    
    // Enhanced error handling and logging for the pool
    pool.on('error', (err) => {
      logger.error('Unexpected error on idle PostgreSQL client', err);
    });

    pool.on('connect', (client) => {
      logger.debug('New PostgreSQL client connected to pool');
      
      // Log the actual database connection details in development only
      if (process.env.NODE_ENV !== 'production') {
        client.query('SELECT current_database(), current_user', (err, result) => {
          if (!err && result.rows[0]) {
            logger.debug('Database connection established', {
              database: result.rows[0].current_database,
              user: result.rows[0].current_user
            });
          }
        });
      }
    });

    pool.on('acquire', () => {
      const totalCount = pool!.totalCount;
      const idleCount = pool!.idleCount;
      const waitingCount = pool!.waitingCount;
      logger.verbose('Pool stats', {
        total: totalCount,
        idle: idleCount,
        waiting: waitingCount
      });
    });
    
    pool.on('remove', () => {
      logger.verbose('Client removed from PostgreSQL pool');
    });
  }
  
  return pool;
}

// Redis connection configuration with URL parsing support
function getRedisConfig() {
  const redisUrl = process.env.REDIS_URL;
  const redisConfig = parseRedisUrl(redisUrl);
  
  logger.debug('Redis configuration', {
    host: redisConfig.host,
    port: redisConfig.port,
    database: redisConfig.db
  });
  
  return {
    host: redisConfig.host,
    port: redisConfig.port,
    password: redisConfig.password,
    db: redisConfig.db,
    retryStrategy: (times: number) => {
      const delay = Math.min(times * 50, 2000);
      logger.debug(`Redis retry attempt ${times}`, { delay: `${delay}ms` });
      return delay;
    },
    maxRetriesPerRequest: 3,
    enableReadyCheck: true,
    lazyConnect: true,
  };
}

// Redis client instances with enhanced logging and connection pooling
let redisClient: Redis | null = null;
let redisSubscriber: Redis | null = null;
let redisPool: Redis[] = [];
const REDIS_POOL_SIZE = 5;

// Redis connection pool implementation
class RedisConnectionPool {
  private pool: Redis[] = [];
  private activeConnections = 0;
  private maxConnections: number;
  
  constructor(maxConnections: number = 5) {
    this.maxConnections = maxConnections;
  }
  
  async getConnection(): Promise<Redis> {
    // Return existing connection if available
    if (this.pool.length > 0) {
      const connection = this.pool.pop()!;
      if (connection.status === 'ready') {
        this.activeConnections++;
        return connection;
      }
      // Connection is not ready, create a new one
      connection.disconnect();
    }
    
    // Create new connection if under limit
    if (this.activeConnections < this.maxConnections) {
      const config = getRedisConfig();
      const connection = new Redis({
        ...config,
        enableOfflineQueue: false,
        connectTimeout: 5000,
      });
      
      await new Promise<void>((resolve, reject) => {
        connection.once('ready', () => {
          this.activeConnections++;
          resolve();
        });
        connection.once('error', reject);
      });
      
      return connection;
    }
    
    // Wait for a connection to be available
    return new Promise((resolve) => {
      const checkInterval = setInterval(() => {
        if (this.pool.length > 0) {
          clearInterval(checkInterval);
          resolve(this.getConnection());
        }
      }, 100);
    });
  }
  
  releaseConnection(connection: Redis): void {
    if (connection.status === 'ready') {
      this.pool.push(connection);
    } else {
      connection.disconnect();
    }
    this.activeConnections--;
  }
  
  async closeAll(): Promise<void> {
    const closePromises = this.pool.map(conn => conn.quit());
    await Promise.all(closePromises);
    this.pool = [];
    this.activeConnections = 0;
  }
}

const redisConnectionPool = new RedisConnectionPool(REDIS_POOL_SIZE);

export function getRedisClient(): Redis {
  if (!redisClient) {
    logger.debug('Creating new Redis client...');
    const config = getRedisConfig();
    redisClient = new Redis({
      ...config,
      enableOfflineQueue: true,
      maxRetriesPerRequest: 3,
      retryStrategy: (times: number) => {
        const delay = Math.min(times * 50, 2000);
        logger.debug(`Redis retry attempt ${times}, delay: ${delay}ms`);
        return delay;
      },
    });
    
    redisClient.on('connect', () => {
      logger.info('Redis client connected successfully');
    });
    
    redisClient.on('error', (err) => {
      logger.error('Redis client error', err);
    });
    
    redisClient.on('ready', () => {
      logger.info('Redis client ready for operations');
    });
    
    redisClient.on('close', () => {
      logger.debug('Redis client connection closed');
    });
  }
  
  return redisClient;
}

// Export the connection pool for advanced usage
export { redisConnectionPool };

export function getRedisSubscriber(): Redis {
  if (!redisSubscriber) {
    logger.debug('Creating new Redis subscriber client');
    const config = getRedisConfig();
    redisSubscriber = new Redis(config);
    
    redisSubscriber.on('connect', () => {
      logger.info('Redis subscriber connected successfully');
    });
    
    redisSubscriber.on('error', (err) => {
      logger.error('Redis subscriber error', err);
    });
    
    redisSubscriber.on('ready', () => {
      logger.info('Redis subscriber ready for operations');
    });
  }
  
  return redisSubscriber;
}

// Database query helper with enhanced logging and performance monitoring
export async function query<T extends QueryResultRow = any>(
  text: string,
  params?: any[]
): Promise<QueryResult<T>> {
  const pool = getPool();
  const start = Date.now();
  
  try {
    const result = await pool.query<T>(text, params);
    const duration = Date.now() - start;
    
    // Log query performance
    logger.query(text, params, duration);
    
    return result;
  } catch (error) {
    logger.error('Database query failed', error, {
      query: text.substring(0, 100)
    });
    throw error;
  }
}

// Transaction helper with comprehensive error handling
export async function withTransaction<T>(
  callback: (client: any) => Promise<T>
): Promise<T> {
  const pool = getPool();
  const client = await pool.connect();
  
  logger.debug('Starting database transaction');
  
  try {
    await client.query('BEGIN');
    logger.debug('Transaction started successfully');
    
    const result = await callback(client);
    
    await client.query('COMMIT');
    logger.debug('Transaction committed successfully');
    
    return result;
  } catch (error) {
    logger.error('Transaction failed, rolling back', error);
    await client.query('ROLLBACK');
    logger.debug('Transaction rolled back successfully');
    throw error;
  } finally {
    client.release();
    logger.debug('Transaction client released back to pool');
  }
}

// Enhanced cache helpers with better error handling
export async function getCached<T>(key: string): Promise<T | null> {
  const redis = getRedisClient();
  
  try {
    await redis.connect();
    const cached = await redis.get(key);
    
    if (cached) {
      logger.verbose(`Cache hit for key: ${key}`);
      return JSON.parse(cached);
    } else {
      logger.verbose(`Cache miss for key: ${key}`);
    }
    
    return null;
  } catch (error) {
    logger.error(`Redis get error for key ${key}`, error);
    return null;
  }
}

export async function setCached(
  key: string,
  value: any,
  ttl: number = 3600
): Promise<void> {
  const redis = getRedisClient();
  
  try {
    await redis.connect();
    await redis.setex(key, ttl, JSON.stringify(value));
    logger.verbose(`Cached key: ${key}`, { ttl: `${ttl}s` });
  } catch (error) {
    logger.error(`Redis set error for key ${key}`, error);
  }
}

export async function invalidateCache(pattern: string): Promise<void> {
  const redis = getRedisClient();
  
  try {
    await redis.connect();
    const keys = await redis.keys(pattern);
    
    if (keys.length > 0) {
      await redis.del(...keys);
      logger.info(`Invalidated ${keys.length} cache keys matching pattern: ${pattern}`);
    } else {
      logger.debug(`No cache keys found matching pattern: ${pattern}`);
    }
  } catch (error) {
    logger.error(`Redis invalidate error for pattern ${pattern}`, error);
  }
}

// Comprehensive connection health check with detailed diagnostics
export async function checkDatabaseHealth(): Promise<{
  postgres: boolean;
  redis: boolean;
  details: any;
}> {
  const details: any = {};
  let postgresHealthy = false;
  let redisHealthy = false;
  
  logger.debug('Running database health check');
  
  // Check PostgreSQL connection and gather detailed information
  try {
    const pool = getPool();
    const result = await pool.query('SELECT NOW() as current_time, current_database() as db_name, current_user as user_name, version() as db_version');
    postgresHealthy = true;
    
    details.postgres = {
      status: 'healthy',
      timestamp: result.rows[0].current_time,
      database: result.rows[0].db_name,
      user: result.rows[0].user_name,
      version: result.rows[0].db_version.split(' ').slice(0, 2).join(' '),
      poolStats: {
        total: pool.totalCount,
        idle: pool.idleCount,
        waiting: pool.waitingCount,
      },
    };
    
    logger.info('PostgreSQL health check passed');
  } catch (error) {
    details.postgres = {
      status: 'unhealthy',
      error: (error as Error).message,
      code: (error as any).code,
    };
    logger.error('PostgreSQL health check failed', error);
  }
  
  // Check Redis connection and gather information
  try {
    const redis = getRedisClient();
    await redis.connect();
    const pong = await redis.ping();
    const info = await redis.info('server');
    
    redisHealthy = pong === 'PONG';
    details.redis = {
      status: 'healthy',
      ping: pong,
      mode: redis.mode,
      serverInfo: info.split('\r\n').slice(0, 5).join('; '), // First few lines of server info
    };
    
    logger.info('Redis health check passed');
  } catch (error) {
    details.redis = {
      status: 'unhealthy',
      error: (error as Error).message,
    };
    logger.error('Redis health check failed', error);
  }
  
  return {
    postgres: postgresHealthy,
    redis: redisHealthy,
    details,
  };
}

// Enhanced cleanup function with comprehensive connection termination
export async function closeDatabaseConnections(): Promise<void> {
  logger.info('Initiating graceful database connection shutdown');
  
  const shutdownPromises: Promise<void>[] = [];
  
  // Close PostgreSQL pool
  if (pool) {
    shutdownPromises.push(
      pool.end().then(() => {
        logger.info('PostgreSQL pool closed successfully');
        pool = null;
      }).catch(error => {
        logger.error('Error closing PostgreSQL pool', error);
      })
    );
  }
  
  // Close Redis connection pool
  shutdownPromises.push(
    redisConnectionPool.closeAll().then(() => {
      logger.info('Redis connection pool closed successfully');
    }).catch(error => {
      logger.error('Error closing Redis connection pool', error);
    })
  );
  
  // Close Redis client
  if (redisClient) {
    shutdownPromises.push(
      new Promise<void>((resolve) => {
        redisClient!.disconnect();
        logger.info('Redis client disconnected successfully');
        redisClient = null;
        resolve();
      })
    );
  }
  
  // Close Redis subscriber
  if (redisSubscriber) {
    shutdownPromises.push(
      new Promise<void>((resolve) => {
        redisSubscriber!.disconnect();
        logger.info('Redis subscriber disconnected successfully');
        redisSubscriber = null;
        resolve();
      })
    );
  }
  
  // Wait for all connections to close
  try {
    await Promise.all(shutdownPromises);
    logger.info('All database connections closed successfully');
  } catch (error) {
    logger.error('Error during connection shutdown', error);
  }
}

// Enhanced graceful shutdown handling with better logging
process.on('SIGINT', async () => {
  logger.info('SIGINT received, initiating graceful shutdown');
  await closeDatabaseConnections();
  logger.info('Graceful shutdown completed');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  logger.info('SIGTERM received, initiating graceful shutdown');
  await closeDatabaseConnections();
  logger.info('Graceful shutdown completed');
  process.exit(0);
});

// Export configuration functions for debugging purposes
export { getDatabaseConfig, getRedisConfig };