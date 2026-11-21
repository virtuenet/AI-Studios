import { NextResponse, type NextRequest } from 'next/server';

export async function POST(_request: NextRequest): Promise<NextResponse> {
  return NextResponse.json(
    { error: 'Asset upload not yet implemented' },
    { status: 501 },
  );
}

export async function GET(_request: NextRequest): Promise<NextResponse> {
  return NextResponse.json(
    { error: 'Asset listing not yet implemented' },
    { status: 501 },
  );
}
