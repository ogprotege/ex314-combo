"use client"

import { useContext } from "react"
import { AuthContext } from "@/context/AuthContext"
import { useFallbackAuth } from "./use-fallback-auth"

// Create a fallback mechanism if Clerk is not available
let clerkImported = false

try {
  // Try to require ClerkProvider - if this throws, we know it's not available
  require("@clerk/nextjs")
  clerkImported = true
} catch (e) {
  console.warn("Clerk auth not available, using fallback auth")
  clerkImported = false
}

export const useAuth = () => {
  // Add build-time check to skip auth
  if (process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true') {
    return { isAuthenticated: false, isLoading: false };
  }

  // If Clerk is available, use the AuthContext which integrates with Clerk
  if (clerkImported) {
    try {
      const context = useContext(AuthContext)
      if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
      }
      return context
    } catch (e) {
      // If there's any error using AuthContext, fall back to local auth
      console.warn("Error using Clerk auth, falling back to local auth:", e)
      return useFallbackAuth()
    }
  }
  
  // If Clerk is not available, use the fallback auth
  return useFallbackAuth()
}
