import { NextRequest } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase with fallbacks for build time
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
    
    const { sql } = await req.json()
    
    if (!sql) {
      return Response.json({ error: "No SQL provided" }, { status: 400 })
    }
    
    // Execute the SQL using Supabase's stored procedure
    const { data, error } = await supabase.rpc("exec_sql", {
      sql_string: sql,
    })
    
    if (error) {
      console.error("Error executing SQL:", error)
      return Response.json({
        success: false,
        error: error.message,
        details: error
      }, { status: 500 })
    }
    
    return Response.json({
      success: true,
      result: data
    })
  } catch (error) {
    console.error("Error in execute-sql endpoint:", error)
    return Response.json({ 
      success: false, 
      error: error instanceof Error ? error.message : String(error) 
    }, { status: 500 })
  }
}
