"use client"

import { useEffect, useRef, useCallback } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export function PrivateAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const initialized = useRef(false)
  const sessionId = useRef<string>("")
  const lastPageViewId = useRef<string | null>(null)
  const pageEnterTime = useRef<number>(0)
  
  // Skip analytics in production until proper setup
  const shouldSkipAnalytics = () => {
    return typeof window !== 'undefined' && 
           (process.env.NEXT_PUBLIC_SKIP_ANALYTICS === 'true' || 
            window.location.hostname.includes('vercel.app')) // Skip on Vercel preview deployments
  }

  // Handle page exit
  const handlePageExit = useCallback(() => {
    if (shouldSkipAnalytics()) return;
    
    // Update time on page
    if (lastPageViewId.current && pageEnterTime.current > 0) {
      const timeOnPage = Math.round((performance.now() - pageEnterTime.current) / 1000)

      try {
        // Use navigator.sendBeacon which is more reliable for beforeunload
        navigator.sendBeacon(
          `/api/analytics/beacon`,
          JSON.stringify({
            table: "page_views",
            payload: {
              id: lastPageViewId.current,
              time_on_page: timeOnPage,
              exit_page: true,
            },
          }),
        )
      } catch (e) {
        // Silently fail for analytics
      }
    }
  }, [])

  // Track page view
  const trackPageView = useCallback(async () => {
    if (shouldSkipAnalytics()) return;
    
    try {
      // Simplified payload with only essential fields
      const payload = {
        session_id: sessionId.current,
        page_path: pathname || "/",
        page_title: document.title || "Untitled Page",
        timestamp: new Date().toISOString(),
      }

      // Use the beacon API
      const response = await fetch("/api/analytics/beacon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          table: "page_views",
          payload,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        // Silently fail, don't log warnings
      } else if (result.id) {
        lastPageViewId.current = result.id
      }
    } catch (error) {
      // Silently fail for analytics
    }
  }, [pathname])

  // Initialize session
  const initSession = useCallback(async (isReturning: boolean) => {
    if (shouldSkipAnalytics()) return;
    
    try {
      // Create new session record using the beacon API
      const sessionResponse = await fetch("/api/analytics/beacon", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          table: "sessions",
          payload: {
            session_id: sessionId.current,
            first_visit_time: new Date().toISOString(),
            last_activity_time: new Date().toISOString(),
            ip_address: "127.0.0.1", // Simplified
            entry_page: pathname || "/",
            is_returning: isReturning,
          },
        }),
      })

      // Track initial page view if session creation was successful
      if (sessionResponse.ok) {
        await trackPageView()
        pageEnterTime.current = performance.now()
      }
    } catch (error) {
      // Silently fail for analytics
    }
  }, [pathname, trackPageView])

  // Initialize analytics
  useEffect(() => {
    if (initialized.current || shouldSkipAnalytics()) return;
    
    initialized.current = true

    try {
      // Generate or retrieve session ID
      let existingSessionId = localStorage.getItem("ex314_session_id")
      const sessionExpiry = localStorage.getItem("ex314_session_expiry")
      const hasVisitedBefore = localStorage.getItem("ex314_has_visited")

      // Check if session is expired (30 min idle)
      if (sessionExpiry && Number.parseInt(sessionExpiry) < Date.now()) {
        existingSessionId = null
      }

      if (!existingSessionId) {
        // Create new session ID
        existingSessionId = crypto.randomUUID()
        localStorage.setItem("ex314_session_id", existingSessionId)
      }

      sessionId.current = existingSessionId

      // Update session expiry (30 min from now)
      localStorage.setItem("ex314_session_expiry", (Date.now() + 30 * 60 * 1000).toString())

      // Mark as returning visitor if they've been here before
      if (!hasVisitedBefore) {
        localStorage.setItem("ex314_has_visited", "true")
      }

      // Initialize session
      initSession(!!hasVisitedBefore)

      // Track when user leaves the site
      window.addEventListener("beforeunload", handlePageExit)

      return () => {
        window.removeEventListener("beforeunload", handlePageExit)
      }
    } catch (error) {
      // Silently fail for analytics
    }
  }, [initSession, handlePageExit])

  // Track page views
  useEffect(() => {
    if (!initialized.current || !sessionId.current || shouldSkipAnalytics()) return;
    
    try {
      // If there was a previous page view, record time spent on that page
      if (lastPageViewId.current && pageEnterTime.current > 0) {
        const timeOnPage = Math.round((performance.now() - pageEnterTime.current) / 1000)

        // Update previous page view with time spent
        fetch("/api/analytics/beacon", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            table: "page_views",
            payload: {
              id: lastPageViewId.current,
              time_on_page: timeOnPage,
              exit_page: false,
            },
          }),
        }).catch(() => {
          // Silently fail
        })
      }

      // Track new page view
      trackPageView()

      // Reset page enter time
      pageEnterTime.current = performance.now()

      // Update session expiry
      localStorage.setItem("ex314_session_expiry", (Date.now() + 30 * 60 * 1000).toString())
    } catch (error) {
      // Silently fail for analytics
    }
  }, [pathname, searchParams, trackPageView])

  return null // This component doesn't render anything
}