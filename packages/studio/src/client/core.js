import { getModelById, getVideoModelById, getI2IModelById, getI2VModelById, getV2VModelById, getRecastModelById, getLipSyncModelById, getAudioModelById, getMotionControlModelById } from '../models';
import {
    buildVideoToolPayload,
    serializeVideoToolOptions,
} from '../videoToolCapabilities';
import { buildImageSizePayload } from '../imageSizing';
import { buildImageInputPayload, getImageInputValidationError, normalizePrimaryImageUrls } from '../imageInputContracts';
import { pollForGenerationResult } from '../utils/generationLifecycle';
import { getModelMediaCapabilities, mapReferenceParams } from '../modelCapabilities';
import { buildSupplementalInputPayload } from '../modelParameters';
import { getGroupedVideoConfiguration } from '../groupedVideoModels.js';

// In an http(s) browser we route through the host app's proxy (Next.js routes
// under /api/* re-issue the call server-side) so api.muapi.ai CORS is bypassed.
// SSR (no window) and Electron's file:// renderer call the upstream directly.
export const BASE_URL = (typeof window !== 'undefined' && window.location?.protocol?.startsWith('http'))
    ? '/api'
    : 'https://api.muapi.ai';
export const PROXY_WF_BASE = '/api/workflow';
export const FILE_UPLOAD_TIMEOUT_MS = 300_000;
export const FILE_UPLOAD_PENDING_PROGRESS = 99;

export function notifyAuthRequired(status, detail) {
    if (typeof window === 'undefined') return;
    if (status !== 401 && status !== 403) return;
    window.dispatchEvent(new CustomEvent('muapi:auth-required', { detail: { status, message: detail } }));
}

export function assertRequiredPrompt(model, params) {
    if (model?.promptRequired && !String(params.prompt || '').trim()) {
        throw new Error('Prompt is required for this model.');
    }
}

export function includeRequiredArrayDefaults(model, payload) {
    const defaults = {};
    for (const field of model?.required || []) {
        if (payload[field] !== undefined || model?.inputs?.[field]?.type !== 'array') continue;
        defaults[field] = [];
    }
    return Object.keys(defaults).length > 0 ? { ...defaults, ...payload } : payload;
}

export async function pollForResult(requestId, key, maxAttempts = 900, interval = 2000) {
    return pollForGenerationResult({
        baseUrl: BASE_URL,
        requestId,
        apiKey: key,
        maxAttempts,
        interval,
        onAuthRequired: notifyAuthRequired,
    });
}

export function normalizePredictionResult(submitData, result, outputUrl) {
    const requestId = submitData?.request_id || submitData?.id || result?.request_id || result?.id;
    return {
        ...result,
        ...(requestId ? { request_id: requestId } : {}),
        url: outputUrl,
    };
}

/**
 * Retry a fetch request with exponential backoff for transient errors.
 * Retries on: 429 (rate limit), 502 (bad gateway), 503 (service unavailable).
 * Does NOT retry on: 400, 401, 403, 404, 422 (client errors) or 5xx other than 502/503.
 */
export async function fetchWithRetry(url, options, { maxRetries = 3, baseDelay = 1000 } = {}) {
    const RETRYABLE_STATUSES = new Set([429, 502, 503]);
    let lastError;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(url, options);
            // Only retry on specific transient server errors
            if (RETRYABLE_STATUSES.has(response.status) && attempt < maxRetries) {
                let delay = baseDelay * Math.pow(2, attempt);
                // Honor Retry-After (seconds or HTTP date) when present.
                const retryAfter = response.headers?.get?.('retry-after');
                if (retryAfter) {
                    const seconds = Number(retryAfter);
                    if (Number.isFinite(seconds)) {
                        delay = Math.max(delay, seconds * 1000);
                    } else {
                        const date = Date.parse(retryAfter);
                        if (Number.isFinite(date)) delay = Math.max(delay, date - Date.now());
                    }
                }
                await new Promise(resolve => setTimeout(resolve, delay));
                continue;
            }
            return response;
        } catch (err) {
            lastError = err;
            // Aborts are user intent — never retry them.
            if (err.name === 'AbortError') throw err;
            // Retry on network errors (not HTTP errors)
            if (attempt < maxRetries && (err.name === 'TypeError' || err.message?.includes('network') || err.message?.includes('fetch'))) {
                const delay = baseDelay * Math.pow(2, attempt);
                await new Promise(resolve => setTimeout(resolve, delay));
                continue;
            }
            throw err;
        }
    }
    throw lastError || new Error('Max retries exceeded');
}

// Streaming is opt-in: the upstream API currently exposes submit+poll only.
// Set `window.__AI_STUDIOS_STREAMING__ = true` (or NEXT_PUBLIC_MUAPI_STREAMING=1)
// once the API ships SSE support. When enabled, submission tries the streaming
// endpoint first and transparently falls back to polling if it is unavailable.
export let streamingEnabled = (() => {
    if (typeof window !== 'undefined' && typeof window.__AI_STUDIOS_STREAMING__ === 'boolean') {
        return window.__AI_STUDIOS_STREAMING__;
    }
    return typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_MUAPI_STREAMING === '1';
})();

export function setStreamingEnabled(enabled) {
    streamingEnabled = Boolean(enabled);
}

