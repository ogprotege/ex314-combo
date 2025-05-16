import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import fs from "fs"
import path from "path"

// Provide fallback values for build time
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-for-build.supabase.co';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key-for-build';

// Initialize Supabase client with service role key for full access
const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET(request: Request) {
  // Check if we're using placeholder values and exit early
  if (supabaseUrl === 'https://placeholder-for-build.supabase.co') {
    return NextResponse.json({
      success: false,
      message: "Running in build environment, skipping database operations",
    });
  }

  try {
    // Read the SQL file
    const sqlFilePath = path.join(process.cwd(), "app/api/analytics/share-analytics-table.sql")
    const sqlContent = fs.readFileSync(sqlFilePath, "utf8")

    // Execute the SQL to create the table
    const { error } = await supabase.rpc("exec_sql", {
      sql_string: sqlContent,
    })

    if (error) {
      console.error("Error creating share analytics table:", error)
      return NextResponse.json(
        {
          error: "Failed to create share analytics table",
          details: error,
        },
        { status: 500 },
      )
    }

    // Check if table exists by trying to select from it
    const { error: checkError } = await supabase.from("share_analytics").select("id").limit(1)

    return NextResponse.json({
      success: true,
      message: "Share analytics table setup completed",
      tableExists: !checkError,
    })
  } catch (error) {
    console.error("Error setting up share analytics table:", error)
    return NextResponse.json(
      {
        error: "Failed to set up share analytics table",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

