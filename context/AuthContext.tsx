"use client"

import { createContext, useState, useContext, useEffect, type ReactNode } from "react"
import { 
  User as FirebaseUser, 
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

type AuthContextType = {
  isAuthenticated: boolean
  user: User | null
  login: () => void
  logout: () => void
  isLoading: boolean
  isAdmin: boolean
}

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
  isLoading: true,
  isAdmin: false,
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAdmin, setIsAdmin] = useState(false)
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  useEffect(() => {
    // Skip auth check during build time or when no Firebase key is provided
    if (
      !process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY === 'placeholder-api-key'
    ) {
      const storedUser =
        typeof window !== 'undefined' ? localStorage.getItem('demoUser') : null
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser))
      } else {
        setCurrentUser({ name: 'Demo User', email: 'demo@example.com' })
      }
      setIsAuthenticated(true)
      setIsLoading(false)
      return
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in
        const userData: User = {
          name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || '',
          email: firebaseUser.email || '',
          picture: firebaseUser.photoURL || '',
        }
        
        setCurrentUser(userData)
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
        setCurrentUser(null)
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
      !process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY === 'placeholder-api-key'
    ) {
      const demo = { name: 'Demo User', email: emailFromStorage() }
      if (typeof window !== 'undefined') {
        localStorage.setItem('demoUser', JSON.stringify(demo))
      }
      setCurrentUser(demo)
      setIsAuthenticated(true)
      setIsLoading(false)
      return
    }
    window.location.href = "/sign-in"
  }

  const logout = async () => {
    if (
      !process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY === 'placeholder-api-key'
    ) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('demoUser')
      }
      setCurrentUser(null)
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

  function emailFromStorage() {
    if (typeof window === 'undefined') return 'demo@example.com'
    const stored = localStorage.getItem('demoUser')
    if (!stored) return 'demo@example.com'
    try {
      const parsed = JSON.parse(stored)
      return parsed.email || 'demo@example.com'
    } catch {
      return 'demo@example.com'
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user: currentUser,
        login,
        logout,
        isLoading,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
