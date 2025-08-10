export interface AnalyticsEvent {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  value?: number;
  userId?: string;
  sessionId?: string;
  properties?: Record<string, unknown>;
}

export function trackEvent(eventData: AnalyticsEvent): void {
  if (typeof window === "undefined") return;

  // Use navigator.sendBeacon for more reliable tracking
  navigator.sendBeacon(`/api/analytics/chat`, JSON.stringify(eventData));
}
