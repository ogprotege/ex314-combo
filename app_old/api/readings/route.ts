import { NextRequest } from "next/server"
import { getReadingsForDate } from "@/lib/lectionary-readings"

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const dateStr = searchParams.get("date")
    
    // Validate the date parameter
    if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      return Response.json({ error: "Invalid date format" }, { status: 400 })
    }
    
    // Get readings for the specified date
    const date = new Date(dateStr)
    const readings = getReadingsForDate(date)
    
    // Return 404 if no readings are found
    if (!readings) {
      return Response.json({ error: "Readings not found for the specified date" }, { status: 404 })
    }
    
    return Response.json(readings)
  } catch (error) {
    console.error("Error fetching readings:", error)
    return Response.json({ error: "Failed to fetch readings" }, { status: 500 })
  }
}
