/**
 * API documentation endpoint (Phase 3).
 *
 * Returns an OpenAPI 3.1 schema describing the managed SaaS API.
 * In production, this is served behind the public API subdomain and
 * rendered by Swagger UI or Scalar.
 */

import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const OPENAPI_SCHEMA = {
  openapi: '3.1.0',
  info: {
    title: 'AI Studios API',
    version: '1.0.0',
    description: 'Managed generation API for AI Studios SaaS.',
  },
  servers: [{ url: '/api/v1' }],
  paths: {
    '/generations': {
      post: {
        summary: 'Submit a generation',
        requestBody: { content: { 'application/json': { schema: { $ref: '#/components/schemas/GenerationRequest' } } } },
        responses: { '201': { description: 'Job created' }, '402': { description: 'Insufficient credits' }, '429': { description: 'Rate limited' } },
      },
      get: {
        summary: 'List or poll generations',
        parameters: [{ name: 'jobId', in: 'query', schema: { type: 'string' } }],
        responses: { '200': { description: 'Job status or list' } },
      },
    },
    '/keys': {
      get: { summary: 'List API keys', responses: { '200': { description: 'Key list (prefixes only)' } } },
      post: { summary: 'Create an API key', responses: { '201': { description: 'Key created (full key returned once)' } } },
      delete: { summary: 'Revoke an API key', parameters: [{ name: 'keyId', in: 'query', schema: { type: 'string' } }], responses: { '200': { description: 'Key revoked' } } },
    },
    '/teams': {
      get: { summary: 'List team members', responses: { '200': { description: 'Member list' } } },
      post: { summary: 'Invite a member', responses: { '201': { description: 'Member invited' } } },
      delete: { summary: 'Remove a member', parameters: [{ name: 'userId', in: 'query', schema: { type: 'string' } }], responses: { '200': { description: 'Member removed' } } },
    },
    '/usage/dashboard': {
      get: { summary: 'Usage dashboard', responses: { '200': { description: 'Usage statistics' } } },
    },
    '/pricing': {
      get: { summary: 'Model price book', responses: { '200': { description: 'Price list' } } },
    },
    '/auth/sso': {
      get: { summary: 'Initiate SSO login', responses: { '302': { description: 'Redirect to provider' } } },
      post: { summary: 'SSO callback', responses: { '200': { description: 'Session created' } } },
    },
  },
  components: {
    schemas: {
      GenerationRequest: {
        type: 'object',
        required: ['model'],
        properties: {
          model: { type: 'object', properties: { id: { type: 'string' } } },
          prompt: { type: 'string' },
          aspectRatio: { type: 'string' },
          duration: { type: 'number' },
        },
      },
    },
  },
};

export async function GET(): Promise<NextResponse> {
  return NextResponse.json(OPENAPI_SCHEMA, {
    headers: { 'Cache-Control': 'public, max-age=3600' },
  });
}
