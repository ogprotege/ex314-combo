import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-for-build.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key-for-build';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Only warn during runtime, not during build
const isRuntime = typeof window !== 'undefined' || process.env.NODE_ENV === 'development';

if (isRuntime && (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'https://placeholder-for-build.supabase.co')) {
  console.warn('⚠️ Missing Supabase environment variables. Check .env.local.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getServiceSupabase = () => {
  if (isRuntime && !supabaseServiceKey) {
    console.warn('⚠️ SUPABASE_SERVICE_ROLE_KEY is not defined.');
  }

  return createClient(supabaseUrl, supabaseServiceKey || supabaseAnonKey || 'placeholder-key-for-build');
}; 