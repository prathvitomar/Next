import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { NEXT_AUTH } from "../lib/auth";

export async function GET() {
    const sessionDetails = await getServerSession(NEXT_AUTH);
    return NextResponse.json(sessionDetails);
}