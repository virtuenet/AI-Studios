import { BASE_URL, submitAndPoll, assertRequiredPrompt, includeRequiredArrayDefaults, streamGeneration, normalizePredictionResult, notifyAuthRequired, fetchWithRetry, pollForResult, setStreamingEnabled, isStreamingEnabled, streamingEnabled } from './core';
import { getModelById, getVideoModelById, getI2IModelById, getI2VModelById, getV2VModelById, getRecastModelById, getLipSyncModelById, getAudioModelById, getMotionControlModelById } from '../models';
import { buildVideoToolPayload, serializeVideoToolOptions } from '../videoToolCapabilities';
import { buildImageSizePayload } from '../imageSizing';
import { buildImageInputPayload, getImageInputValidationError, normalizePrimaryImageUrls } from '../imageInputContracts';
import { getModelMediaCapabilities, mapReferenceParams } from '../modelCapabilities';
import { buildSupplementalInputPayload } from '../modelParameters';
import { getGroupedVideoConfiguration } from '../groupedVideoModels.js';

export async function generateImage(apiKey, params) {
    const modelInfo = getModelById(params.model);
    const endpoint = modelInfo?.endpoint || params.model;
    const payload = {
        ...buildSupplementalInputPayload(modelInfo, params),
        prompt: params.prompt
    };
    if (modelInfo) Object.assign(payload, buildImageSizePayload(modelInfo, params.aspect_ratio));
    else if (params.aspect_ratio) payload.aspect_ratio = params.aspect_ratio;
    if (params.resolution) payload.resolution = params.resolution;
    if (params.quality) payload.quality = params.quality;
    if (params.image_url) { 
        payload.image_url = params.image_url; 
        payload.strength = params.strength || 0.6; 
    } else if (params.images_list) {
        payload.images_list = params.images_list;
    } else {
        payload.image_url = null;
    }
    if (params.seed && params.seed !== -1) payload.seed = params.seed;
    return submitAndPoll(endpoint, payload, apiKey, params.onRequestId, 60, { onProgress: params.onProgress, signal: params.signal });
}

export async function generateI2I(apiKey, params) {
    const modelInfo = getI2IModelById(params.model);
    const endpoint = modelInfo?.endpoint || params.model;
    const imageField = modelInfo?.imageField || 'image_url';
    const imagesList = normalizePrimaryImageUrls(params.images_list, params.image_url);
    const inputError = getImageInputValidationError(modelInfo, 'i2i', {
        prompt: params.prompt,
        primaryImageUrls: imagesList,
        auxiliaryImageUrls: params,
    });
    if (inputError) throw new Error(inputError);
    const payload = {
        ...mapReferenceParams(modelInfo, params),
        ...buildSupplementalInputPayload(modelInfo, params),
        ...buildImageInputPayload(modelInfo, 'i2i', params)
    };
    if (imagesList.length > 0) {
        if (imageField === 'images_list') payload.images_list = imagesList;
        else payload[imageField] = imagesList[0];
    }
    if (modelInfo) Object.assign(payload, buildImageSizePayload(modelInfo, params.aspect_ratio));
    else if (params.aspect_ratio) payload.aspect_ratio = params.aspect_ratio;
    if (params.resolution) payload.resolution = params.resolution;
    if (params.quality) payload.quality = params.quality;
    if (modelInfo?.inputs?.name) {
        payload.name = params.name || modelInfo.inputs.name.default;
    }
    return submitAndPoll(endpoint, payload, apiKey, params.onRequestId, 60, { onProgress: params.onProgress, signal: params.signal });
}

export async function decomposeLayers(apiKey, params) {
    const endpoint = 'bytedance-seedream-5.0-pro-layer';
    const payload = {
        image_url: params.image_url,
        prompt: params.prompt || '',
        resolution: params.resolution || 'auto',
        output_format: params.output_format || 'png'
    };
    const result = await submitAndPoll(endpoint, payload, apiKey, params.onRequestId, 300);
    const rawImages = result.images || result.output?.images || result.outputs || (result.url ? [result.url] : []);
    const images = Array.isArray(rawImages) ? rawImages : [rawImages];
    return { ...result, images };
}

