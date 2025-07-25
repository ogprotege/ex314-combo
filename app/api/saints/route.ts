import { NextRequest } from "next/server"
import { getAllSaints, getSaint, getSaintOfTheDay } from "@/lib/saints-data"

export async function GET(req: NextRequest) {
  // Get URL and params
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")
  const feastDate = searchParams.get("feastDate")
  const type = searchParams.get("type")
  const patronOf = searchParams.get("patronOf")
  const limit = parseInt(searchParams.get("limit") || "0")
  const today = searchParams.get("today") // New parameter for saint of the day
  const date = searchParams.get("date") // Optional date for specific day
  
  try {
    // If an ID is provided, return just that saint
    if (id) {
      const saint = await getSaint(id)
      if (!saint) {
        return Response.json({ error: "Saint not found" }, { status: 404 })
      }
      return Response.json(saint)
    }
    
    // If today parameter is provided, return saint of the day
    if (today === "true") {
      let targetDate: Date
      if (date) {
        targetDate = new Date(date)
        if (isNaN(targetDate.getTime())) {
          targetDate = new Date()
        }
      } else {
        targetDate = new Date()
      }
      
      const saint = await getSaintOfTheDay(targetDate)
      if (!saint) {
        return Response.json({ 
          name: "No Saint Found",
          feastDate: targetDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' }),
          shortBio: "There is no saint listed for today in our database."
        })
      }
      return Response.json(saint)
    }
    
    // Otherwise, get all saints and filter
    let saints = await getAllSaints()
    
    // Apply filters
    if (feastDate) {
      saints = saints.filter(saint => saint.feastDate.includes(feastDate))
    }
    
    if (type) {
      saints = saints.filter(saint => saint.type === type)
    }
    
    if (patronOf) {
      saints = saints.filter(saint => 
        saint.patronOf?.some(patron => 
          patron.toLowerCase().includes(patronOf.toLowerCase())
        )
      )
    }
    
    // Apply limit
    if (limit > 0) {
      saints = saints.slice(0, limit)
    }
    
    return Response.json(saints)
  } catch (error) {
    console.error("Error fetching saints:", error)
    return Response.json(
      { error: "Failed to fetch saints data" },
      { status: 500 }
    )
  }
}