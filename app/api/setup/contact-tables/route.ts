import { NextRequest } from "next/server"

// TODO: Integrate Google Cloud SQL or alternative backend
export async function GET(req: NextRequest) {
  return Response.json({ success: true, message: "Contact tables setup placeholder" })
}
