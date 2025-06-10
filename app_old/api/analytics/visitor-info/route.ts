import { NextRequest } from "next/server"
import { UAParser } from "ua-parser-js"

export async function GET(req: NextRequest) {
  try {
    const userAgent = req.headers.get("user-agent") || ""
    const parser = new UAParser(userAgent)
    
    return Response.json({
      browser: parser.getBrowser(),
      device: parser.getDevice(),
      os: parser.getOS(),
      userAgent
    })
  } catch (error) {
    console.error("Error analyzing visitor info:", error)
    return Response.json({ error: "Failed to get visitor info" }, { status: 500 })
  }
}
