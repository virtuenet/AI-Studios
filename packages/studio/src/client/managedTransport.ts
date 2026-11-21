/**
 * Managed transport implementation — calls the SaaS control plane BFF.
 *
 * This replaces muapi.js direct calls when AUTH_MODE=managed. The browser
 * holds a session JWT (not a Muapi key), and the server holds the Muapi key
 * and enforces credit limits, plan entitlements, and usage metering.
 */

import type {
  AssetUploadRequest,
  AssetUploadResult,
  BalanceResult,
  GenerationRequest,
  GenerationResult,
  GenerationTransport,
} from './transport';

const BFF_BASE = '/api/v1';

async function bffPost<T>(path: string, body: unknown): Promise<T> {
  const response = await fetch(`${BFF_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    credentials: 'include',
  });
  if (!response.ok) {
    const err = (await response.json().catch(() => ({}))) as { error?: string };
    throw new Error(err.error || `BFF error ${response.status}`);
  }
  return response.json() as T;
}

async function bffGet<T>(path: string): Promise<T> {
  const response = await fetch(`${BFF_BASE}${path}`, {
    credentials: 'include',
  });
  if (!response.ok) {
    const err = (await response.json().catch(() => ({}))) as { error?: string };
    throw new Error(err.error || `BFF error ${response.status}`);
  }
  return response.json() as T;
}

interface BffSubmitResponse {
  jobId: string;
  status: string;
  estimatedCost: number;
}

interface BffJobResponse {
  jobId: string;
  status: string;
  result?: GenerationResult;
  error?: string;
}

interface BffBalanceResponse {
  balance: number;
}

async function submitAndPoll(request: GenerationRequest): Promise<GenerationResult> {
  const { jobId } = await bffPost<BffSubmitResponse>('/generations', request);

  // Poll until the job completes
  for (let attempt = 0; attempt < 300; attempt++) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const job = await bffGet<BffJobResponse>(`/generations?jobId=${jobId}`);

    if (job.status === 'completed' && job.result) return job.result;
    if (job.status === 'failed') throw new Error(job.error || 'Generation failed');
    if (job.status === 'cancelled') throw new Error('Generation cancelled');
  }

  throw new Error('Generation timed out');
}

export const managedTransport: GenerationTransport = {
  async submitImage(request: GenerationRequest): Promise<GenerationResult> {
    return submitAndPoll(request);
  },

  async submitImageToImage(request: GenerationRequest): Promise<GenerationResult> {
    return submitAndPoll(request);
  },

  async submitVideo(request: GenerationRequest): Promise<GenerationResult> {
    return submitAndPoll(request);
  },

  async submitImageToVideo(request: GenerationRequest): Promise<GenerationResult> {
    return submitAndPoll(request);
  },

  async submitVideoToVideo(request: GenerationRequest): Promise<GenerationResult> {
    return submitAndPoll(request);
  },

  async submitAudio(request: GenerationRequest): Promise<GenerationResult> {
    return submitAndPoll(request);
  },

  async uploadAsset(request: AssetUploadRequest): Promise<AssetUploadResult> {
    // Uploads go through the BFF which signs the S3 URL
    const formData = new FormData();
    formData.append('file', request.file);
    const response = await fetch(`${BFF_BASE}/assets`, {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });
    if (!response.ok) throw new Error('Upload failed');
    return (await response.json()) as AssetUploadResult;
  },

  async getBalance(): Promise<BalanceResult> {
    return bffGet<BalanceResult>('/usage');
  },

  async cancel(jobId: string): Promise<void> {
    await bffPost(`/generations/${jobId}/cancel`, {});
  },
};
