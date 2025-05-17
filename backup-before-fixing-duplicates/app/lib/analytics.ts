import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client with fallbacks for build time
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-for-build.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key-for-build';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Check if we're in a build/server environment or lacking credentials
const isBuildEnv = () => {
  // Enhanced build detection
  const isServer = typeof window === "undefined";
  const isSkipAuthEnabled = process.env.NEXT_PUBLIC_SKIP_AUTH_CHECK === 'true';
  const isPlaceholderUrl = supabaseUrl === 'https://placeholder-for-build.supabase.co';
  const isPlaceholderKey = supabaseAnonKey === 'placeholder-key-for-build';
  
  // During build time in production environment (e.g. Vercel)
  const isProductionBuild = process.env.NODE_ENV === 'production' && isServer && !process.env.VERCEL_ENV;
  
  // Return true if any of these conditions are met
  return isServer || isSkipAuthEnabled || isPlaceholderUrl || isPlaceholderKey || isProductionBuild;
};

// Get session ID from localStorage - with extra checks for SSR
function getSessionId(): string | null {
  try {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("ex314_session_id");
  } catch (error) {
    console.warn("Error accessing localStorage:", error);
    return null;
  }
}

// Track feature usage
export function trackFeatureUsage(featureName: string, details: any = {}) {
  // Skip during build time or if missing session ID
  if (isBuildEnv()) return;
  
  const sessionId = getSessionId();
  if (!sessionId) return;

  supabase
    .from("analytics.feature_usage")
    .insert({
      session_id: sessionId,
      feature_name: featureName,
      page_path: window.location.pathname,
      timestamp: new Date().toISOString(),
      details,
    })
    .catch((error) => {
      console.error("Failed to track feature usage:", error);
    });
}

// Track search queries
export function trackSearch(query: string, resultsCount: number, filters: any = {}) {
  // Skip during build time or if missing session ID
  if (isBuildEnv()) return;
  
  const sessionId = getSessionId();
  if (!sessionId) return;

  supabase
    .from("analytics.searches")
    .insert({
      session_id: sessionId,
      query,
      results_count: resultsCount,
      timestamp: new Date().toISOString(),
      filters: Object.keys(filters).length > 0 ? filters : null,
    })
    .catch((error) => {
      console.error("Failed to track search:", error);
    });
}

// Track content views (resources, prayers, etc.)
export function trackContentView(contentType: string, contentId: string, contentTitle: string) {
  // Skip during build time or if missing session ID
  if (isBuildEnv()) return;
  
  const sessionId = getSessionId();
  if (!sessionId) return;

  const startTime = Date.now();

  // Create a record of the content view
  supabase
    .from("analytics.content_views")
    .insert({
      session_id: sessionId,
      content_type: contentType,
      content_id: contentId,
      content_title: contentTitle,
      timestamp: new Date().toISOString(),
    })
    .then(({ data }) => {
      if (!data || !data[0]) return;

      const recordId = data[0].id;

      // Set up a visibility change listener to track time spent
      const visibilityChangeHandler = () => {
        if (document.visibilityState === "hidden") {
          const timeSpent = Math.round((Date.now() - startTime) / 1000);

          // Update the record with time spent
          supabase
            .from("analytics.content_views")
            .update({ time_spent_seconds: timeSpent })
            .eq("id", recordId)
            .catch((error) => {
              console.error("Failed to update content view time:", error);
            });

          // Remove the listener
          document.removeEventListener("visibilitychange", visibilityChangeHandler);
        }
      };

      // Add the visibility change listener
      document.addEventListener("visibilitychange", visibilityChangeHandler);

      // Also update when the user navigates away
      window.addEventListener(
        "beforeunload",
        () => {
          const timeSpent = Math.round((Date.now() - startTime) / 1000);

          // Use sendBeacon for more reliable tracking on page exit
          navigator.sendBeacon(
            `/api/analytics/beacon`,
            JSON.stringify({
              table: "content_views",
              payload: {
                id: recordId,
                time_spent_seconds: timeSpent,
              },
            }),
          );
        },
        { once: true },
      );
    })
    .catch((error) => {
      console.error("Failed to track content view:", error);
    });
}

// Track conversion events
export function trackConversion(conversionType: string, details: any = {}) {
  // Skip during build time or if missing session ID
  if (isBuildEnv()) return;
  
  const sessionId = getSessionId();
  if (!sessionId) return;

  // Track the conversion event
  supabase
    .from("analytics.events")
    .insert({
      session_id: sessionId,
      event_type: "conversion",
      page_path: window.location.pathname,
      timestamp: new Date().toISOString(),
      additional_data: {
        conversion_type: conversionType,
        ...details,
      },
    })
    .catch((error) => {
      console.error("Failed to track conversion:", error);
    });

  // Update the user journey with conversion info
  supabase
    .from("analytics.user_journeys")
    .update({
      conversion_achieved: true,
      conversion_type: conversionType,
    })
    .eq("session_id", sessionId)
    .is("conversion_achieved", null)
    .catch((error) => {
      console.error("Failed to update journey with conversion:", error);
    });
}
