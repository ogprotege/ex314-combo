import { NextRequest } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase with fallbacks for build time
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder-for-build.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-key-for-build';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(req: NextRequest) {
  try {
    // Skip during build time
    if (supabaseUrl === 'https://placeholder-for-build.supabase.co') {
      return Response.json({
        success: false,
        message: "Running in build environment, skipping database operations"
      });
    }

    // Collect environment diagnostic information
    const diagnostics = {
      environment: {
        node_env: process.env.NODE_ENV || 'unknown',
        vercel_env: process.env.VERCEL_ENV || 'unknown',
        region: process.env.VERCEL_REGION || 'unknown',
      },
      config: {
        supabase_url: supabaseUrl ? 'set' : 'not set',
        supabase_key: supabaseKey ? 'set' : 'not set',
        openai_api_key: process.env.OPENAI_API_KEY ? 'set' : 'not set',
        together_api_key: process.env.TOGETHER_API_KEY ? 'set' : 'not set',
      },
      timestamp: new Date().toISOString()
    };

    // Check database connectivity
    let databaseStatus = 'unknown';
    let tablesStatus = {};
    
    try {
      // Test a simple query
      const { data, error } = await supabase.from('health_check').select('*').limit(1);
      
      if (error) {
        databaseStatus = `Error: ${error.message}`;
      } else {
        databaseStatus = 'connected';
        
        // Check the tables
        const tables = ['page_views', 'chat_analytics', 'feature_usage', 'share_analytics'];
        
        for (const table of tables) {
          try {
            const { error: tableError } = await supabase.from(table).select('count').limit(1);
            tablesStatus[table] = tableError ? `Error: ${tableError.message}` : 'exists';
          } catch (tableCheckError) {
            tablesStatus[table] = `Exception: ${tableCheckError.message}`;
          }
        }
      }
    } catch (dbError) {
      databaseStatus = `Connection error: ${dbError.message}`;
    }

    return Response.json({
      success: true,
      diagnostics,
      database: {
        status: databaseStatus,
        tables: tablesStatus
      }
    });
  } catch (error) {
    console.error("Diagnostic error:", error);
    return Response.json({ 
      success: false, 
      error: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}
