"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { auth, db } from "@/lib/firebase"
import { doc, getDoc } from "firebase/firestore"
import { ChiRho } from "@/components/chi-rho"
import Link from "next/link"
import { useAuth } from "@/hooks/use-auth"

export default function DashboardPage() {
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
            setUserData(userDoc.data())
          }
        } catch (error) {
          console.error("Error fetching user data:", error)
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
        <ChiRho className="h-12 w-12 animate-pulse" />
        <p className="mt-4">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="site-header w-full py-6 px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <ChiRho className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Ex314.ai</h1>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/resources" className="nav-link">
            Resources
          </Link>
          <Link href="/calendar" className="nav-link">
            Liturgical Calendar
          </Link>
          <Link href="/prayers" className="nav-link">
            Prayers
          </Link>
        </nav>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-2 text-center">Your Prayer Dashboard</h1>
        <p className="text-gray-600 mb-8 text-center">
          Welcome, {user?.name || userData?.name || user?.email?.split('@')[0] || "Friend"}! Manage your saved prayers and devotions.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Saved Prayers</h2>
            <p className="text-gray-600 mb-4">You haven't saved any prayers yet.</p>
            <Link
              href="/prayers"
              className="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white transition-all duration-200 hover:bg-blue-700"
            >
              Browse Prayers
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Prayer Reminders</h2>
            <p className="text-gray-600 mb-4">Set up reminders for daily prayers.</p>
            <button className="rounded-lg bg-white px-4 py-2 text-blue-600 transition-all duration-200 hover:bg-blue-50 border border-blue-200">
              Set Reminder
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Chat Interface</h2>
            <p className="text-gray-600 mb-4">Ask questions about Catholic theology and teaching.</p>
            <Link
              href="/chat"
              className="inline-block rounded-lg bg-purple-600 px-4 py-2 text-white transition-all duration-200 hover:bg-purple-700 button-highlight"
            >
              Start Chatting
            </Link>
          </div>
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Prayer Journal</h2>
          <p className="text-gray-600 mb-4">Record your prayer intentions and reflections.</p>
          <textarea
            className="w-full rounded-lg border border-gray-300 p-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
            rows={5}
            placeholder="Write your prayer intentions here..."
          ></textarea>
          <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white transition-all duration-200 hover:bg-blue-700">
            Save Journal Entry
          </button>
        </div>
      </main>

      <footer className="bg-gray-100 py-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChiRho className="h-6 w-6" />
            <span className="font-semibold">Ex314.ai</span>
          </div>
          <div className="text-sm text-gray-500">© 2025 Ex314.ai</div>
        </div>
      </footer>
    </div>
  )
}