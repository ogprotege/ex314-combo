import { NextRequest } from "next/server";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function GET(req: NextRequest) {
  try {
    // In a real implementation, this would verify a Firebase token
    // from the request headers or cookies
    
    // This is a simplified implementation for demonstration
    const authHeader = req.headers.get('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return Response.json({ isAdmin: false, error: 'No token provided' }, { status: 401 });
    }
    
    const token = authHeader.split(' ')[1];
    
    // In a real implementation, you would verify this token with Firebase
    // and get the user ID from it. For now, we'll just use it as the user ID directly
    // for demonstration purposes.
    const userId = token;
    
    // Check if the user is an admin
    const userDoc = await getDoc(doc(db, 'users', userId));
    
    if (!userDoc.exists()) {
      return Response.json({ isAdmin: false, error: 'User not found' }, { status: 404 });
    }
    
    const isAdmin = userDoc.data()?.role === 'admin';
    
    return Response.json({ isAdmin });
  } catch (error) {
    console.error('Error checking admin status:', error);
    return Response.json({ isAdmin: false, error: 'Server error' }, { status: 500 });
  }
}