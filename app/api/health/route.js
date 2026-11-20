import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const UPSTREAM = 'https://api.muapi.ai';

async function checkUpstream() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 2500);
  try {
    const response = await fetch(UPSTREAM, { method: 'HEAD', signal: controller.signal });
    return response.status < 500 ? 'reachable' : `status_${response.status}`;
  } catch {
    return 'unreachable';
  } finally {
    clearTimeout(timer);
  }
}

export async function GET() {
  const upstream = await checkUpstream();
  const commit =
    process.env.NEXT_PUBLIC_BUILD_SHA ||
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.GIT_COMMIT_SHA ||
    'unknown';
  const healthy = upstream === 'reachable';

  return NextResponse.json(
    {
      status: healthy ? 'ok' : 'degraded',
      version: process.env.npm_package_version || '2.0.0',
      commit,
      upstream,
      timestamp: new Date().toISOString(),
    },
    {
      status: healthy ? 200 : 503,
      headers: { 'Cache-Control': 'no-store' },
    }
  );
}
