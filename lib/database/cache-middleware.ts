import { NextRequest, NextResponse } from 'next/server';
import { getRedisClient } from './connection';
import crypto from 'crypto';

// Cache configuration
export interface CacheConfig {
  enabled: boolean;
  ttl: number; // Time to live in seconds
  keyPrefix?: string;
  excludeParams?: string[]; // Query params to exclude from cache key
  varyBy?: string[]; // Headers to vary cache by
}

// Default cache configuration
const defaultCacheConfig: CacheConfig = {
  enabled: process.env.REDIS_HOST ? true : false,
  ttl: 3600, // 1 hour default
  keyPrefix: 'api-cache',
  excludeParams: ['_', 'timestamp', 'cache-bust'],
  varyBy: ['accept', 'accept-encoding'],
};

// Generate cache key from request
export function generateCacheKey(
  req: NextRequest,
  config: CacheConfig = defaultCacheConfig
): string {
  const url = new URL(req.url);
  const pathname = url.pathname;
  
  // Build query string excluding certain params
  const searchParams = new URLSearchParams();
  url.searchParams.forEach((value, key) => {
    if (!config.excludeParams?.includes(key)) {
      searchParams.append(key, value);
    }
  });
  
  // Build vary string from headers
  const varyParts: string[] = [];
  config.varyBy?.forEach(header => {
    const value = req.headers.get(header);
    if (value) {
      varyParts.push(`${header}:${value}`);
    }
  });
  
  // Create hash of the key components
  const keyParts = [
    pathname,
    searchParams.toString(),
    varyParts.join('|'),
  ].filter(Boolean);
  
  const hash = crypto
    .createHash('sha256')
    .update(keyParts.join(':'))
    .digest('hex')
    .substring(0, 16);
  
  return `${config.keyPrefix}:${pathname}:${hash}`;
}

// Cache middleware for API routes
export function withCache(
  handler: (req: NextRequest) => Promise<NextResponse>,
  config?: Partial<CacheConfig>
) {
  const mergedConfig = { ...defaultCacheConfig, ...config };
  
  return async (req: NextRequest): Promise<NextResponse> => {
    // Skip cache for non-GET requests
    if (req.method !== 'GET' || !mergedConfig.enabled) {
      return handler(req);
    }
    
    const redis = getRedisClient();
    const cacheKey = generateCacheKey(req, mergedConfig);
    
    try {
      // Try to get from cache
      await redis.connect();
      const cached = await redis.get(cacheKey);
      
      if (cached) {
        // Parse cached response
        const { body, headers, status } = JSON.parse(cached);
        
        // Create response with cached data
        const response = new NextResponse(body, {
          status,
          headers: new Headers(headers),
        });
        
        // Add cache headers
        response.headers.set('X-Cache', 'HIT');
        response.headers.set('X-Cache-Key', cacheKey);
        
        return response;
      }
    } catch (error) {
      console.error('Cache retrieval error:', error);
      // Continue to handler if cache fails
    }
    
    // Execute handler
    const response = await handler(req);
    
    // Cache successful responses
    if (response.status === 200 && mergedConfig.enabled) {
      try {
        // Get response body
        const body = await response.text();
        
        // Prepare cache data
        const cacheData = {
          body,
          headers: Object.fromEntries(response.headers.entries()),
          status: response.status,
        };
        
        // Store in cache
        await redis.setex(
          cacheKey,
          mergedConfig.ttl,
          JSON.stringify(cacheData)
        );
        
        // Create new response with body
        const newResponse = new NextResponse(body, {
          status: response.status,
          headers: response.headers,
        });
        
        // Add cache headers
        newResponse.headers.set('X-Cache', 'MISS');
        newResponse.headers.set('X-Cache-Key', cacheKey);
        newResponse.headers.set('Cache-Control', `public, max-age=${mergedConfig.ttl}`);
        
        return newResponse;
      } catch (error) {
        console.error('Cache storage error:', error);
        // Return original response if caching fails
        return response;
      }
    }
    
    return response;
  };
}

// Cache invalidation helper
export async function invalidateApiCache(patterns: string[]): Promise<void> {
  const redis = getRedisClient();
  
  try {
    await redis.connect();
    
    for (const pattern of patterns) {
      const keys = await redis.keys(`api-cache:${pattern}*`);
      
      if (keys.length > 0) {
        await redis.del(...keys);
        console.log(`Invalidated ${keys.length} cache keys for pattern: ${pattern}`);
      }
    }
  } catch (error) {
    console.error('Cache invalidation error:', error);
  }
}

// Cache warming helper
export async function warmCache(
  urls: string[],
  baseUrl: string = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
): Promise<void> {
  console.log(`Warming cache for ${urls.length} URLs...`);
  
  const promises = urls.map(async (url) => {
    try {
      const response = await fetch(`${baseUrl}${url}`, {
        headers: {
          'X-Cache-Warm': 'true',
        },
      });
      
      if (response.ok) {
        console.log(`✓ Warmed cache for: ${url}`);
      } else {
        console.warn(`✗ Failed to warm cache for: ${url} (${response.status})`);
      }
    } catch (error) {
      console.error(`✗ Error warming cache for ${url}:`, error);
    }
  });
  
  await Promise.all(promises);
  console.log('Cache warming complete');
}

// Rate limiting with Redis
export async function checkRateLimit(
  identifier: string,
  limit: number = 100,
  window: number = 60 // seconds
): Promise<{ allowed: boolean; remaining: number; resetAt: number }> {
  const redis = getRedisClient();
  const key = `rate-limit:${identifier}`;
  
  try {
    await redis.connect();
    
    // Use Redis INCR with expiry
    const current = await redis.incr(key);
    
    if (current === 1) {
      // First request in window
      await redis.expire(key, window);
    }
    
    const ttl = await redis.ttl(key);
    const resetAt = Date.now() + (ttl * 1000);
    const remaining = Math.max(0, limit - current);
    
    return {
      allowed: current <= limit,
      remaining,
      resetAt,
    };
  } catch (error) {
    console.error('Rate limit check error:', error);
    // Allow request if rate limiting fails
    return {
      allowed: true,
      remaining: limit,
      resetAt: Date.now() + (window * 1000),
    };
  }
}

// Response compression helper
export function compressResponse(response: NextResponse): NextResponse {
  const acceptEncoding = response.headers.get('accept-encoding') || '';
  
  // Check if client accepts gzip
  if (acceptEncoding.includes('gzip')) {
    response.headers.set('Content-Encoding', 'gzip');
    response.headers.set('Vary', 'Accept-Encoding');
  }
  
  return response;
}