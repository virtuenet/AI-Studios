import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import ReviewChecklistModal from '../../packages/studio/src/filmCrew/ReviewChecklistModal';
import { checkMlAvailability, runMlChecks } from '../../packages/studio/src/filmCrew/mlChecks';

vi.mock('../../packages/studio/src/filmCrew/mlChecks', () => ({
  checkMlAvailability: vi.fn(),
  runMlChecks: vi.fn(),
}));

describe('ReviewChecklistModal ML panel', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    checkMlAvailability.mockResolvedValue({ enabled: true, error: null });
    runMlChecks.mockResolvedValue({
      enabled: true,
      ok: true,
      checks: [
        {
          name: 'product-size',
          pass: true,
          measured_mm: 47.5,
          real_mm: 48,
          ratio: 0.99,
        },
      ],
    });
  });

  it('hides the ML panel when the service is disabled', async () => {
    checkMlAvailability.mockResolvedValue({ enabled: false, error: null });
    render(
      <ReviewChecklistModal open type="image" prompt="a shot" imageUrl="https://cdn/x.png" onClose={vi.fn()} />
    );
    await waitFor(() => expect(checkMlAvailability).toHaveBeenCalled());
    expect(screen.queryByText('ML checks')).toBeNull();
  });

  it('runs the product-size check and renders the verdict', async () => {
    render(
      <ReviewChecklistModal open type="image" prompt="a shot" imageUrl="https://cdn/x.png" onClose={vi.fn()} />
    );
    expect(await screen.findByText('ML checks')).toBeTruthy();

    fireEvent.change(screen.getByLabelText(/real product width/i), { target: { value: '48' } });
    fireEvent.click(screen.getByRole('button', { name: /run checks/i }));

    expect(await screen.findByText(/PASS · product-size/)).toBeTruthy();
    expect(screen.getByText(/measured 47.5 mm vs 48 mm/)).toBeTruthy();
    expect(runMlChecks).toHaveBeenCalledWith(
      expect.objectContaining({ check: 'product-size', imageUrl: 'https://cdn/x.png', productSizeMm: 48 })
    );
  });

  it('requires a size or reference before running', async () => {
    render(
      <ReviewChecklistModal open type="image" prompt="a shot" imageUrl="https://cdn/x.png" onClose={vi.fn()} />
    );
    expect(await screen.findByText('ML checks')).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /run checks/i }));
    expect(await screen.findByText(/Enter the real product width/i)).toBeTruthy();
    expect(runMlChecks).not.toHaveBeenCalled();
  });
});
