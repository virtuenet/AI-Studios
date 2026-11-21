/**
 * BYOK transport implementation — wraps the existing muapi.js functions.
 *
 * This is the default transport for the self-hosted/desktop deployment.
 * It uses the user's own Muapi API key, stored in the browser, and calls
 * muapi.js directly. The managed transport will replace this with calls
 * to the SaaS control plane.
 */
import type {
  AssetUploadRequest,
  AssetUploadResult,
  BalanceResult,
  GenerationRequest,
  GenerationResult,
  GenerationTransport,
} from './transport';
import {
  generateAudio,
  generateI2I,
  generateI2V,
  generateImage,
  generateVideo,
  getUserBalance,
  processV2V,
  uploadFile,
} from '../muapi';

function toResult(raw: Record<string, unknown>): GenerationResult {
  const url = raw.url as string | undefined;
  const outputs = raw.outputs as string[] | undefined;
  const requestId = raw.request_id as string | undefined;
  const error = raw.error as string | undefined;
  return {
    id: (raw.id || raw.request_id || Date.now().toString()) as string,
    status: (raw.status === 'completed' || url ? 'completed' : 'processing') as GenerationResult['status'],
    url,
    outputs,
    requestId,
    error,
  };
}

export const byokTransport: GenerationTransport = {
  async submitImage(request: GenerationRequest): Promise<GenerationResult> {
    const raw = await generateImage(
      ((window as unknown as Record<string, unknown>).__muapi_key as string || ''),
      { ...request.params, prompt: request.prompt, model: request.model.id },
    );
    return toResult(raw as Record<string, unknown>);
  },

  async submitImageToImage(request: GenerationRequest): Promise<GenerationResult> {
    const raw = await generateI2I(
      ((window as unknown as Record<string, unknown>).__muapi_key as string || ''),
      { ...request.params, prompt: request.prompt, model: request.model.id, image_url: request.imageUrls?.[0] },
    );
    return toResult(raw as Record<string, unknown>);
  },

  async submitVideo(request: GenerationRequest): Promise<GenerationResult> {
    const raw = await generateVideo(
      ((window as unknown as Record<string, unknown>).__muapi_key as string || ''),
      { ...request.params, prompt: request.prompt, model: request.model.id },
    );
    return toResult(raw as Record<string, unknown>);
  },

  async submitImageToVideo(request: GenerationRequest): Promise<GenerationResult> {
    const raw = await generateI2V(
      ((window as unknown as Record<string, unknown>).__muapi_key as string || ''),
      { ...request.params, prompt: request.prompt, model: request.model.id, image_url: request.imageUrls?.[0] },
    );
    return toResult(raw as Record<string, unknown>);
  },

  async submitVideoToVideo(request: GenerationRequest): Promise<GenerationResult> {
    const raw = await processV2V(
      ((window as unknown as Record<string, unknown>).__muapi_key as string || ''),
      { ...request.params, prompt: request.prompt, model: request.model.id, video_url: request.videoUrls?.[0] },
    );
    return toResult(raw as Record<string, unknown>);
  },

  async submitAudio(request: GenerationRequest): Promise<GenerationResult> {
    const raw = await generateAudio(
      ((window as unknown as Record<string, unknown>).__muapi_key as string || ''),
      { ...request.params, prompt: request.prompt, model: request.model.id },
    );
    return toResult(raw as Record<string, unknown>);
  },

  async uploadAsset(request: AssetUploadRequest): Promise<AssetUploadResult> {
    const url = await uploadFile(
      ((window as unknown as Record<string, unknown>).__muapi_key as string || ''),
      request.file,
      request.onProgress,
    );
    return { url };
  },

  async getBalance(): Promise<BalanceResult> {
    return getUserBalance(((window as unknown as Record<string, unknown>).__muapi_key as string || ''));
  },

  async cancel(_jobId: string): Promise<void> {
    // BYOK mode: the AbortController in useGeneration handles cancellation.
  },
};
