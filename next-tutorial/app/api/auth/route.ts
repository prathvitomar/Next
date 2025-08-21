import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        message: "Get from Main Auth Routes"
    })
}

export function POST(){
    return NextResponse.json({
        message: "POST"
    })
}