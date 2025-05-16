import { NextRequest } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Setup Supabase client with fallbacks for build time
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-for-build.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key-for-build';
const supabase = createClient(supabaseUrl, supabaseKey);

// Allowed tables for analytics beacons
const ALLOWED_TABLES = ['page_views', 'chat_analytics', 'feature_usage', 'share_analytics'];

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const { table, event_type, ...eventData } = data

    // Validate the table name
    if (!table || !ALLOWED_TABLES.includes(table)) {
      return Response.json({ error: "Invalid table name" }, { status: 400 })
    }

    // Check for required fields based on table
    if (table === 'page_views') {
      // Page views require session_id
      if (!eventData.session_id) {
        return Response.json({ error: "Missing required field: session_id" }, { status: 400 })
      }

      // Insert page view data
      const { error: insertError } = await supabase
        .from(table)
        .insert({
          event_type: event_type || 'page_view',
          url: eventData.url,
          referrer: eventData.referrer,
          session_id: eventData.session_id,
          user_id: eventData.user_id,
          browser: eventData.browser,
          os: eventData.os,
          device: eventData.device,
          timestamp: new Date().toISOString(),
          metadata: eventData.metadata || {}
        })

      if (insertError) {
        console.error("Error inserting page view:", insertError)
        return Response.json({ error: "Failed to record page view", details: insertError.message }, { status: 500 })
      }

    } else if (table === 'chat_analytics') {
      // Chat analytics require session_id
      if (!eventData.session_id) {
        return Response.json({ error: "Missing required field: session_id" }, { status: 400 })
      }

      // Insert chat analytics data
      const { error: insertError } = await supabase
        .from(table)
        .insert({
          event_type: event_type || 'message',
          session_id: eventData.session_id,
          user_id: eventData.user_id,
          chat_id: eventData.chat_id,
          message_id: eventData.message_id,
          model: eventData.model,
          prompt_tokens: eventData.prompt_tokens,
          completion_tokens: eventData.completion_tokens,
          timestamp: new Date().toISOString(),
          metadata: eventData.metadata || {}
        })

      if (insertError) {
        console.error("Error inserting chat analytics:", insertError)
        return Response.json({ error: "Failed to record chat analytics", details: insertError.message }, { status: 500 })
      }

    } else if (table === 'feature_usage') {
      // Insert feature usage data
      const { error: insertError } = await supabase
        .from(table)
        .insert({
          event_type: event_type || 'feature_use',
          feature_name: eventData.feature_name,
          session_id: eventData.session_id,
          user_id: eventData.user_id,
          timestamp: new Date().toISOString(),
          metadata: eventData.metadata || {}
        })

      if (insertError) {
        console.error("Error inserting feature usage:", insertError)
        return Response.json({ error: "Failed to record feature usage", details: insertError.message }, { status: 500 })
      }

    } else if (table === 'share_analytics') {
      // Insert share analytics data
      const { error: insertError } = await supabase
        .from(table)
        .insert({
          event_type: event_type || 'share',
          platform: eventData.platform,
          content_type: eventData.content_type,
          content_id: eventData.content_id,
          session_id: eventData.session_id,
          user_id: eventData.user_id,
          timestamp: new Date().toISOString(),
          metadata: eventData.metadata || {}
        })

      if (insertError) {
        console.error("Error inserting share analytics:", insertError)
        return Response.json({ error: "Failed to record share analytics", details: insertError.message }, { status: 500 })
      }
    }

    return Response.json({ success: true })
  } catch (error) {
    console.error("Beacon error:", error)
    return Response.json({ error: "Internal server error" }, { status: 500 })
  }
}
