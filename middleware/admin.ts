import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, getIdTokenResult } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || 'placeholder-api-key',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || 'placeholder-auth-domain',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'placeholder-project-id',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'placeholder-storage-bucket',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || 'placeholder-messaging-id',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || 'placeholder-app-id',
};

/**
 * Middleware to check if a user has admin privileges
 * This can be used to protect admin routes
 */
export async function isAdmin(req: NextRequest) {
  // Skip auth check during build time
  if (process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true') {
    return false;
  }
  
  // In a real implementation, this would verify a Firebase token
  // For now, check a special header or query param for testing
  const isLocalAdmin = req.headers.get("x-is-admin") === "true" ||
                     req.nextUrl.searchParams.get("admin") === "true";
                     
  return isLocalAdmin;
}

/**
 * Middleware to protect admin routes
 * Redirects to /unauthorized if user is not an admin
 */
export async function adminMiddleware(req: NextRequest) {
  // Skip admin check during build time
  if (process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true') {
    return NextResponse.next();
  }
  
  const isAdminUser = await isAdmin(req);
  
  if (!isAdminUser) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }
  
  return NextResponse.next();
}