import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

// Initialize Firebase Admin SDK
const initializeFirebaseAdmin = () => {
  if (getApps().length > 0) {
    return getApps()[0];
  }

  // Check for service account credentials
  const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g, '\n');
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
  const projectId = process.env.FIREBASE_ADMIN_PROJECT_ID || process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

  if (!privateKey || !clientEmail || !projectId) {
    throw new Error('Firebase Admin SDK credentials not configured. Please set FIREBASE_ADMIN_* environment variables.');
  }

  return initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
};

// Get Firebase Admin Auth instance
export const getAdminAuth = () => {
  try {
    initializeFirebaseAdmin();
    return getAuth();
  } catch (error) {
    console.error('Failed to initialize Firebase Admin:', error);
    throw error;
  }
};

// Verify ID token from client
export const verifyIdToken = async (token: string) => {
  try {
    const auth = getAdminAuth();
    const decodedToken = await auth.verifyIdToken(token);
    return decodedToken;
  } catch (error) {
    console.error('Failed to verify ID token:', error);
    return null;
  }
};

// Check if user is admin
export const checkAdminClaim = async (uid: string) => {
  try {
    const auth = getAdminAuth();
    const user = await auth.getUser(uid);
    return user.customClaims?.admin === true;
  } catch (error) {
    console.error('Failed to check admin claim:', error);
    return false;
  }
};

// Set admin claim for a user
export const setAdminClaim = async (uid: string, isAdmin: boolean) => {
  try {
    const auth = getAdminAuth();
    await auth.setCustomUserClaims(uid, { admin: isAdmin });
    return true;
  } catch (error) {
    console.error('Failed to set admin claim:', error);
    return false;
  }
};