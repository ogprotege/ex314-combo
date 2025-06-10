import { NextRequest } from "next/server"
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase with fallbacks for build time
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-for-build.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key-for-build';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(req: NextRequest) {
  // Skip actual admin check during build
  if (process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true') {
    return Response.json({ isAdmin: false });
  }

  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    
    // Query the admins table
    const { data, error } = await supabase.from('admins').select('*').eq('user_id', userId).single();
    
    const isAdmin = !error && data !== null;
    
    return Response.json({ isAdmin: isAdmin === true });
  } catch (error) {
    console.error("Error checking admin status:", error);
    return Response.json({ isAdmin: false });
  }
}