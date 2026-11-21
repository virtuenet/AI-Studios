/**
 * Model price book API endpoint.
 *
 * Returns the credit costs for all models. The client reads this to display
 * estimated costs before generation. In production, this is cached at the edge
 * and updated when the price book changes.
 */

import { NextResponse } from 'next/server';
import { MODEL_PRICE_BOOK, estimateCost } from '@/packages/studio/src/client/priceBook';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(
    { models: MODEL_PRICE_BOOK },
    {
      headers: {
        'Cache-Control': 'public, max-age=300, s-maxage=600',
      },
    },
  );
}

/** POST /api/v1/pricing/estimate — estimate the cost for a specific request. */
export async function POST(request: Request): Promise<NextResponse> {
  let body: { modelId?: string; durationSeconds?: number; is4K?: boolean };
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (!body.modelId) {
    return NextResponse.json({ error: 'modelId is required' }, { status: 400 });
  }

  const opts: { durationSeconds?: number | undefined; is4K?: boolean | undefined } = {};
  if (typeof body.durationSeconds === 'number') opts.durationSeconds = body.durationSeconds;
  if (typeof body.is4K === 'boolean') opts.is4K = body.is4K;
  const cost = estimateCost(body.modelId, opts);

  return NextResponse.json({ modelId: body.modelId, cost });
}
