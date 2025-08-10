"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { SiteFooter } from "@/components/site-footer"
import { UserProfile } from "@/components/user-profile"
import { useAuth } from "@/hooks/use-auth"
import { auth, db } from "@/lib/firebase"
import { doc, getDoc } from "firebase/firestore"

export default function ProfilePage() {
  const authState = useAuth()
  const isAuthenticated = authState.isAuthenticated
  const isLoading = authState.isLoading
  const user = 'user' in authState ? authState.user : null
  
  const router = useRouter()
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    // Redirect unauthenticated users
    if (!isLoading && !isAuthenticated) {
      router.push("/sign-in")
    }

    // Fetch additional user data from Firestore
    async function fetchUserData() {
      if (isAuthenticated && auth.currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid))
          if (userDoc.exists()) {
            setUserData({
              ...userDoc.data(),
              id: auth.currentUser.uid,
              // Include auth properties that might be needed by components
              emailAddresses: [{ emailAddress: auth.currentUser.email }],
              firstName: auth.currentUser.displayName?.split(' ')[0] || '',
              lastName: auth.currentUser.displayName?.split(' ').slice(1).join(' ') || '',
            })
          } else {
            // Create minimal user data if Firestore document doesn't exist
            setUserData({
              id: auth.currentUser.uid,
              emailAddresses: [{ emailAddress: auth.currentUser.email }],
              firstName: auth.currentUser.displayName?.split(' ')[0] || '',
              lastName: auth.currentUser.displayName?.split(' ').slice(1).join(' ') || '',
            })
          }
        } catch (error) {
          console.error("Error fetching user data:", error)
          setUserData({
            id: auth.currentUser.uid,
            emailAddresses: [{ emailAddress: auth.currentUser.email }],
            firstName: auth.currentUser.displayName?.split(' ')[0] || '',
            lastName: auth.currentUser.displayName?.split(' ').slice(1).join(' ') || '',
          })
        }
      }
    }

    if (isAuthenticated && !userData) {
      fetchUserData()
    }
  }, [isAuthenticated, isLoading, router, userData])

  // While loading or redirecting
  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <div className="animate-pulse h-10 w-10 bg-blue-600 rounded-full mb-4"></div>
        <p>Loading profile...</p>
      </div>
    )
  }

  // If we're still loading user data
  if (!userData) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
        <div className="animate-pulse h-10 w-10 bg-blue-600 rounded-full mb-4"></div>
        <p>Loading profile data...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-2 text-4xl font-bold text-center">Your Profile</h1>
        <p className="mb-8 text-center text-gray-600">Manage your account information and prayer preferences</p>

        <UserProfile user={userData} />
      </main>

      <SiteFooter />
    </div>
  )
}