export async function generateVideo(apiKey, params) {
    const modelInfo = getVideoModelById(params.model);
    const endpoint = modelInfo?.endpoint || params.model;
    const mediaCapabilities = getModelMediaCapabilities(modelInfo);
    assertRequiredPrompt(modelInfo, params);
    let payload = {
        ...mapReferenceParams(modelInfo, params),
        ...buildSupplementalInputPayload(modelInfo, params)
    };
    if (params.prompt) payload.prompt = params.prompt;
    if (params.request_id) payload.request_id = params.request_id;
    if (params.aspect_ratio) payload.aspect_ratio = params.aspect_ratio;
    if (params.duration) payload.duration = params.duration;
    if (params.resolution) payload.resolution = params.resolution;
    if (typeof params.generate_audio === 'boolean') payload.generate_audio = params.generate_audio;
    if (params.quality) payload.quality = params.quality;
    if (params.mode) payload.mode = params.mode;
    if (!mediaCapabilities.image.field && params.image_url) payload.image_url = params.image_url;
    if (!mediaCapabilities.image.field && params.images_list?.length > 0) payload.images_list = params.images_list;
    if (!mediaCapabilities.video.field && params.videos_list?.length > 0) payload.videos_list = params.videos_list;
    if (!mediaCapabilities.video.field && params.video_files?.length > 0) payload.video_files = params.video_files;
    Object.assign(payload, serializeVideoToolOptions(modelInfo, params.options));
    payload = includeRequiredArrayDefaults(modelInfo, payload);
    return submitAndPoll(endpoint, payload, apiKey, params.onRequestId, 900);
}

export async function generateI2V(apiKey, params) {
    const modelInfo = getI2VModelById(params.model);
    const endpoint = modelInfo?.endpoint || params.model;
    assertRequiredPrompt(modelInfo, params);
    let payload = {
        ...mapReferenceParams(modelInfo, params),
        ...buildSupplementalInputPayload(modelInfo, params)
    };
    if (params.prompt) payload.prompt = params.prompt;
    if (params.aspect_ratio) payload.aspect_ratio = params.aspect_ratio;
    if (params.duration) payload.duration = params.duration;
    if (params.resolution) payload.resolution = params.resolution;
    if (typeof params.generate_audio === 'boolean') payload.generate_audio = params.generate_audio;
    if (params.quality) payload.quality = params.quality;
    if (params.mode) payload.mode = params.mode;
    if (modelInfo?.inputs?.name) {
        payload.name = params.name || modelInfo.inputs.name.default;
    }
    payload = includeRequiredArrayDefaults(modelInfo, payload);
    return submitAndPoll(endpoint, payload, apiKey, params.onRequestId, 900);
}

export async function generateMarketingStudioAd(apiKey, params) {
    const endpoint = params.resolution === '1080p' ? 'sd-2-vip-omni-reference-1080p' : 'seedance-2-vip-omni-reference';
    const payload = {
        prompt: params.prompt,
        aspect_ratio: params.aspect_ratio || '16:9',
        duration: params.duration || 5,
        images_list: params.images_list || [],
        video_files: params.video_files || []
    };
    return submitAndPoll(endpoint, payload, apiKey, params.onRequestId, 900);
}

export async function processV2V(apiKey, params) {
    const modelInfo = getV2VModelById(params.model);
    const endpoint = modelInfo?.endpoint || params.model;
    const toolPayload = buildVideoToolPayload(modelInfo, params);
    let payload = {
        ...buildSupplementalInputPayload(modelInfo, params),
        ...toolPayload,
        ...mapReferenceParams(modelInfo, params),
    };
    if (modelInfo?.hasPrompt && params.prompt) {
        payload.prompt = params.prompt;
    }
    if (getGroupedVideoConfiguration(modelInfo?.id)) {
        for (const field of ['duration', 'aspect_ratio', 'resolution', 'quality']) {
            if (modelInfo.inputs?.[field] && params[field] !== undefined) {
                payload[field] = params[field];
            }
        }
    }
    payload = includeRequiredArrayDefaults(modelInfo, payload);
    return submitAndPoll(endpoint, payload, apiKey, params.onRequestId, 900);
}

