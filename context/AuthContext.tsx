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
    // Skip auth check during build time
    if (process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true') {
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
    window.location.href = "/sign-in"
  }

  const logout = async () => {
    try {
      await firebaseSignOut(auth)
      window.location.href = "/"
    } catch (error) {
      console.error('Error signing out:', error)
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