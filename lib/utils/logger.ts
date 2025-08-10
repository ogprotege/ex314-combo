/**
 * Production-safe logger utility
 * Provides environment-aware logging with security considerations
 */

export enum LogLevel {
  ERROR = 0,
  WARN = 1,
  INFO = 2,
  DEBUG = 3,
  VERBOSE = 4
}

interface LogContext {
  [key: string]: unknown;
}

class Logger {
  private isDevelopment = process.env.NODE_ENV !== 'production';
  private logLevel: LogLevel;
  
  constructor() {
    this.logLevel = this.isDevelopment 
      ? LogLevel.DEBUG 
      : (process.env.LOG_LEVEL ? parseInt(process.env.LOG_LEVEL) : LogLevel.WARN);
  }

  private shouldLog(level: LogLevel): boolean {
    return level <= this.logLevel;
  }

  private sanitize(data: unknown): unknown {
    if (typeof data === 'string') {
      // Remove potential sensitive patterns
      return data
        .replace(/password["\s]*[:=]["\s]*["']?[^"',\s}]+["']?/gi, 'password=***')
        .replace(/token["\s]*[:=]["\s]*["']?[^"',\s}]+["']?/gi, 'token=***')
        .replace(/api[_-]?key["\s]*[:=]["\s]*["']?[^"',\s}]+["']?/gi, 'api_key=***')
        .replace(/secret["\s]*[:=]["\s]*["']?[^"',\s}]+["']?/gi, 'secret=***');
    }
    
    if (typeof data === 'object' && data !== null) {
      const sanitized: any = Array.isArray(data) ? [] : {};
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          // Skip sensitive keys
          if (/password|token|secret|key|auth|credential/i.test(key)) {
            sanitized[key] = '***';
          } else {
            sanitized[key] = this.sanitize((data as any)[key]);
          }
        }
      }
      return sanitized;
    }
    
    return data;
  }

  private formatMessage(level: string, message: string, context?: LogContext): string {
    const timestamp = new Date().toISOString();
    const contextStr = context ? ` ${JSON.stringify(this.sanitize(context))}` : '';
    return `[${timestamp}] [${level}] ${message}${contextStr}`;
  }

  error(message: string, error?: Error | unknown, context?: LogContext): void {
    if (!this.shouldLog(LogLevel.ERROR)) return;
    
    const errorObj = error instanceof Error 
      ? { message: error.message, stack: this.isDevelopment ? error.stack : undefined }
      : error;
    
    console.error(
      this.formatMessage('ERROR', message, { ...context, error: this.sanitize(errorObj) })
    );
  }

  warn(message: string, context?: LogContext): void {
    if (!this.shouldLog(LogLevel.WARN)) return;
    console.warn(this.formatMessage('WARN', message, context));
  }

  info(message: string, context?: LogContext): void {
    if (!this.shouldLog(LogLevel.INFO)) return;
    console.log(this.formatMessage('INFO', message, context));
  }

  debug(message: string, context?: LogContext): void {
    if (!this.shouldLog(LogLevel.DEBUG)) return;
    if (this.isDevelopment) {
      console.log(this.formatMessage('DEBUG', message, context));
    }
  }

  verbose(message: string, context?: LogContext): void {
    if (!this.shouldLog(LogLevel.VERBOSE)) return;
    if (this.isDevelopment) {
      console.log(this.formatMessage('VERBOSE', message, context));
    }
  }

  // Performance logging with threshold
  performance(label: string, duration: number, threshold = 100): void {
    if (duration > threshold * 2) {
      this.warn(`Slow operation: ${label}`, { duration: `${duration}ms`, threshold: `${threshold}ms` });
    } else if (duration > threshold && this.isDevelopment) {
      this.debug(`Performance: ${label}`, { duration: `${duration}ms` });
    }
  }

  // Database query logging
  query(sql: string, params?: unknown[], duration?: number): void {
    if (this.isDevelopment) {
      const sanitizedSql = sql.length > 100 ? sql.substring(0, 100) + '...' : sql;
      const sanitizedParams = params ? this.sanitize(params) : undefined;
      
      if (duration && duration > 100) {
        this.warn('Slow query detected', { 
          query: sanitizedSql, 
          duration: `${duration}ms`,
          params: sanitizedParams 
        });
      } else {
        this.debug('Database query', { 
          query: sanitizedSql,
          duration: duration ? `${duration}ms` : undefined
        });
      }
    }
  }
}

// Export singleton instance
export const logger = new Logger();

// Export convenience functions
export const logError = logger.error.bind(logger);
export const logWarn = logger.warn.bind(logger);
export const logInfo = logger.info.bind(logger);
export const logDebug = logger.debug.bind(logger);
export const logVerbose = logger.verbose.bind(logger);
export const logPerformance = logger.performance.bind(logger);
export const logQuery = logger.query.bind(logger);