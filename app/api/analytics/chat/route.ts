import { NextRequest } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Setup Supabase client with fallbacks for build time
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-for-build.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key-for-build';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function POST(req: NextRequest) {
  try {
    // Skip during build time
    if (supabaseUrl === 'https://placeholder-for-build.supabase.co') {
      return Response.json({
        success: false,
        message: "Running in build environment, skipping database operations"
      });
    }

    const data = await req.json()
    
    // Insert chat analytics data
    const { error } = await supabase.from('chat_analytics').insert({
      chat_id: data.chat_id,
      user_id: data.user_id,
      session_id: data.session_id,
      event_type: data.event_type,
      message_content: data.message_content,
      message_role: data.message_role,
      model: data.model,
      tokens: data.tokens,
      timestamp: new Date().toISOString(),
      platform: data.platform,
      browser: data.browser,
      os: data.os,
    })
    
    if (error) {
      console.error("Error inserting chat analytics:", error)
      return Response.json({ error: `Failed to insert chat analytics: ${error.message}` }, { status: 500 })
    }
    
    return Response.json({
      success: true,
      message: "Chat analytics recorded successfully"
    })
  } catch (error) {
    console.error("Error processing chat analytics:", error)
    return Response.json({ error: "Failed to process analytics" }, { status: 500 })
  }
}
