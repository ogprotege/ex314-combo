import { NextRequest } from "next/server"

// TODO: Integrate admin lookup with alternative database
export async function GET(req: NextRequest) {
  return Response.json({ isAdmin: false })
}
