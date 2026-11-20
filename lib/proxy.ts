/**
 * Shared proxy utility for Next.js API routes that forward requests to the
 * Muapi upstream. Eliminates the duplicated getApiKey / cleanHeaders / fetch
 * pattern that was copy-pasted across four route files.
 */
import { NextResponse, type NextRequest } from 'next/server';
import { getRequestId, logProxy } from '@/lib/logger';

const MUAPI_BASE = 'https://api.muapi.ai';

/** Extract the user API key from an incoming proxy request. */
export function getApiKeyFromProxyRequest(request: NextRequest): string | null {
  const headerKey = request.headers.get('x-api-key');
  return headerKey || null;
}

/** Remove headers that must not be forwarded to the upstream. */
export function cleanProxyHeaders(
  request: NextRequest,
  extraDrops: string[] = [],
): Headers {
  const headers = new Headers(request.headers);
  headers.delete('host');
  headers.delete('connection');
  headers.delete('cookie'); // CRITICAL: Stop forwarding browser cookies to Muapi
  for (const drop of extraDrops) headers.delete(drop);
  return headers;
}

interface ProxyRouteConfig {
  /** Upstream path segment, e.g. 'workflow', 'agents', 'app'. */
  basePath: string;
  /** Extra header names to strip (the app proxy strips 'authorization' too). */
  extraHeaderDrops?: string[];
  /** Name used in structured logs; defaults to basePath. */
  logName?: string;
  /** Transform the path segments before appending to the base URL. */
  transformPath?: (segments: string[]) => string;
  /** Called with the parsed upstream JSON body; return a transformed value. */
  onResponse?: (data: unknown, request: NextRequest) => unknown;
  /** When true, a missing API key returns 401 before the upstream call. */
  requireAuth?: boolean;
}

type RouteHandler = (
  request: NextRequest,
  context: { params: Promise<{ path?: string[] }> },
) => Promise<NextResponse>;

/** Create a set of HTTP-method route handlers for a Muapi proxy. */
export function createProxyRoutes(config: ProxyRouteConfig): {
  GET: RouteHandler;
  POST: RouteHandler;
  PUT: RouteHandler;
  DELETE: RouteHandler;
} {
  const logName = config.logName || config.basePath;
  const extraDrops = config.extraHeaderDrops || [];

  function buildTarget(pathSegments: string[], search: string): string {
    const transformed = config.transformPath
      ? config.transformPath(pathSegments)
      : pathSegments.join('/');
    const base = `${MUAPI_BASE}/${config.basePath}`;
    return transformed ? `${base}/${transformed}${search}` : `${base}${search}`;
  }

  async function proxy(
    request: NextRequest,
    params: { path?: string[] },
    method: string,
    body: BodyInit | null,
  ): Promise<NextResponse> {
    const startedAt = Date.now();
    const requestId = getRequestId(request);
    const pathSegments = params.path || [];
    const { search } = new URL(request.url);

    if (config.requireAuth) {
      const apiKey = getApiKeyFromProxyRequest(request);
      if (!apiKey) {
        return NextResponse.json({ error: 'Unauthorized: Missing API key' }, { status: 401 });
      }
    }

    const targetUrl = buildTarget(pathSegments, search);
    const headers = cleanProxyHeaders(request, extraDrops);
    const apiKey = getApiKeyFromProxyRequest(request);
    // NOTE: apiKey intentionally not logged — CWE-200.
    if (apiKey) headers.set('x-api-key', apiKey);

    try {
      const fetchInit: RequestInit = { method, headers };
      if (body) fetchInit.body = body;
      const response = await fetch(targetUrl, fetchInit);
      let data: unknown;
      try {
        data = await response.json();
      } catch {
        data = await response.text();
      }

      if (config.onResponse) {
        data = config.onResponse(data, request);
      }

      logProxy({
        name: `${logName}.${method.toLowerCase()}`,
        request,
        requestId,
        startedAt,
        status: response.status,
      });

      return NextResponse.json(data, { status: response.status });
    } catch (error) {
      logProxy({
        name: `${logName}.${method.toLowerCase()}`,
        request,
        requestId,
        startedAt,
        status: 500,
        error,
      });
      return NextResponse.json(
        { error: error instanceof Error ? error.message : 'Proxy error' },
        { status: 500 },
      );
    }
  }

  return {
    GET: (req, ctx) =>
      ctx.params.then((p) => proxy(req, p, 'GET', null)),
    POST: (req, ctx) =>
      ctx.params.then(async (p) => proxy(req, p, 'POST', await req.arrayBuffer())),
    PUT: (req, ctx) =>
      ctx.params.then(async (p) => proxy(req, p, 'PUT', await req.arrayBuffer())),
    DELETE: (req, ctx) =>
      ctx.params.then((p) => proxy(req, p, 'DELETE', null)),
  };
}
