import { NextResponse, type NextRequest } from 'next/server';

export async function GET(_request: NextRequest): Promise<NextResponse> {
  return NextResponse.json(
    { error: 'Usage endpoint not yet implemented' },
    { status: 501 },
  );
}
