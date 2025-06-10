/**
 * Pre-build configuration script for Vercel deployments
 * This script helps ensure the build environment is properly set up
 */

// Set environment variables if not present
process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK = process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK || 'true';

// Output current build environment
console.log('📦 Build environment configuration:');
console.log(`NEXT_PUBLIC_SKIP_AUTH_CHECK: ${process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK}`);
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

// Exit successfully
process.exit(0);
