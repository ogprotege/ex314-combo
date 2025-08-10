import { NextRequest } from "next/server";
import { verifyIdToken, checkAdminClaim } from "@/lib/firebase-admin";

export async function GET(req: NextRequest) {
  try {
    // Get the authorization header
    const authHeader = req.headers.get('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return Response.json({ isAdmin: false, error: 'No token provided' }, { status: 401 });
    }
    
    // Extract the token
    const token = authHeader.replace('Bearer ', '');
    
    // Verify the Firebase ID token
    const decodedToken = await verifyIdToken(token);
    
    if (!decodedToken) {
      return Response.json({ isAdmin: false, error: 'Invalid token' }, { status: 401 });
    }
    
    // Check if the user has admin custom claims
    const isAdmin = await checkAdminClaim(decodedToken.uid);
    
    return Response.json({ 
      isAdmin,
      uid: decodedToken.uid,
      email: decodedToken.email 
    });
  } catch (error) {
    console.error('Error checking admin status:', error);
    return Response.json({ isAdmin: false, error: 'Server error' }, { status: 500 });
  }
}