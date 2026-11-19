import { test, expect } from '@playwright/test';

const TEST_API_KEY = process.env.TEST_MUAPI_KEY || '';

/** Seed localStorage with an API key so the shell renders without the modal. */
async function seedApiKey(page) {
  await page.addInitScript((key) => {
    try {
      window.localStorage.setItem('muapi_key', key);
    } catch {}
  }, TEST_API_KEY || 'e2e-dummy-key');
}

test.describe('AI Studios — E2E smoke', () => {
  test.describe('App shell', () => {
    test('shows the API key modal on first visit', async ({ page }) => {
      await page.goto('/studio/image');
      await page.evaluate(() => localStorage.clear());
      await page.reload();

      const modal = page.locator('input[type="password"], input[placeholder*="key" i]');
      await expect(modal.first()).toBeVisible({ timeout: 15000 });
    });

    test('renders the studio shell when a key is present', async ({ page }) => {
      await seedApiKey(page);
      await page.goto('/studio/image');

      // Sidebar / navigation should render once the key is present.
      const nav = page.locator('aside, nav, [role="navigation"]').first();
      await expect(nav).toBeVisible({ timeout: 20000 });

      // The skip-to-content link is the first focusable element (a11y).
      const skip = page.locator('a[href="#studio-content"]');
      await expect(skip).toHaveCount(1);
    });
  });

  test.describe('Navigation', () => {
    test('/ja/studio/image serves the Japanese locale shell', async ({ page }) => {
      await seedApiKey(page);
      await page.goto('/ja/studio/image');
      await expect(page).toHaveURL(/\/ja\/studio\/image/);
      // Language switcher reflects the active locale.
      const switcher = page.locator('#locale-switcher');
      await expect(switcher).toHaveValue('ja');
    });

    for (const tab of ['image', 'video', 'audio', 'lipsync']) {
      test(`/${tab} route loads without a crash boundary`, async ({ page }) => {
        await seedApiKey(page);
        await page.goto(`/studio/${tab}`);
        await expect(page).toHaveURL(new RegExp(`/studio/${tab}`));

        const body = page.locator('body');
        await expect(body).toBeVisible();

        const crash = page.getByText(/Studio encountered an error|Something went wrong/i);
        await expect(crash).toHaveCount(0);
      });
    }
  });

  test.describe('Image Studio', () => {
    test('renders the prompt composer', async ({ page }) => {
      await seedApiKey(page);
      await page.goto('/studio/image');
      const textarea = page.locator('textarea').first();
      await expect(textarea).toBeVisible({ timeout: 20000 });
    });
  });

  test.describe('Security headers', () => {
    test('middleware sets hardening headers', async ({ page }) => {
      const response = await page.goto('/studio/image');
      const headers = response.headers();
      expect(headers['x-content-type-options']).toBe('nosniff');
      expect(headers['x-frame-options']).toBe('DENY');
      expect(headers['referrer-policy']).toBe('strict-origin-when-cross-origin');
    });
  });

  test.describe('PWA', () => {
    test('serves the web app manifest', async ({ page }) => {
      const response = await page.request.get('/manifest.json');
      expect(response.ok()).toBeTruthy();
      const manifest = await response.json();
      expect(manifest.name).toBe('AI Studios');
    });

    test('serves the service worker', async ({ page }) => {
      const response = await page.request.get('/sw.js');
      expect(response.ok()).toBeTruthy();
      const text = await response.text();
      expect(text).toContain('ai-studios-v1');
    });
  });

  test.describe('Live generation (requires TEST_MUAPI_KEY)', () => {
    test('generates an image end to end', async ({ page }) => {
      test.skip(!TEST_API_KEY, 'TEST_MUAPI_KEY not set');
      await seedApiKey(page);
      await page.goto('/studio/image');

      const textarea = page.locator('textarea').first();
      await textarea.fill('a red apple on a wooden table, studio lighting');

      const generate = page.getByRole('button', { name: /generate/i }).first();
      await generate.click();

      // Result appears in history / preview — allow generous polling time.
      const result = page.locator('img[src*="http"]').first();
      await expect(result).toBeVisible({ timeout: 180000 });
    });
  });
});
