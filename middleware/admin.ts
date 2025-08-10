import { NextRequest, NextResponse } from "next/server";
import { verifyIdToken, checkAdminClaim } from '@/lib/firebase-admin';

/**
 * Middleware to check if a user has admin privileges
 * Verifies Firebase ID token and checks admin custom claims
 */
export async function isAdmin(req: NextRequest): Promise<boolean> {
  try {
    // Get the authorization header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return false;
    }

    // Extract the token
    const token = authHeader.replace('Bearer ', '');
    if (!token) {
      return false;
    }

    // Verify the token
    const decodedToken = await verifyIdToken(token);
    if (!decodedToken) {
      return false;
    }

    // Check if user has admin claim
    const isAdminUser = await checkAdminClaim(decodedToken.uid);
    return isAdminUser;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
}

/**
 * Middleware to protect admin routes
 * Redirects to /unauthorized if user is not an admin
 */
export async function adminMiddleware(req: NextRequest) {
  const isAdminUser = await isAdmin(req);
  
  if (!isAdminUser) {
    // For API routes, return 401 Unauthorized
    if (req.nextUrl.pathname.startsWith('/api/')) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      );
    }
    // For pages, redirect to unauthorized page
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }
  
  return NextResponse.next();
}