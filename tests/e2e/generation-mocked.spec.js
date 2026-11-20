import { test, expect } from '@playwright/test';

// The service worker proxies fetches outside page.route interception; block it
// so mocked API responses are authoritative.
test.use({ serviceWorkers: 'block' });

const KEY = 'e2e-dummy-key';

async function seed(page) {
  await page.addInitScript((key) => {
    try { window.localStorage.setItem('muapi_key', key); } catch {}
  }, KEY);
}

async function mockGeneration(page, { finalUrl = 'https://cdn.muapi.ai/mock-result.png', polls = 2 } = {}) {
  let pollCount = 0;
  await page.route('**/api/api/v1/**', async (route) => {
    const request = route.request();
    const url = request.url();
    if (url.includes('/predictions/') && url.endsWith('/result')) {
      pollCount += 1;
      if (pollCount < polls) {
        return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ status: 'processing' }) });
      }
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ status: 'completed', output: { url: finalUrl }, outputs: [finalUrl] }),
      });
    }
    if (url.includes('/upload_file')) {
      return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ url: 'https://cdn.muapi.ai/mock-upload.png' }) });
    }
    return route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ request_id: 'req-mock-1', status: 'pending' }),
    });
  });
}

test.describe('Generation flow (mocked API)', () => {
  test('generates an image end to end without a real key', async ({ page }) => {
    await seed(page);
    await mockGeneration(page);
    await page.goto('/studio/image');

    const textarea = page.locator('textarea').first();
    await expect(textarea).toBeVisible({ timeout: 30000 });
    await textarea.fill('a red apple on a wooden table');

    await page.getByRole('button', { name: /generate/i }).first().click();

    // Result image from the mocked poll response appears in the gallery.
    const result = page.locator('img[src*="mock-result"]').first();
    await expect(result).toBeVisible({ timeout: 30000 });
  });

  test('can cancel an in-flight generation', async ({ page }) => {
    await seed(page);
    await page.route('**/api/api/v1/**', async (route) => {
      const url = route.request().url();
      if (url.includes('/predictions/')) {
        // Hold the poll open; the user cancels before it resolves.
        await new Promise((resolve) => setTimeout(resolve, 60000));
        return route.fulfill({ status: 200, contentType: 'application/json', body: '{"status":"completed"}' });
      }
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ request_id: 'req-cancel', status: 'pending' }),
      });
    });
    await page.goto('/studio/image');

    const textarea = page.locator('textarea').first();
    await expect(textarea).toBeVisible({ timeout: 30000 });
    await textarea.fill('cancel me');
    await page.getByRole('button', { name: /generate/i }).first().click();

    const cancel = page.getByRole('button', { name: /cancel/i }).first();
    await expect(cancel).toBeVisible({ timeout: 15000 });
    await cancel.click();
    await expect(cancel).toBeHidden({ timeout: 15000 });
  });

  test('switching language navigates to the localized route', async ({ page }) => {
    await seed(page);
    await page.goto('/studio/image');
    const switcher = page.locator('#locale-switcher');
    await expect(switcher).toBeVisible({ timeout: 30000 });
    await switcher.selectOption('ja');
    await expect(page).toHaveURL(/\/ja\/studio\/image/, { timeout: 30000 });
  });
});
