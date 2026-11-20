import { NextResponse, type NextRequest } from 'next/server';
import { cleanProxyHeaders, getApiKeyFromProxyRequest } from '@/lib/proxy';

const MUAPI_BASE = 'https://api.muapi.ai';

// Proxies /api/api/v1/* -> https://api.muapi.ai/api/v1/*
// This is required because the AiAgent library hardcodes a double /api/api

async function proxyV1(
  request: NextRequest,
  params: { path?: string[] },
  method: string,
  body: BodyInit | null,
): Promise<NextResponse> {
  const pathSegments = params.path || [];
  const path = pathSegments.join('/');
  const { search } = new URL(request.url);
  const targetUrl = `${MUAPI_BASE}/api/v1/${path}${search}`;

  const headers = cleanProxyHeaders(request);
  const apiKey = getApiKeyFromProxyRequest(request);
  // NOTE: credential logging removed for security (CWE-200)
  if (apiKey) headers.set('x-api-key', apiKey);

  try {
    const fetchInit: RequestInit = { method, headers };
    if (body) fetchInit.body = body;
    const response = await fetch(targetUrl, fetchInit);
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Proxy error' },
      { status: 500 },
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> },
): Promise<NextResponse> {
  const p = await params;
  return proxyV1(request, p, 'GET', null);
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> },
): Promise<NextResponse> {
  const p = await params;
  return proxyV1(request, p, 'POST', await request.arrayBuffer());
}
