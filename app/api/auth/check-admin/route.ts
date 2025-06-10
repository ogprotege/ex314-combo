import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  // TODO: Google Cloud SQL stub
  return Response.json({ isAdmin: false });
}
