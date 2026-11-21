import { BASE_URL, notifyAuthRequired, submitAndPoll, fetchWithRetry } from './core';

export async function calculateDynamicCost(apiKey, taskName, payload) {
    const response = await fetch(`${BASE_URL}/api/v1/app/calculate_dynamic_cost`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        },
        body: JSON.stringify({ task_name: taskName, payload })
    });
    if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Failed to calculate dynamic cost: ${response.status} - ${errText.slice(0, 100)}`);
    }
    return await response.json();
}

export async function registerAppInterest(apiKey, appName) {
    const response = await fetch(`${BASE_URL}/app/interest`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        },
        body: JSON.stringify({ app_name: appName })
    });
    if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Failed to register interest: ${response.status} - ${errText.slice(0, 100)}`);
    }
    return await response.json();
}

export async function getAppInterests(apiKey) {
    const response = await fetch(`${BASE_URL}/app/interests`, {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        }
    });
    if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Failed to fetch interests: ${response.status} - ${errText.slice(0, 100)}`);
    }
    return await response.json();
}

// Paginated past-generations list, scoped server-side to the calling identity
// (BYOK key or white-label session token) — see GET /api/v1/history.
export async function getHistory(apiKey, { cursor, limit = 50 } = {}) {
    const params = new URLSearchParams();
    if (cursor) params.set('cursor', cursor);
    if (limit) params.set('limit', String(limit));
    const response = await fetch(`${BASE_URL}/api/v1/history?${params.toString()}`, {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        }
    });
    if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Failed to fetch history: ${response.status} - ${errText.slice(0, 100)}`);
    }
    return await response.json();
}

// DELETE /api/v1/predictions/{requestId}/media — strips input/output media
// URLs from the request (S3 objects removed) and clears them from the row;
// used to back the "delete generated item" action against server-backed
// (backfilled) history lists, since removing an item from local component
// state alone doesn't touch the server record or its stored media.
export async function deleteMedia(apiKey, requestId) {
    const response = await fetch(`${BASE_URL}/api/v1/predictions/${requestId}/media`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey }
    });
    if (!response.ok) {
        const errText = await response.text();
        notifyAuthRequired(response.status, errText);
        throw new Error(`Failed to delete: ${response.status} - ${errText.slice(0, 100)}`);
    }
    return await response.json();
}

export async function runClipping(apiKey, params) {
    const payload = {
        video_url: params.video_url,
        num_highlights: params.num_highlights || 3,
        aspect_ratio: params.aspect_ratio || "9:16",
        return_coordinates_only: !!params.return_coordinates_only
    };
    return submitAndPoll("ai-clipping", payload, apiKey, params.onRequestId, 900);
}

export async function runMotionGraphics(apiKey, params) {
    const payload = {
        prompt: params.prompt,
        aspect_ratio: params.aspect_ratio || "16:9",
        duration_seconds: params.duration_seconds || 6,
    };
    return submitAndPoll("motion-graphics", payload, apiKey, params.onRequestId, 900);
}

export async function runMotionGraphicsEdit(apiKey, params) {
    const payload = {
        request_id: params.request_id,
        edit_prompt: params.edit_prompt,
        aspect_ratio: params.aspect_ratio || "16:9",
        duration_seconds: params.duration_seconds || 6,
    };
    return submitAndPoll("motion-graphics-edit", payload, apiKey, params.onRequestId, 900);
}

export async function upscaleImage(apiKey, { model, image_url, resolution, upscale_factor, onRequestId }) {
    let endpoint = model;
    let payload = { image_url };
    if (model === "seedvr2-image-upscale") {
        payload.resolution = resolution || "4k";
    } else if (model === "topaz-image-upscale") {
        payload.upscale_factor = Number(upscale_factor) || 2;
    } else if (model === "ai-image-upscaler") {
        endpoint = "ai-image-upscale";
    }
    return submitAndPoll(endpoint, payload, apiKey, onRequestId, 90);
}

export async function removeBackground(apiKey, { image_url, onRequestId }) {
    const endpoint = "ai-background-remover";
    const payload = { image_url };
    return submitAndPoll(endpoint, payload, apiKey, onRequestId, 90);
}

export async function expandImage(apiKey, { image_url, onRequestId }) {
    const endpoint = "ai-image-extension";
    const payload = { image_url };
    return submitAndPoll(endpoint, payload, apiKey, onRequestId, 90);
}
