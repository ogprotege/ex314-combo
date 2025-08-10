import { NextRequest, NextResponse } from 'next/server';
import { performanceMonitor } from '@/lib/monitoring/performance';
import { getPool } from '@/lib/database/connection';
import { logger } from '@/lib/utils/logger';

export async function GET(request: NextRequest) {
  try {
    // Get authorization header
    const authHeader = request.headers.get('authorization');
    
    // Simple auth check for metrics endpoint (in production, use proper auth)
    if (process.env.NODE_ENV === 'production' && authHeader !== `Bearer ${process.env.METRICS_SECRET}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get performance stats
    const last5Min = performanceMonitor.getStats(5 * 60 * 1000);
    const last1Hour = performanceMonitor.getStats(60 * 60 * 1000);
    const last24Hours = performanceMonitor.getStats(24 * 60 * 60 * 1000);

    // Get database pool stats
    const pool = getPool();
    const dbPoolStats = {
      totalConnections: pool.totalCount,
      idleConnections: pool.idleCount,
      waitingRequests: pool.waitingCount,
    };

    // Get process metrics
    const memoryUsage = process.memoryUsage();
    const processMetrics = {
      uptime: process.uptime(),
      pid: process.pid,
      version: process.version,
      memory: {
        rss: memoryUsage.rss,
        heapTotal: memoryUsage.heapTotal,
        heapUsed: memoryUsage.heapUsed,
        external: memoryUsage.external,
        arrayBuffers: memoryUsage.arrayBuffers,
      },
      cpu: process.cpuUsage(),
    };

    // Build metrics response in Prometheus format (text/plain)
    const metrics = [
      '# HELP nodejs_version_info Node.js version info',
      `# TYPE nodejs_version_info gauge`,
      `nodejs_version_info{version="${process.version}"} 1`,
      '',
      '# HELP process_uptime_seconds Process uptime in seconds',
      '# TYPE process_uptime_seconds gauge',
      `process_uptime_seconds ${process.uptime()}`,
      '',
      '# HELP process_memory_rss_bytes Resident set size in bytes',
      '# TYPE process_memory_rss_bytes gauge',
      `process_memory_rss_bytes ${memoryUsage.rss}`,
      '',
      '# HELP process_memory_heap_used_bytes Heap used in bytes',
      '# TYPE process_memory_heap_used_bytes gauge',
      `process_memory_heap_used_bytes ${memoryUsage.heapUsed}`,
      '',
      '# HELP http_request_duration_ms_p50 HTTP request duration 50th percentile',
      '# TYPE http_request_duration_ms_p50 gauge',
      `http_request_duration_ms_p50 ${Math.round(last1Hour.median)}`,
      '',
      '# HELP http_request_duration_ms_p95 HTTP request duration 95th percentile',
      '# TYPE http_request_duration_ms_p95 gauge',
      `http_request_duration_ms_p95 ${Math.round(last1Hour.p95)}`,
      '',
      '# HELP http_request_duration_ms_p99 HTTP request duration 99th percentile',
      '# TYPE http_request_duration_ms_p99 gauge',
      `http_request_duration_ms_p99 ${Math.round(last1Hour.p99)}`,
      '',
      '# HELP http_requests_total Total number of HTTP requests',
      '# TYPE http_requests_total counter',
      `http_requests_total ${last1Hour.total}`,
      '',
      '# HELP db_pool_connections_total Total database connections',
      '# TYPE db_pool_connections_total gauge',
      `db_pool_connections_total ${dbPoolStats.totalConnections}`,
      '',
      '# HELP db_pool_connections_idle Idle database connections',
      '# TYPE db_pool_connections_idle gauge',
      `db_pool_connections_idle ${dbPoolStats.idleConnections}`,
      '',
      '# HELP db_pool_connections_waiting Waiting database connection requests',
      '# TYPE db_pool_connections_waiting gauge',
      `db_pool_connections_waiting ${dbPoolStats.waitingRequests}`,
    ].join('\n');

    // Return metrics in Prometheus format
    return new NextResponse(metrics, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; version=0.0.4',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch (error) {
    logger.error('Metrics endpoint error', error);
    
    return NextResponse.json(
      { error: 'Failed to generate metrics' },
      { status: 500 }
    );
  }
}