export async function estimateV2VCost(params, signal) {
    const modelInfo = getV2VModelById(params?.model);
    const endpoint = modelInfo?.endpoint || params?.model;
    if (!endpoint) {
        throw new Error('A V2V model is required to estimate cost.');
    }

    const payload = buildVideoToolPayload(modelInfo, params);
    const response = await fetch(`${BASE_URL}/api/v1/models/${endpoint}/estimate-cost`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal,
    });

    if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Cost estimate failed: ${response.status} ${response.statusText} - ${errText.slice(0, 100)}`);
    }

    let data;
    try {
        data = await response.json();
    } catch {
        throw new Error('Cost estimate returned invalid JSON.');
    }

    if (typeof data?.cost !== 'number' || !Number.isFinite(data.cost) || data.cost < 0) {
        throw new Error('Cost estimate returned an invalid cost.');
    }
    if (typeof data.currency !== 'string' || !/^[A-Za-z]{3}$/.test(data.currency.trim())) {
        throw new Error('Cost estimate returned an invalid currency.');
    }

    return {
        cost: data.cost,
        currency: data.currency.trim().toUpperCase(),
    };
}

export async function processRecast(apiKey, params) {
    const modelInfo = getRecastModelById(params.model);
    const endpoint = modelInfo?.endpoint || params.model;
    const videoField = modelInfo?.videoField || 'video_url';
    const payload = { [videoField]: params.video_url };
    if (modelInfo?.imageField && params.image_url) {
        payload[modelInfo.imageField] = params.image_url;
    }
    if (modelInfo?.hasPrompt && params.prompt) {
        payload.prompt = params.prompt;
    }
    if (params.aspect_ratio) {
        payload.aspect_ratio = params.aspect_ratio;
    }
    if (params.character_orientation) {
        payload.character_orientation = params.character_orientation;
    }
    return submitAndPoll(endpoint, payload, apiKey, params.onRequestId, 900);
}

export async function processMotionControl(apiKey, params) {
    const model = params.model || 'seedance-2.5-motion-control';
    const mode = params.mode || 'motion_transfer';
    const internalPrompt = mode === 'objects_swap'
        ? "Keep the rest of the scene as filmed, swap the characters, products, or clothes with the reference images."
        : "Extract motion from the reference video and rebuild the scene with the new characters and assets, preserving the original motion, choreography, and camera movements.";

    const userPrompt = String(params.prompt || '').trim();
    const finalPrompt = userPrompt ? `${internalPrompt} ${userPrompt}` : internalPrompt;

    let imagesList = [];
    if (Array.isArray(params.images_list)) {
        imagesList = params.images_list;
    } else if (params.images) {
        imagesList = Array.isArray(params.images) ? params.images : [params.images];
    } else if (params.image_url) {
        imagesList = [params.image_url];
    }

    let duration = Number(params.duration) || 5;

    const payload = {
        video_url: params.video_url,
        images_list: imagesList,
        aspect_ratio: params.aspect_ratio || '16:9',
        duration: duration,
        generate_audio: !!params.generate_audio,
        prompt: finalPrompt
    };

    if (model === 'seedance-2-motion-control') {
        if (payload.duration > 15) payload.duration = 15;
        if (payload.duration < 4) payload.duration = 4;
        if (payload.images_list.length > 9) payload.images_list = payload.images_list.slice(0, 9);
        payload.quality = params.quality === 'basic' ? 'basic' : 'high';
        if (params.seed !== undefined && params.seed !== -1) payload.seed = Number(params.seed);
    } else {
        if (payload.duration > 30) payload.duration = 30;
        if (payload.duration < 4) payload.duration = 4;
        if (payload.images_list.length > 30) payload.images_list = payload.images_list.slice(0, 30);
        payload.high_bitrate = !!params.high_bitrate;
        if (params.seed !== undefined && params.seed !== -1) payload.seed = Number(params.seed);
    }

    return submitAndPoll(model, payload, apiKey, params.onRequestId, 900);
}

export async function processLipSync(apiKey, params) {
    const modelInfo = getLipSyncModelById(params.model);
    const endpoint = modelInfo?.endpoint || params.model;
    const payload = {};
    if (params.audio_url) payload.audio_url = params.audio_url;
    if (params.image_url) payload.image_url = params.image_url;
    if (params.video_url) payload.video_url = params.video_url;
    if (modelInfo?.hasPrompt) payload.prompt = params.prompt || '';
    if (params.resolution) payload.resolution = params.resolution;
    if (params.seed !== undefined && params.seed !== -1) payload.seed = params.seed;
    return submitAndPoll(endpoint, payload, apiKey, params.onRequestId, 900);
}

export async function generateAudio(apiKey, params) {
    const modelId = params._modelId || params.model;
    const modelInfo = getAudioModelById(modelId);
    const endpoint = modelInfo?.endpoint || modelId;
    const payload = {};
    const skipKeys = ['_modelId', 'onRequestId'];
    for (const key in params) {
        if (!skipKeys.includes(key) && params[key] !== undefined && params[key] !== null) {
            payload[key] = params[key];
        }
    }
    return submitAndPoll(endpoint, payload, apiKey, params.onRequestId, 900);
}

