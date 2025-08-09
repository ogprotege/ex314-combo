import { Pool, PoolConfig, QueryResult, QueryResultRow } from 'pg';
import Redis from 'ioredis';

// Debug: Log environment variable availability at module load time
console.log('🔍 Database Connection Module Loading...');
console.log('📊 Environment check at module load:');
// Security: Removed credential logging
console.log(`  POSTGRES_URL available: ${!!process.env.POSTGRES_URL}`);
console.log(`  REDIS_URL available: ${!!process.env.REDIS_URL}`);

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
    console.log('🏗️ Creating new PostgreSQL connection pool...');
    
    // Get configuration dynamically to ensure environment variables are available
    const poolConfig = getDatabaseConfig();
    
    pool = new Pool(poolConfig);
    
    // Enhanced error handling and logging for the pool
    pool.on('error', (err) => {
      console.error('❌ Unexpected error on idle PostgreSQL client:', err);
    });

    pool.on('connect', (client) => {
      console.log('✅ New PostgreSQL client connected to pool');
      
      // Log the actual database connection details
      client.query('SELECT current_database(), current_user', (err, result) => {
        if (!err && result.rows[0]) {
          console.log(`📊 Connected to database: ${result.rows[0].current_database} as user: ${result.rows[0].current_user}`);
        }
      });
    });

    pool.on('acquire', () => {
      const totalCount = pool!.totalCount;
      const idleCount = pool!.idleCount;
      const waitingCount = pool!.waitingCount;
      console.log(`📈 Pool stats - Total: ${totalCount}, Idle: ${idleCount}, Waiting: ${waitingCount}`);
    });
    
    pool.on('remove', () => {
      console.log('➖ Client removed from PostgreSQL pool');
    });
  }
  
  return pool;
}

// Redis connection configuration with URL parsing support
function getRedisConfig() {
  const redisUrl = process.env.REDIS_URL;
  const redisConfig = parseRedisUrl(redisUrl);
  
  console.log('🔴 Redis configuration:');
  console.log(`  Host: ${redisConfig.host}`);
  console.log(`  Port: ${redisConfig.port}`);
  console.log(`  Database: ${redisConfig.db}`);
  // Security: Removed password logging
  
  return {
    host: redisConfig.host,
    port: redisConfig.port,
    password: redisConfig.password,
    db: redisConfig.db,
    retryStrategy: (times: number) => {
      const delay = Math.min(times * 50, 2000);
      console.log(`🔄 Redis retry attempt ${times}, delay: ${delay}ms`);
      return delay;
    },
    maxRetriesPerRequest: 3,
    enableReadyCheck: true,
    lazyConnect: true,
  };
}

// Redis client instances with enhanced logging
let redisClient: Redis | null = null;
let redisSubscriber: Redis | null = null;

export function getRedisClient(): Redis {
  if (!redisClient) {
    console.log('🔴 Creating new Redis client...');
    const config = getRedisConfig();
    redisClient = new Redis(config);
    
    redisClient.on('connect', () => {
      console.log('✅ Redis client connected successfully');
    });
    
    redisClient.on('error', (err) => {
      console.error('❌ Redis client error:', err);
    });
    
    redisClient.on('ready', () => {
      console.log('🚀 Redis client ready for operations');
    });
    
    redisClient.on('close', () => {
      console.log('🔴 Redis client connection closed');
    });
  }
  
  return redisClient;
}

