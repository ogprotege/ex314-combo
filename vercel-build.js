/**
 * Pre-build configuration script for Vercel deployments
 * This script helps ensure the build environment is properly set up
 */

// Set environment variables if not present
process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK = process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK || 'true';

// Placeholder values for required vars to avoid build errors
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  console.log('⚠️ NEXT_PUBLIC_SUPABASE_URL not found, using placeholder for build');
  process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://placeholder-for-build.supabase.co';
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.log('⚠️ NEXT_PUBLIC_SUPABASE_ANON_KEY not found, using placeholder for build');
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = 'placeholder-key-for-build';
}

// Output current build environment
console.log('📦 Build environment configuration:');
console.log(`NEXT_PUBLIC_SKIP_AUTH_CHECK: ${process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK}`);
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`Using Supabase? ${process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder-for-build.supabase.co'}`);

// Exit successfully
process.exit(0); 