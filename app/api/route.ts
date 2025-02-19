import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  console.log(request);
  return NextResponse.json({ message: 'Hello, World!' }, { status: 200 });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email } = body;
  return NextResponse.json({ message: 'Submitted.', data: { name, email } }, { status: 200 });
}