export function getRedisSubscriber(): Redis {
  if (!redisSubscriber) {
    console.log('📡 Creating new Redis subscriber client...');
    const config = getRedisConfig();
    redisSubscriber = new Redis(config);
    
    redisSubscriber.on('connect', () => {
      console.log('✅ Redis subscriber connected successfully');
    });
    
    redisSubscriber.on('error', (err) => {
      console.error('❌ Redis subscriber error:', err);
    });
    
    redisSubscriber.on('ready', () => {
      console.log('📡 Redis subscriber ready for operations');
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
    
    // Log query performance for monitoring
    if (process.env.NODE_ENV !== 'production') {
      if (duration > 100) {
        console.warn(`⚠️ Slow query detected (${duration}ms):`, text.substring(0, 100) + '...');
      } else if (duration > 50) {
        console.log(`📊 Query completed in ${duration}ms:`, text.substring(0, 50) + '...');
      }
    }
    
    return result;
  } catch (error) {
    console.error('❌ Database query failed:');
    console.error(`   Query: ${text.substring(0, 100)}...`);
    console.error(`   Parameters: ${JSON.stringify(params)}`);
    console.error(`   Error: ${(error as Error).message}`);
    throw error;
  }
}

// Transaction helper with comprehensive error handling
export async function withTransaction<T>(
  callback: (client: any) => Promise<T>
): Promise<T> {
  const pool = getPool();
  const client = await pool.connect();
  
  console.log('🔄 Starting database transaction...');
  
  try {
    await client.query('BEGIN');
    console.log('✅ Transaction started successfully');
    
    const result = await callback(client);
    
    await client.query('COMMIT');
    console.log('✅ Transaction committed successfully');
    
    return result;
  } catch (error) {
    console.error('❌ Transaction failed, rolling back...');
    await client.query('ROLLBACK');
    console.log('🔄 Transaction rolled back successfully');
    throw error;
  } finally {
    client.release();
    console.log('🔓 Transaction client released back to pool');
  }
}

// Enhanced cache helpers with better error handling
export async function getCached<T>(key: string): Promise<T | null> {
  const redis = getRedisClient();
  
  try {
    await redis.connect();
    const cached = await redis.get(key);
    
    if (cached) {
      console.log(`🎯 Cache hit for key: ${key}`);
      return JSON.parse(cached);
    } else {
      console.log(`🔍 Cache miss for key: ${key}`);
    }
    
    return null;
  } catch (error) {
    console.error(`❌ Redis get error for key ${key}:`, error);
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
    console.log(`💾 Cached key: ${key} (TTL: ${ttl}s)`);
  } catch (error) {
    console.error(`❌ Redis set error for key ${key}:`, error);
  }
}

export async function invalidateCache(pattern: string): Promise<void> {
  const redis = getRedisClient();
  
  try {
    await redis.connect();
    const keys = await redis.keys(pattern);
    
    if (keys.length > 0) {
      await redis.del(...keys);
      console.log(`🗑️ Invalidated ${keys.length} cache keys matching pattern: ${pattern}`);
    } else {
      console.log(`🔍 No cache keys found matching pattern: ${pattern}`);
    }
  } catch (error) {
    console.error(`❌ Redis invalidate error for pattern ${pattern}:`, error);
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
  
  console.log('🏥 Running database health check...');
  
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
    
    console.log('✅ PostgreSQL health check passed');
  } catch (error) {
    details.postgres = {
      status: 'unhealthy',
      error: (error as Error).message,
      code: (error as any).code,
    };
    console.error('❌ PostgreSQL health check failed:', error);
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
    
    console.log('✅ Redis health check passed');
  } catch (error) {
    details.redis = {
      status: 'unhealthy',
      error: (error as Error).message,
    };
    console.error('❌ Redis health check failed:', error);
  }
  
  return {
    postgres: postgresHealthy,
    redis: redisHealthy,
    details,
  };
}

// Enhanced cleanup function with comprehensive connection termination
export async function closeDatabaseConnections(): Promise<void> {
  console.log('🔐 Initiating graceful database connection shutdown...');
  
  const shutdownPromises: Promise<void>[] = [];
  
  // Close PostgreSQL pool
  if (pool) {
    shutdownPromises.push(
      pool.end().then(() => {
        console.log('✅ PostgreSQL pool closed successfully');
        pool = null;
      }).catch(error => {
        console.error('❌ Error closing PostgreSQL pool:', error);
      })
    );
  }
  
  // Close Redis client
  if (redisClient) {
    shutdownPromises.push(
      new Promise<void>((resolve) => {
        redisClient!.disconnect();
        console.log('✅ Redis client disconnected successfully');
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
        console.log('✅ Redis subscriber disconnected successfully');
        redisSubscriber = null;
        resolve();
      })
    );
  }
  
  // Wait for all connections to close
  try {
    await Promise.all(shutdownPromises);
    console.log('🔐 All database connections closed successfully');
  } catch (error) {
    console.error('❌ Error during connection shutdown:', error);
  }
}

// Enhanced graceful shutdown handling with better logging
process.on('SIGINT', async () => {
  console.log('🛑 SIGINT received, initiating graceful shutdown...');
  await closeDatabaseConnections();
  console.log('👋 Graceful shutdown completed');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('🛑 SIGTERM received, initiating graceful shutdown...');
  await closeDatabaseConnections();
  console.log('👋 Graceful shutdown completed');
  process.exit(0);
});

// Export configuration functions for debugging purposes
export { getDatabaseConfig, getRedisConfig };