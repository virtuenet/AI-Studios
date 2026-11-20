import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ServiceWorkerUpdater from '../../components/ServiceWorkerUpdater.jsx';

function installServiceWorker({ waiting = null, online = true } = {}) {
  const registration = {
    waiting,
    installing: null,
    addEventListener: vi.fn(),
  };
  const controller = { postMessage: vi.fn() };
  const serviceWorker = {
    register: vi.fn().mockResolvedValue(registration),
    controller,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  };
  Object.defineProperty(navigator, 'serviceWorker', { value: serviceWorker, configurable: true });
  Object.defineProperty(navigator, 'onLine', { value: online, configurable: true });
  return { registration, controller, serviceWorker };
}

describe('ServiceWorkerUpdater', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('prompts when a new version is waiting and activates on Reload', async () => {
    const waiting = { postMessage: vi.fn() };
    installServiceWorker({ waiting });
    render(<ServiceWorkerUpdater />);

    expect(await screen.findByText(/new version of ai studios is available/i)).toBeTruthy();
    fireEvent.click(screen.getByRole('button', { name: /reload/i }));
    expect(waiting.postMessage).toHaveBeenCalledWith({ type: 'SKIP_WAITING' });
  });

  it('shows an offline indicator', async () => {
    installServiceWorker({ online: false });
    render(<ServiceWorkerUpdater />);
    expect(await screen.findByText(/offline/i)).toBeTruthy();
  });

  it('renders nothing when online with no update or queue', async () => {
    installServiceWorker({ online: true });
    const { container } = render(<ServiceWorkerUpdater />);
    await new Promise((r) => setTimeout(r, 0));
    expect(container.firstChild).toBeNull();
  });
});
