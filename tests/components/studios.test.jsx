import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';

// Mock recharts/flow libraries that some studios pull in.
vi.mock('react-hot-toast', () => ({
  default: { success: vi.fn(), error: vi.fn(), loading: vi.fn(), dismiss: vi.fn() },
  Toaster: () => null,
}));

vi.mock('../../packages/studio/src/muapi', () => ({
  generateImage: vi.fn(),
  generateI2I: vi.fn(),
  generateVideo: vi.fn(),
  generateI2V: vi.fn(),
  processV2V: vi.fn(),
  processLipSync: vi.fn(),
  processRecast: vi.fn(),
  processMotionControl: vi.fn(),
  generateAudio: vi.fn(),
  decomposeLayers: vi.fn(),
  uploadFile: vi.fn(),
  getUserBalance: vi.fn().mockResolvedValue({ balance: 0 }),
  runClipping: vi.fn(),
  runMotionGraphics: vi.fn(),
  upscaleImage: vi.fn(),
  removeBackground: vi.fn(),
  expandImage: vi.fn(),
  estimateV2VCost: vi.fn(),
  generateMarketingStudioAd: vi.fn(),
  getAppInterests: vi.fn().mockResolvedValue([]),
  registerAppInterest: vi.fn().mockResolvedValue({}),
  getTemplateWorkflows: vi.fn().mockResolvedValue([]),
  getUserWorkflows: vi.fn().mockResolvedValue([]),
  getPublishedWorkflows: vi.fn().mockResolvedValue([]),
  getTemplateAgents: vi.fn().mockResolvedValue([]),
  getUserAgents: vi.fn().mockResolvedValue([]),
  getPublishedAgents: vi.fn().mockResolvedValue([]),
  getAllNodeSchemas: vi.fn().mockResolvedValue({}),
  getWorkflowInputs: vi.fn().mockResolvedValue([]),
  createWorkflow: vi.fn(),
  updateWorkflowName: vi.fn(),
  deleteWorkflow: vi.fn(),
  executeWorkflow: vi.fn(),
  getHistory: vi.fn().mockResolvedValue({ items: [] }),
  deleteMedia: vi.fn(),
}));

const BASE_PROPS = {
  apiKey: 'test-key',
  locale: 'en',
  droppedFiles: null,
  onFilesHandled: vi.fn(),
  onGenerationStart: vi.fn(),
  onGenerationEnd: vi.fn(),
  onGenerationComplete: vi.fn(),
  onGenerationError: vi.fn(),
  isHeaderVisible: true,
  onToggleHeader: vi.fn(),
};

beforeEach(() => {
  vi.clearAllMocks();
  if (!window.matchMedia) {
    window.matchMedia = vi.fn().mockImplementation((q) => ({
      matches: false, media: q, onchange: null,
      addListener: vi.fn(), removeListener: vi.fn(),
      addEventListener: vi.fn(), removeEventListener: vi.fn(), dispatchEvent: vi.fn(),
    }));
  }
  window.ResizeObserver = window.ResizeObserver || vi.fn(() => ({
    observe: vi.fn(), unobserve: vi.fn(), disconnect: vi.fn(),
  }));
  window.IntersectionObserver = window.IntersectionObserver || vi.fn(() => ({
    observe: vi.fn(), unobserve: vi.fn(), disconnect: vi.fn(),
  }));
});

async function renderStudio(loader) {
  const mod = await loader();
  const Studio = mod.default;
  const result = render(<Studio {...BASE_PROPS} />);
  return result;
}

describe('Studio component smoke tests', () => {
  it('VideoStudio renders without crashing', async () => {
    const { container } = await renderStudio(
      () => import('../../packages/studio/src/components/VideoStudio')
    );
    expect(container.querySelector('textarea, input, select, button')).toBeTruthy();
  });

  it('LipSyncStudio renders without crashing', async () => {
    const { container } = await renderStudio(
      () => import('../../packages/studio/src/components/LipSyncStudio')
    );
    expect(container.querySelector('textarea, input, select, button')).toBeTruthy();
  });

  it('AudioStudio renders without crashing', async () => {
    const { container } = await renderStudio(
      () => import('../../packages/studio/src/components/AudioStudio')
    );
    expect(container.querySelector('textarea, input, select, button')).toBeTruthy();
  });

  it('CinemaStudio renders without crashing', async () => {
    const { container } = await renderStudio(
      () => import('../../packages/studio/src/components/CinemaStudio')
    );
    expect(container.querySelector('textarea, input, select, button')).toBeTruthy();
  });

  it('RecastStudio renders without crashing', async () => {
    const { container } = await renderStudio(
      () => import('../../packages/studio/src/components/RecastStudio')
    );
    expect(container.querySelector('textarea, input, select, button')).toBeTruthy();
  });

  it('LayersStudio renders without crashing', async () => {
    const { container } = await renderStudio(
      () => import('../../packages/studio/src/components/LayersStudio')
    );
    expect(container.querySelector('textarea, input, select, button')).toBeTruthy();
  });

  it('MarketingStudio renders without crashing', async () => {
    const { container } = await renderStudio(
      () => import('../../packages/studio/src/components/MarketingStudio')
    );
    expect(container.querySelector('textarea, input, select, button')).toBeTruthy();
  });

  it('ClippingStudio renders without crashing', async () => {
    const { container } = await renderStudio(
      () => import('../../packages/studio/src/components/ClippingStudio')
    );
    expect(container.querySelector('textarea, input, select, button')).toBeTruthy();
  });

  it('AppsStudio renders without crashing', async () => {
    const { container } = await renderStudio(
      () => import('../../packages/studio/src/components/AppsStudio')
    );
    expect(container.firstChild).toBeTruthy();
  });

  it('McpCliStudio renders documentation content', async () => {
    const { container } = await renderStudio(
      () => import('../../packages/studio/src/components/McpCliStudio')
    );
    expect(container.textContent).toContain('muapi-cli');
  });
});
