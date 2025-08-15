import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db/index"


export async function GET() {
    try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        return Response.json(data.products);
    } catch (error) {
        return Response.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const user = await prisma.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  console.log(user.id);

  return NextResponse.json({ message: 'Signed up' });
}