import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Create a fallback mechanism if Clerk is not available
let clerkImported = false
let clerkMiddleware: any = null
let createRouteMatcher: any = null

try {
  // Try to import Clerk
  const clerkServer = require("@clerk/nextjs/server");
  clerkMiddleware = clerkServer.clerkMiddleware;
  createRouteMatcher = clerkServer.createRouteMatcher;
  clerkImported = true;
} catch (e) {
  console.warn("Clerk auth not available in middleware, using fallback auth");
  clerkImported = false;
  
  // Create fallback functions
  clerkMiddleware = () => (req: NextRequest) => NextResponse.next();
  createRouteMatcher = (routes: string[]) => (req: NextRequest) => 
    routes.some(route => new RegExp(`^${route.replace(/\(.*\)/g, '.*').replace(/\*/g, '.*')}$`).test(req.nextUrl.pathname));
}

import { adminMiddleware } from "./middleware/admin"

// This function handles your Content Security Policy headers
function addSecurityHeaders(request: NextRequest, response: NextResponse) {
  const cspDirectives = [
    "default-src 'self'",
    // Scripts: self, inline for UI components, unsafe-eval (consider reducing if possible), Clerk, Google Tag Manager, Cloudflare Turnstile
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.clerk.accounts.dev https://clerk.ex314.ai https://www.googletagmanager.com https://challenges.cloudflare.com",
    // Styles: self, inline for UI components
    "style-src 'self' 'unsafe-inline'",
    // Connections: self, Clerk, Google Analytics, Cloudflare Turnstile
    "connect-src 'self' https://*.clerk.accounts.dev https://clerk.ex314.ai https://www.google-analytics.com https://challenges.cloudflare.com https://*.turnstile.com",
    // Frames: self, Clerk, Cloudflare Turnstile
    "frame-src 'self' https://*.clerk.accounts.dev https://clerk.ex314.ai https://challenges.cloudflare.com",
    // Images: self, data URIs, blobs, Clerk, Unsplash, Cloudflare Turnstile
    "img-src 'self' data: blob: https://*.clerk.accounts.dev https://clerk.ex314.ai https://images.unsplash.com https://challenges.cloudflare.com",
    "font-src 'self' data:",
    "navigate-to 'self' https: mailto:",
  ]

  response.headers.set("Content-Security-Policy", cspDirectives.join("; "))
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  return response
}

// Define public routes
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/prayers(.*)",
  "/calendar(.*)",
  "/rosary(.*)",
  "/about(.*)",
  "/resources(.*)",
  "/contact(.*)",
  "/privacy(.*)",
  "/terms(.*)",
  "/unauthorized(.*)",
  "/api/public-route(.*)",
])

// Define admin routes
const isAdminRoute = createRouteMatcher([
  "/admin(.*)",
  "/api/admin(.*)",
])

export default async function middleware(req: NextRequest) {
  // Skip auth check during build time
  if (process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true') {
    return NextResponse.next();
  }

  // Apply security headers to all responses
  const response = NextResponse.next()
  const secureResponse = addSecurityHeaders(req, response)

  // Check if this is an admin route
  if (isAdminRoute(req)) {
    return await adminMiddleware(req);
  }

  // For Clerk authentication, use their middleware
  if (clerkImported) {
    return clerkMiddleware()(req, secureResponse);
  } else {
    // If Clerk is not available (e.g. during build), just continue
    return secureResponse;
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals, static files, and all file extensions.
    "/((?!_next|[^?]*\\.(?:html?|css|js|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|json|webmanifest|xml|map|txt)).*)",
    // Always run for API routes to protect them by default
    "/api/:path*",
    "/trpc/:path*",
  ],
}

