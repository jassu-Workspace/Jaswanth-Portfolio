import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    {
      status: "healthy",
      message: "Server is healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      service: "portfolio",
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    }
  );
}
