/**
 * Custom Application Error Classes
 * Standardized error handling across the application
 */

/**
 * Base application error class
 */
export class AppError extends Error {
  public readonly isOperational: boolean;
  public readonly timestamp: Date;

  constructor(
    public readonly code: string,
    message: string,
    public readonly statusCode: number = 500,
    isOperational: boolean = true
  ) {
    super(message);
    this.name = this.constructor.name;
    this.isOperational = isOperational;
    this.timestamp = new Date();
    
    // Maintains proper stack trace for where error was thrown
    Error.captureStackTrace(this, this.constructor);
  }

  toJSON() {
    return {
      name: this.name,
      code: this.code,
      message: this.message,
      statusCode: this.statusCode,
      timestamp: this.timestamp,
      ...(process.env.NODE_ENV === 'development' && { stack: this.stack })
    };
  }
}

/**
 * Validation error for invalid input
 */
export class ValidationError extends AppError {
  constructor(message: string, public readonly errors?: any) {
    super('VALIDATION_ERROR', message, 400);
    this.errors = errors;
  }
}

/**
 * Authentication error
 */
export class AuthenticationError extends AppError {
  constructor(message: string = 'Authentication required') {
    super('AUTH_ERROR', message, 401);
  }
}

/**
 * Authorization error
 */
export class AuthorizationError extends AppError {
  constructor(message: string = 'Insufficient permissions') {
    super('FORBIDDEN', message, 403);
  }
}

/**
 * Not found error
 */
export class NotFoundError extends AppError {
  constructor(resource: string) {
    super('NOT_FOUND', `${resource} not found`, 404);
  }
}

/**
 * Rate limit error
 */
export class RateLimitError extends AppError {
  constructor(
    message: string = 'Too many requests',
    public readonly retryAfter?: number
  ) {
    super('RATE_LIMIT', message, 429);
  }
}

/**
 * Database error
 */
export class DatabaseError extends AppError {
  constructor(message: string = 'Database operation failed') {
    super('DB_ERROR', message, 500);
  }
}

/**
 * External API error
 */
export class ExternalAPIError extends AppError {
  constructor(
    service: string,
    message: string = 'External service error'
  ) {
    super('EXTERNAL_API_ERROR', `${service}: ${message}`, 502);
  }
}

/**
 * Error handler utility
 */
export function handleError(error: unknown): AppError {
  // If it's already an AppError, return it
  if (error instanceof AppError) {
    return error;
  }

  // If it's a standard Error
  if (error instanceof Error) {
    return new AppError('INTERNAL_ERROR', error.message, 500, false);
  }

  // Unknown error type
  return new AppError(
    'UNKNOWN_ERROR',
    'An unexpected error occurred',
    500,
    false
  );
}

/**
 * Express/Next.js error response formatter
 */
export function formatErrorResponse(error: AppError) {
  return {
    error: {
      code: error.code,
      message: error.message,
      ...(error instanceof ValidationError && error.errors && { 
        details: error.errors 
      }),
      ...(error instanceof RateLimitError && error.retryAfter && { 
        retryAfter: error.retryAfter 
      })
    }
  };
}