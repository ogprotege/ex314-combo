import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { adminMiddleware } from "./middleware/admin"

// This function handles your Content Security Policy headers
function addSecurityHeaders(request: NextRequest, response: NextResponse) {
  const cspDirectives = [
    "default-src 'self'",
    // Scripts: self, inline for UI components, unsafe-eval (consider reducing if possible), Google Tag Manager, Cloudflare Turnstile, Firebase
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://challenges.cloudflare.com https://apis.google.com https://*.firebaseapp.com",
    // Styles: self, inline for UI components
    "style-src 'self' 'unsafe-inline'",
    // Connections: self, Google Analytics, Cloudflare Turnstile, Firebase
    "connect-src 'self' https://www.google-analytics.com https://challenges.cloudflare.com https://*.turnstile.com https://*.googleapis.com https://*.firebaseio.com https://*.cloudfunctions.net",
    // Frames: self, Cloudflare Turnstile, Firebase Auth
    "frame-src 'self' https://challenges.cloudflare.com https://*.firebaseapp.com https://auth.firebase.com",
    // Images: self, data URIs, blobs, Unsplash, Cloudflare Turnstile
    "img-src 'self' data: blob: https://images.unsplash.com https://challenges.cloudflare.com https://www.gstatic.com",
    "font-src 'self' data: https://fonts.gstatic.com",
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
const isPublicRoute = (pathname: string): boolean => {
  const publicRoutes = [
    "/",
    "/sign-in",
    "/sign-up",
    "/prayers",
    "/calendar",
    "/rosary",
    "/about",
    "/resources",
    "/contact",
    "/privacy",
    "/terms",
    "/unauthorized",
    "/api/public-route",
  ];
  
  return publicRoutes.some(route => 
    pathname === route || 
    pathname.startsWith(`${route}/`) ||
    pathname.startsWith(`${route}?`)
  );
}

// Define admin routes
const isAdminRoute = (pathname: string): boolean => {
  return pathname.startsWith('/admin') || pathname.startsWith('/api/admin');
}

export default async function middleware(req: NextRequest) {
  // Skip auth check during build time
  if (process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true') {
    return NextResponse.next();
  }

  // Apply security headers to all responses
  const response = NextResponse.next()
  const secureResponse = addSecurityHeaders(req, response)

  // Check if this is an admin route
  if (isAdminRoute(req.nextUrl.pathname)) {
    return await adminMiddleware(req);
  }

  return secureResponse;
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