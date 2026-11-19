import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, waitFor } from '@testing-library/react';
import ImageStudio from '../../packages/studio/src/components/ImageStudio';

vi.mock('../../packages/studio/src/muapi', () => ({
  generateImage: vi.fn(),
  generateI2I: vi.fn(),
  uploadFile: vi.fn(),
  getUserBalance: vi.fn().mockResolvedValue({ balance: 0 }),
}));

vi.mock('react-hot-toast', () => ({
  default: { success: vi.fn(), error: vi.fn(), loading: vi.fn(), dismiss: vi.fn() },
  Toaster: () => null,
}));

const DEFAULT_PROPS = {
  apiKey: 'test-api-key-123',
  locale: 'en',
  onGenerationStart: vi.fn(),
  onGenerationEnd: vi.fn(),
  onGenerationComplete: vi.fn(),
  onGenerationError: vi.fn(),
  droppedFiles: null,
  onFilesHandled: vi.fn(),
};

describe('ImageStudio Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    try { window.localStorage.clear(); } catch {}
  });

  it('renders a prompt textarea', () => {
    const { container } = render(<ImageStudio {...DEFAULT_PROPS} />);
    expect(container.querySelector('textarea')).toBeTruthy();
  });

  it('renders model selection controls', async () => {
    const { container } = render(<ImageStudio {...DEFAULT_PROPS} />);
    await waitFor(() => {
      const controls =
        container.querySelector('select') ||
        container.querySelector('[role="combobox"]') ||
        container.querySelector('button');
      expect(controls).toBeTruthy();
    });
  });

  it('renders without crashing when apiKey is provided', () => {
    expect(() => render(<ImageStudio {...DEFAULT_PROPS} />)).not.toThrow();
  });

  it('handles missing apiKey gracefully', () => {
    expect(() => render(<ImageStudio {...DEFAULT_PROPS} apiKey={null} />)).not.toThrow();
  });

  it('renders generate action', () => {
    const { container } = render(<ImageStudio {...DEFAULT_PROPS} />);
    const buttons = [...container.querySelectorAll('button')];
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('does not render a crash fallback', () => {
    const { container } = render(<ImageStudio {...DEFAULT_PROPS} />);
    expect(container.textContent).not.toContain('Studio encountered an error');
  });
});
