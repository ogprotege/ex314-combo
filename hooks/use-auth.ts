"use client"

import { useContext } from "react"
import { AuthContext } from "@/context/AuthContext"

export const useAuth = () => {
  // Add build-time check to skip auth
  if (process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true') {
    return { isAuthenticated: false, isLoading: false };
  }

  try {
    const context = useContext(AuthContext)
    if (context === undefined) {
      throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
  } catch (e) {
    console.warn("Error using auth context:", e)
    return {
      isAuthenticated: false,
      user: null,
      login: () => { window.location.href = "/sign-in" },
      logout: () => {},
      isLoading: false,
      isAdmin: false,
    }
  }
}