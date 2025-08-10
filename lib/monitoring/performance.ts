import { logger } from '@/lib/utils/logger';

/**
 * Performance monitoring utilities
 */

interface PerformanceMetrics {
  route: string;
  method: string;
  statusCode: number;
  duration: number;
  timestamp: Date;
  userAgent?: string;
  ip?: string;
}

interface PerformanceThresholds {
  api: number;
  page: number;
  database: number;
  cache: number;
}

const DEFAULT_THRESHOLDS: PerformanceThresholds = {
  api: 500, // 500ms for API routes
  page: 1000, // 1s for page loads
  database: 100, // 100ms for database queries
  cache: 50, // 50ms for cache operations
};

class PerformanceMonitor {
  private metrics: PerformanceMetrics[] = [];
  private thresholds: PerformanceThresholds;

  constructor(thresholds: Partial<PerformanceThresholds> = {}) {
    this.thresholds = { ...DEFAULT_THRESHOLDS, ...thresholds };
  }

  /**
   * Start timing an operation
   */
  startTimer(): () => number {
    const start = Date.now();
    return () => Date.now() - start;
  }

  /**
   * Record a performance metric
   */
  recordMetric(metric: PerformanceMetrics): void {
    this.metrics.push(metric);
    
    // Log slow operations
    if (metric.duration > this.getThreshold(metric.route)) {
      logger.warn('Slow operation detected', {
        route: metric.route,
        method: metric.method,
        duration: `${metric.duration}ms`,
        threshold: `${this.getThreshold(metric.route)}ms`,
      });
    }

    // Keep only last 1000 metrics in memory
    if (this.metrics.length > 1000) {
      this.metrics = this.metrics.slice(-1000);
    }
  }

  /**
   * Get threshold for a route type
   */
  private getThreshold(route: string): number {
    if (route.startsWith('/api/')) return this.thresholds.api;
    if (route.includes('cache')) return this.thresholds.cache;
    if (route.includes('db') || route.includes('database')) return this.thresholds.database;
    return this.thresholds.page;
  }

  /**
   * Get performance statistics
   */
  getStats(timeframe?: number): {
    total: number;
    average: number;
    median: number;
    p95: number;
    p99: number;
    slowest: number;
  } {
    const cutoff = timeframe ? Date.now() - timeframe : 0;
    const relevantMetrics = this.metrics
      .filter(m => m.timestamp.getTime() > cutoff)
      .map(m => m.duration)
      .sort((a, b) => a - b);

    if (relevantMetrics.length === 0) {
      return { total: 0, average: 0, median: 0, p95: 0, p99: 0, slowest: 0 };
    }

    const total = relevantMetrics.length;
    const average = relevantMetrics.reduce((a, b) => a + b, 0) / total;
    const median = relevantMetrics[Math.floor(total / 2)];
    const p95 = relevantMetrics[Math.floor(total * 0.95)];
    const p99 = relevantMetrics[Math.floor(total * 0.99)];
    const slowest = relevantMetrics[total - 1];

    return { total, average, median, p95, p99, slowest };
  }

  /**
   * Get metrics by route
   */
  getMetricsByRoute(route: string): PerformanceMetrics[] {
    return this.metrics.filter(m => m.route === route);
  }

  /**
   * Clear metrics
   */
  clearMetrics(): void {
    this.metrics = [];
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Middleware helper for Next.js API routes
export function withPerformanceMonitoring(
  handler: (req: any, res: any) => Promise<void>
) {
  return async (req: any, res: any) => {
    const stopTimer = performanceMonitor.startTimer();
    
    // Capture original end method
    const originalEnd = res.end;
    
    // Override end method to capture metrics
    res.end = function(...args: any[]) {
      const duration = stopTimer();
      
      performanceMonitor.recordMetric({
        route: req.url,
        method: req.method,
        statusCode: res.statusCode,
        duration,
        timestamp: new Date(),
        userAgent: req.headers['user-agent'],
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      });
      
      // Add performance headers
      res.setHeader('X-Response-Time', `${duration}ms`);
      res.setHeader('X-Performance-Threshold', performanceMonitor.getThreshold(req.url));
      
      // Call original end method
      return originalEnd.apply(res, args);
    };
    
    try {
      await handler(req, res);
    } catch (error) {
      const duration = stopTimer();
      logger.error('Request handler error', error, {
        route: req.url,
        method: req.method,
        duration: `${duration}ms`,
      });
      
      if (!res.headersSent) {
        res.status(500).json({ error: 'Internal server error' });
      }
    }
  };
}