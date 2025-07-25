import { NextRequest } from "next/server"
import { getAllSaints, getSaint } from "@/lib/saints-data"

export async function GET(req: NextRequest) {
  // Get URL and params
  const { searchParams } = new URL(req.url)
  const id = searchParams.get("id")
  const feastDate = searchParams.get("feastDate")
  const type = searchParams.get("type")
  const patronOf = searchParams.get("patronOf")
  const limit = parseInt(searchParams.get("limit") || "0")
  
  try {
    // If an ID is provided, return just that saint
    if (id) {
      const saint = await getSaint(id)
      if (!saint) {
        return Response.json({ error: "Saint not found" }, { status: 404 })
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