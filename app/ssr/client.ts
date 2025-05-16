import { auth } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'

export function createServerSupabaseClient() {
  // Provide fallback values for build time
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-for-build.supabase.co';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key-for-build';
  
  // Skip auth during build time with a flag
  const skipAuth = process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true';
  
  return createClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      async accessToken() {
        // Skip auth token fetching during build time
        if (skipAuth || supabaseUrl === 'https://placeholder-for-build.supabase.co') {
          return null;
        }
        
        try {
          // Get the Clerk session token
          return (await auth()).getToken()
        } catch (error) {
          console.error('Error getting Clerk auth token:', error)
          return null
        }
      },
    },
  )
}