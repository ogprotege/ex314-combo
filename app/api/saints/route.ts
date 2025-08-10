import { NextRequest, NextResponse } from "next/server";
import { saintsService } from "@/services/saints.service";
import { checkRateLimit } from "@/lib/database/cache-middleware";
import { z } from "zod";
import { 
  AppError, 
  ValidationError, 
  RateLimitError, 
  NotFoundError,
  handleError,
  formatErrorResponse 
} from "@/lib/errors/AppError";

// Request validation schema
const searchSchema = z.object({
  id: z.string().optional(),
  slug: z.string().optional(),
  query: z.string().optional(),
  type: z.enum(['Martyr', 'Confessor', 'Virgin', 'Pope', 'Doctor', 'Other']).optional(),
  month: z.coerce.number().min(1).max(12).optional(),
  day: z.coerce.number().min(1).max(31).optional(),
  patronage: z.string().optional(),
  liturgicalColor: z.enum(['Red', 'White', 'Green', 'Purple', 'Rose']).optional(),
  limit: z.coerce.number().min(1).max(100).default(20),
  page: z.coerce.number().min(1).default(1),
  sortBy: z.enum(['name', 'feast_date', 'popularity']).default('feast_date'),
  sortOrder: z.enum(['asc', 'desc']).default('asc'),
  today: z.enum(['true', 'false']).optional(),
  date: z.string().optional(),
  popular: z.enum(['true', 'false']).optional(),
  full: z.enum(['true', 'false']).optional(),
});

// Performance monitoring
function startTimer() {
  return process.hrtime.bigint();
}

function endTimer(start: bigint): number {
  const end = process.hrtime.bigint();
  return Number(end - start) / 1_000_000; // Convert to milliseconds
}

