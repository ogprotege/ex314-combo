import { NextRequest } from "next/server"
import { createClient } from '@supabase/supabase-js'
import path from 'path'
import fs from 'fs'

// Initialize Supabase with fallbacks for build time
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-for-build.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key-for-build';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(req: NextRequest) {
  // Skip during build time
  if (supabaseUrl === 'https://placeholder-for-build.supabase.co') {
    return Response.json({
      success: false,
      message: "Running in build environment, skipping database operations"
    });
  }
  
  try {
    // Get SQL file path
    const sqlFilePath = path.join(process.cwd(), "sql", "contact-tables.sql")
    
    // Read SQL file
    const sql = fs.readFileSync(sqlFilePath, "utf8")
    
    // Execute SQL
    const { error } = await supabase.rpc("exec_sql", {
      sql_string: sql,
    })
    
    if (error) {
      console.error("Error creating contact tables:", error)
      return Response.json({ success: false, error: "Failed to create contact submissions table" }, { status: 500 })
    }
    
    return Response.json({ success: true, message: "Contact tables created successfully" })
  } catch (error) {
    console.error("Error setting up contact tables:", error)
    return Response.json({ 
      success: false, 
      error: error instanceof Error ? error.message : String(error) 
    }, { status: 500 })
  }
}
