import authOptions from "@/lib/auth/auth.config";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.redirect("/auth/login");
  }
  console.log({ request });
  console.log("GET /api/cheeti-paatalu/<cheeti-paata-id> HTTP");
  return NextResponse.json([]);
}

export async function POST(request) {
  console.log({ request });
  console.log("POST /api/cheeti-paatalu/<cheeti-paata-id> HTTP");
  return NextResponse.json({
    status: "success",
    message: "posting some data to cheeti paata",
  });
}