export function isStreamingEnabled() {
    return streamingEnabled;
}

/**
 * Attempt one generation over Server-Sent Events.
 *
 * Returns the final normalized result, or `null` when the server does not
 * support streaming (404/405, wrong content type, or unreadable body) so the
 * caller can fall back to submit+poll without surfacing an error.
 */
export async function streamGeneration(endpoint, payload, key, { onProgress, onRequestId, signal } = {}) {
    let response;
    try {
        response = await fetch(`${BASE_URL}/api/v1/${endpoint}/stream`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'text/event-stream',
                'x-api-key': key,
            },
            body: JSON.stringify(payload),
            signal,
        });
    } catch {
        return null;
    }

    if (!response.ok) return null;
    const contentType = response.headers?.get?.('content-type') || '';
    if (!contentType.includes('text/event-stream') || !response.body?.getReader) {
        return null;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let lastEvent = {};
    let requestId;

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let boundary;
        while ((boundary = buffer.indexOf('\n\n')) !== -1) {
            const chunk = buffer.slice(0, boundary);
            buffer = buffer.slice(boundary + 2);

            for (const line of chunk.split('\n')) {
                if (!line.startsWith('data:')) continue;
                const raw = line.slice(5).trim();
                if (!raw || raw === '[DONE]') continue;
                let event;
                try {
                    event = JSON.parse(raw);
                } catch {
                    continue;
                }
                lastEvent = event;
                requestId = requestId || event.request_id || event.id;
                if (requestId && onRequestId) onRequestId(requestId);

                const status = event.status?.toLowerCase();
                if (typeof event.progress === 'number') onProgress?.(event.progress);
                if (status === 'failed' || status === 'error' || status === 'cancelled') {
                    throw new Error(event.error?.message || event.error || event.message || 'Generation failed');
                }
                if (status === 'completed' || status === 'succeeded' || status === 'success') {
                    const outputUrl = event.outputs?.[0] || event.url || event.output?.url;
                    return normalizePredictionResult(event, event, outputUrl);
                }
            }
        }
    }

    // Stream ended without a terminal event — treat as unsupported.
    if (lastEvent?.status && ['completed', 'succeeded', 'success'].includes(lastEvent.status.toLowerCase())) {
        const outputUrl = lastEvent.outputs?.[0] || lastEvent.url || lastEvent.output?.url;
        return normalizePredictionResult(lastEvent, lastEvent, outputUrl);
    }
    return null;
}

export async function submitAndPoll(endpoint, payload, key, onRequestId, maxAttempts = 60, { onProgress, signal } = {}) {
    if (streamingEnabled) {
        const streamed = await streamGeneration(endpoint, payload, key, { onProgress, onRequestId, signal });
        if (streamed) return streamed;
        // fall through to submit+poll
    }

    const url = `${BASE_URL}/api/v1/${endpoint}`;
    const response = await fetchWithRetry(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': key },
        body: JSON.stringify(payload),
        signal,
    });
    if (!response.ok) {
        const errText = await response.text();
        notifyAuthRequired(response.status, errText);
        throw new Error(`API Request Failed: ${response.status} ${response.statusText} - ${errText.slice(0, 100)}`);
    }
    const submitData = await response.json();
    const requestId = submitData.request_id || submitData.id;
    if (!requestId) return submitData;
    if (onRequestId) onRequestId(requestId);
    const result = await pollForResult(requestId, key, maxAttempts);
    const outputUrl = result.outputs?.[0] || result.url || result.output?.url;
    return normalizePredictionResult(submitData, result, outputUrl);
}


export async function handleProxyRequest(prefix, path, method, headers, body, apiKey) {
    const url = `${BASE_URL}/${prefix}/${path}`;
    
    const finalHeaders = new Headers(headers);
    finalHeaders.delete('host');
    finalHeaders.delete('connection');
    finalHeaders.delete('content-length'); // Let fetch recalculate this for safety

    if (apiKey) {
        finalHeaders.set('x-api-key', apiKey);
    }

    try {
        const response = await fetch(url, {
            method,
            headers: finalHeaders,
            body: (method !== 'GET' && method !== 'HEAD') ? body : undefined,
            redirect: 'follow',
        });

        const contentType = response.headers.get('Content-Type') || 'application/json';
        const buffer = await response.arrayBuffer();
        
        return {
            status: response.status,
            contentType,
            data: buffer
        };
    } catch (error) {
        console.error(`MuAPI Proxy error for ${url}:`, error);
        throw error;
    }
}

/**
 * A centralized handler for Next.js API routes or middleware.
 */
export async function handleServerSideProxy(prefix, request, params, apiKey) {
    try {
        const slug = await params;
        const pathSegments = slug.path || [];
        const path = pathSegments.join('/');
        
        const method = request.method;
        let body = null;
        if (method !== 'GET' && method !== 'HEAD') {
            body = await request.arrayBuffer();
        }

        const { search } = new URL(request.url);
        const pathWithSearch = search ? `${path}${search}` : path;

        return await handleProxyRequest(
            prefix, 
            pathWithSearch, 
            method, 
            request.headers, 
            body, 
            apiKey
        );
    } catch (error) {
        console.error(`Server proxy failed:`, error);
        throw error;
    }
}
