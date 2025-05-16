import { auth } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'

export function createServerSupabaseClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      async accessToken() {
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