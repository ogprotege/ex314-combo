"use server"

export type SharePlatform = "facebook" | "twitter" | "linkedin" | "whatsapp" | "email" | "copy" | "embed"

interface ConversationContext {
  topic?: string
  length?: number
  query_count?: number
  last_query?: string
  conversation_id?: string
  page_context?: string
  referral_source?: string
  user_journey?: string[]
}

interface ContentShared {
  title?: string
  type?: string
  url: string
  text?: string
  image_url?: string
  tags?: string[]
}

// TODO: Integrate Google Cloud SQL or alternative analytics backend
export async function trackShareEvent(
  platform: SharePlatform,
  url: string,
  conversationContext?: ConversationContext,
  contentShared?: Partial<ContentShared>,
) {
  return { success: true, message: "Analytics disabled" }
}

export async function getShareAnalytics(
  timeframe: "day" | "week" | "month" | "all" = "all",
  includeConversationData = false,
) {
  return { success: true, data: null }
}

export async function exportShareAnalyticsForTraining(startDate?: string, endDate?: string) {
  return { success: true, data: null }
}
