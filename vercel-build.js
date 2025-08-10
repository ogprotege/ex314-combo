/**
 * Pre-build configuration script for Vercel deployments
 * This script helps ensure the build environment is properly set up
 */

// Output current build environment
console.log('📦 Build environment configuration:');
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`Firebase configured: ${!!process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`);

// Exit successfully
process.exit(0);
