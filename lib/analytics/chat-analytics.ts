import { trackEvent } from "@/lib/analytics"

/**
 * Track when a user starts a new chat session
 */
export function trackNewChat(chatId: string) {
  trackEvent({
    event_type: "new_chat",
    chat_id: chatId,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track when a user sends a message
 * @param chatId The ID of the chat
 * @param messageType Whether it's a user or assistant message
 * @param messageLength The length of the message
 */
export function trackMessage(chatId: string, messageType: "user" | "assistant", messageLength: number) {
  trackEvent({
    event_type: "chat_message",
    chat_id: chatId,
    message_type: messageType,
    message_length: messageLength,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track when a user views a specific chat
 * @param chatId The ID of the chat
 * @param chatTitle The title of the chat
 */
export function trackChatView(chatId: string, chatTitle: string) {
  trackEvent({
    event_type: "content_view",
    content_type: "chat",
    content_id: chatId,
    content_title: chatTitle || "Untitled Chat",
    timestamp: new Date().toISOString()
  })
}

/**
 * Track when a user uses a specific chat feature
 * @param featureName The name of the feature (e.g., "search", "filter", "share")
 * @param details Additional details about the feature usage
 */
export function trackChatFeature(featureName: string, details: Record<string, unknown> = {}) {
  trackEvent({
    event_type: `chat_feature_${featureName}`,
    ...details,
    timestamp: new Date().toISOString(),
  })
}

/**
 * Track search within chat messages
 * @param chatId The ID of the chat
 * @param searchTerm The search term
 * @param resultsCount Number of results found
 */
export function trackMessageSearch(chatId: string, searchTerm: string, resultsCount: number) {
  trackEvent({
    event_type: "message_search",
    chat_id: chatId,
    search_term: searchTerm,
    results_count: resultsCount,
    timestamp: new Date().toISOString(),
  })
}

export function trackMessageFilter(chatId: string, filterType: string, filterValue: string | number | boolean) {
  if (typeof window === "undefined") return

  try {
    fetch("/api/analytics/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        event_type: "message_filter",
        chat_id: chatId,
        filter_type: filterType,
        filter_value: JSON.stringify(filterValue),
        timestamp: new Date().toISOString(),
      }),
    })
  } catch (error) {
    console.error("Error tracking message filter:", error)
  }
}
