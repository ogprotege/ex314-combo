"use client"

import { useState, useEffect } from "react"
import { 
  onAuthStateChanged, 
  signOut as firebaseSignOut 
} from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '@/lib/firebase'

type User = {
  name?: string
  email?: string
  picture?: string
}

type AuthState = {
  isAuthenticated: boolean
  user: User | null
  login: () => void
  logout: () => void
  isLoading: boolean
  isAdmin: boolean
}

/**
 * A hook for Firebase authentication that has the same interface
 * as the previous authentication implementation
 */
export const useFallbackAuth = (): AuthState => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    // Skip auth check during build time or when no Firebase key is provided
    if (
      process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true' ||
      !process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY === 'placeholder-api-key'
    ) {
      const storedUser =
        typeof window !== 'undefined' ? localStorage.getItem('demoUser') : null
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      } else {
        setUser({ name: 'Demo User', email: 'demo@example.com' })
      }
      setIsAuthenticated(true)
      setIsLoading(false)
      return () => {}
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in
        const userData: User = {
          name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || '',
          email: firebaseUser.email || '',
          picture: firebaseUser.photoURL || '',
        }
        
        setUser(userData)
        setIsAuthenticated(true)
        
        // Check if user is admin by checking Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid))
          if (userDoc.exists()) {
            setIsAdmin(userDoc.data()?.role === 'admin')
          } else {
            setIsAdmin(false)
          }
        } catch (error) {
          console.error('Error checking admin status:', error)
          setIsAdmin(false)
        }
      } else {
        // User is signed out
        setUser(null)
        setIsAuthenticated(false)
        setIsAdmin(false)
      }
      
      setIsLoading(false)
    })
    
    // Cleanup subscription
    return () => unsubscribe()
  }, [])

  const login = () => {
    if (
      process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true' ||
      !process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY === 'placeholder-api-key'
    ) {
      const demo = { name: 'Demo User', email: 'demo@example.com' }
      if (typeof window !== 'undefined') {
        localStorage.setItem('demoUser', JSON.stringify(demo))
      }
      setUser(demo)
      setIsAuthenticated(true)
      setIsLoading(false)
      return
    }
    window.location.href = "/sign-in"
  }

  const logout = async () => {
    if (
      process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true' ||
      !process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY === 'placeholder-api-key'
    ) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('demoUser')
      }
      setUser(null)
      setIsAuthenticated(false)
      window.location.href = "/"
      return
    }

    try {
      await firebaseSignOut(auth)
      window.location.href = "/"
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return {
    isAuthenticated,
    user,
    login,
    logout,
    isLoading,
    isAdmin,
  }
}

// Export both as named and default export
export const useAuth = useFallbackAuth
export default useFallbackAuth
