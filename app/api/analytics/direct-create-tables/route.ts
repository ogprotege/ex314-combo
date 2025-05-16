import { NextRequest } from "next/server"
import { createClient } from '@supabase/supabase-js'
import path from 'path'
import fs from 'fs'

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
    
    // Define SQL file paths
    const sqlFilePaths = [
      path.join(process.cwd(), "app/api/analytics/tables/page_views.sql"),
      path.join(process.cwd(), "app/api/analytics/tables/chat_analytics.sql"),
      path.join(process.cwd(), "app/api/analytics/tables/feature_usage.sql")
    ];
    
    const results = {
      page_views: { success: false, error: null },
      chat_analytics: { success: false, error: null },
      feature_usage: { success: false, error: null }
    };
    
    // Create tables using SQL files
    for (let i = 0; i < sqlFilePaths.length; i++) {
      const filePath = sqlFilePaths[i];
      let tableName;
      
      if (filePath.includes('page_views')) tableName = 'page_views';
      else if (filePath.includes('chat_analytics')) tableName = 'chat_analytics';
      else if (filePath.includes('feature_usage')) tableName = 'feature_usage';
      else continue;
      
      try {
        // Read SQL file
        const sql = fs.readFileSync(filePath, 'utf8');
        
        // Execute SQL
        const { error } = await supabase.rpc("exec_sql", {
          sql_string: sql,
        });
        
        if (error) {
          results[tableName].error = error.message;
        } else {
          results[tableName].success = true;
        }
      } catch (error) {
        results[tableName].error = error instanceof Error ? error.message : String(error);
      }
    }
    
    // Verify tables exist
    for (const tableName of Object.keys(results)) {
      if (results[tableName].success) {
        try {
          const { error } = await supabase.from(tableName).select('count').limit(1);
          results[tableName].exists = !error;
        } catch (error) {
          results[tableName].exists = false;
        }
      }
    }
    
    // Count successful tables
    const successCount = Object.values(results).filter(r => r.success).length;
    const totalTables = Object.keys(results).length;
    
    return Response.json({
      success: successCount > 0,
      message: `Created ${successCount}/${totalTables} tables successfully`,
      tables: results
    });
  } catch (error) {
    console.error("Error creating analytics tables:", error);
    return Response.json({
      success: false,
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 });
  }
}
