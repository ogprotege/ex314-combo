import { NextRequest, NextResponse } from 'next/server';
import { checkDatabaseHealth } from '@/lib/database/connection';
import { performanceMonitor } from '@/lib/monitoring/performance';
import { logger } from '@/lib/utils/logger';

export async function GET(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    // Check database health
    const dbHealth = await checkDatabaseHealth();
    
    // Get performance stats for last hour
    const perfStats = performanceMonitor.getStats(60 * 60 * 1000);
    
    // Calculate overall health status
    const isHealthy = dbHealth.postgres && dbHealth.redis;
    const status = isHealthy ? 'healthy' : 'degraded';
    
    // Build health response
    const healthResponse = {
      status,
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: process.env.npm_package_version || '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      checks: {
        database: {
          postgres: dbHealth.postgres ? 'healthy' : 'unhealthy',
          redis: dbHealth.redis ? 'healthy' : 'unhealthy',
          details: process.env.NODE_ENV !== 'production' ? dbHealth.details : undefined,
        },
        performance: {
          averageResponseTime: `${Math.round(perfStats.average)}ms`,
          medianResponseTime: `${Math.round(perfStats.median)}ms`,
          p95ResponseTime: `${Math.round(perfStats.p95)}ms`,
          p99ResponseTime: `${Math.round(perfStats.p99)}ms`,
          totalRequests: perfStats.total,
        },
        memory: {
          used: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`,
          total: `${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)}MB`,
          rss: `${Math.round(process.memoryUsage().rss / 1024 / 1024)}MB`,
        },
      },
      responseTime: `${Date.now() - startTime}ms`,
    };

    // Log health check
    logger.debug('Health check completed', {
      status,
      responseTime: Date.now() - startTime,
    });

    return NextResponse.json(healthResponse, {
      status: isHealthy ? 200 : 503,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'X-Health-Status': status,
      },
    });
  } catch (error) {
    logger.error('Health check failed', error);
    
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: 'Health check failed',
        responseTime: `${Date.now() - startTime}ms`,
      },
      {
        status: 503,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'X-Health-Status': 'unhealthy',
        },
      }
    );
  }
}