export async function GET(req: NextRequest) {
  const timer = startTimer();
  
  try {
    // Extract client identifier for rate limiting
    const clientId = req.headers.get('x-forwarded-for') || 
                    req.headers.get('x-real-ip') || 
                    'anonymous';
    
    // Check rate limit
    const rateLimit = await checkRateLimit(clientId, 100, 60);
    
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': '100',
            'X-RateLimit-Remaining': String(rateLimit.remaining),
            'X-RateLimit-Reset': new Date(rateLimit.resetAt).toISOString(),
            'Retry-After': String(Math.ceil((rateLimit.resetAt - Date.now()) / 1000)),
          }
        }
      );
    }
    
    // Parse and validate query parameters
    const searchParams = Object.fromEntries(new URL(req.url).searchParams);
    const validationResult = searchSchema.safeParse(searchParams);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Invalid parameters', 
          details: validationResult.error.errors 
        },
        { status: 400 }
      );
    }
    
    const params = validationResult.data;
    
    // Handle single saint request by ID
    if (params.id) {
      const saint = params.full === 'true' 
        ? await saintsService.getSaintWithRelations(params.id)
        : await saintsService.getSaint(params.id);
        
      if (!saint) {
        return NextResponse.json(
          { error: 'Saint not found' },
          { status: 404 }
        );
      }
      
      const responseTime = endTimer(timer);
      
      return NextResponse.json(saint, {
        headers: {
          'X-Response-Time': `${responseTime}ms`,
          'X-RateLimit-Remaining': String(rateLimit.remaining),
          'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        }
      });
    }
    
    // Handle single saint request by slug
    if (params.slug) {
      const saint = params.full === 'true'
        ? await saintsService.getSaintWithRelations(params.slug)
        : await saintsService.getSaintBySlug(params.slug);
        
      if (!saint) {
        return NextResponse.json(
          { error: 'Saint not found' },
          { status: 404 }
        );
      }
      
      const responseTime = endTimer(timer);
      
      return NextResponse.json(saint, {
        headers: {
          'X-Response-Time': `${responseTime}ms`,
          'X-RateLimit-Remaining': String(rateLimit.remaining),
          'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        }
      });
    }
    
    // Handle saint of the day request
    if (params.today === 'true') {
      let targetDate: Date;
      
      if (params.date) {
        targetDate = new Date(params.date);
        if (isNaN(targetDate.getTime())) {
          targetDate = new Date();
        }
      } else {
        targetDate = new Date();
      }
      
      const month = targetDate.getMonth() + 1;
      const day = targetDate.getDate();
      
      const saints = await saintsService.getSaintsByDay(month, day);
      
      if (saints.length === 0) {
        return NextResponse.json({
          name: "No Saint Found",
          feastDate: targetDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
          shortBio: "There is no saint listed for today in our database."
        });
      }
      
      const responseTime = endTimer(timer);
      
      // Return the first saint for the day, or all if multiple
      const response = saints.length === 1 ? saints[0] : saints;
      
      return NextResponse.json(response, {
        headers: {
          'X-Response-Time': `${responseTime}ms`,
          'X-RateLimit-Remaining': String(rateLimit.remaining),
          'X-Saints-Count': String(saints.length),
          'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        }
      });
    }
    
    // Handle popular saints request
    if (params.popular === 'true') {
      const popularSaints = await saintsService.getPopularSaints(params.limit);
      const responseTime = endTimer(timer);
      
      return NextResponse.json(popularSaints, {
        headers: {
          'X-Response-Time': `${responseTime}ms`,
          'X-RateLimit-Remaining': String(rateLimit.remaining),
          'Cache-Control': 'public, max-age=7200, s-maxage=86400',
        }
      });
    }
    
    // Handle search/list request with pagination
    const offset = (params.page - 1) * params.limit;
    
    const searchResult = await saintsService.searchSaints({
      query: params.query,
      type: params.type,
      month: params.month,
      day: params.day,
      patronage: params.patronage,
      liturgicalColor: params.liturgicalColor,
      limit: params.limit,
      offset,
      sortBy: params.sortBy,
      sortOrder: params.sortOrder,
    });
    
    const responseTime = endTimer(timer);
    
    // Build pagination links
    const baseUrl = new URL(req.url);
    const buildPageUrl = (page: number) => {
      const url = new URL(baseUrl);
      url.searchParams.set('page', String(page));
      return url.toString();
    };
    
    interface PaginationLinks {
      self: string;
      first?: string;
      prev?: string;
      next?: string;
      last?: string;
    }
    
    const links: PaginationLinks = {
      self: buildPageUrl(params.page),
    };
    
    if (params.page > 1) {
      links.first = buildPageUrl(1);
      links.prev = buildPageUrl(params.page - 1);
    }
    
    if (params.page < searchResult.totalPages) {
      links.next = buildPageUrl(params.page + 1);
      links.last = buildPageUrl(searchResult.totalPages);
    }
    
    return NextResponse.json({
      data: searchResult.data,
      meta: {
        total: searchResult.total,
        page: searchResult.page,
        pageSize: searchResult.pageSize,
        totalPages: searchResult.totalPages,
        responseTime: `${responseTime}ms`,
      },
      links,
    }, {
      headers: {
        'X-Response-Time': `${responseTime}ms`,
        'X-Total-Count': String(searchResult.total),
        'X-Page': String(searchResult.page),
        'X-Page-Size': String(searchResult.pageSize),
        'X-Total-Pages': String(searchResult.totalPages),
        'X-RateLimit-Remaining': String(rateLimit.remaining),
        'Link': Object.entries(links)
          .map(([rel, url]) => `<${url}>; rel="${rel}"`)
          .join(', '),
        'Cache-Control': 'public, max-age=300, s-maxage=3600',
      }
    });
    
  } catch (error) {
    console.error("Error in saints API:", error);
    
    const responseTime = endTimer(timer);
    
    return NextResponse.json(
      { 
        error: "Internal server error",
        message: process.env.NODE_ENV === 'development' 
          ? (error as Error).message 
          : "An error occurred while processing your request"
      },
      { 
        status: 500,
        headers: {
          'X-Response-Time': `${responseTime}ms`,
        }
      }
    );
  }
}

// POST endpoint for creating/updating saints (admin only)
export async function POST(req: NextRequest) {
  // TODO: Add authentication check here
  
  try {
    const body = await req.json();
    
    // Validate the request body
    // Implementation would go here
    
    return NextResponse.json(
      { message: "Saint creation not yet implemented" },
      { status: 501 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}