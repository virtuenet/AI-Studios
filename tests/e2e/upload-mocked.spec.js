import { test, expect } from '@playwright/test';

// Service workers bypass page.route interception — block them for mocked APIs.
test.use({ serviceWorkers: 'block' });

const KEY = 'e2e-dummy-key';
const UPLOADED_URL = 'https://cdn.muapi.ai/mock-uploaded.png';

async function seed(page) {
  await page.addInitScript((key) => {
    try { window.localStorage.setItem('muapi_key', key); } catch {}
  }, KEY);
}

async function mockUploadAndGeneration(page) {
  const uploadRequests = [];
  await page.route('**/api/api/v1/**', async (route) => {
    const request = route.request();
    const url = request.url();
    if (url.includes('/upload_file')) {
      uploadRequests.push(request.method());
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ url: UPLOADED_URL }),
      });
    }
    if (url.includes('/predictions/') && url.endsWith('/result')) {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ status: 'completed', output: { url: UPLOADED_URL }, outputs: [UPLOADED_URL] }),
      });
    }
    return route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ request_id: 'req-upload-1', status: 'pending' }),
    });
  });
  return uploadRequests;
}

test.describe('Upload flow (mocked)', () => {
  test('uploads a reference image and generates in i2i mode', async ({ page }) => {
    await seed(page);
    const uploads = await mockUploadAndGeneration(page);
    await page.goto('/studio/image');

    // Open the reference-image picker, then attach the file to its input.
    await page.getByTitle(/add up to \d+ images/i).first().click();
    const fileInput = page.locator('[data-studio="image"] input[type="file"]').first();
    await expect(fileInput).toHaveCount(1, { timeout: 30000 });

    const pngBytes = Buffer.from(
      'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
      'base64'
    );
    await fileInput.setInputFiles({
      name: 'reference.png',
      mimeType: 'image/png',
      buffer: pngBytes,
    });

    // Upload should hit the mocked endpoint and surface the returned URL.
    await expect.poll(() => uploads.length, { timeout: 20000 }).toBeGreaterThan(0);

    // Multi-image models require confirming the selection in the picker.
    const confirm = page
      .locator('[data-studio="image"]')
      .getByRole('button', { name: /use selected|done \(/i })
      .first();
    await expect(confirm).toBeVisible({ timeout: 20000 });
    await confirm.click();

    // The uploaded reference flips the studio into image-to-image mode
    // (the prompt placeholder changes accordingly).
    const textarea = page.locator('[data-studio="image"] textarea').first();
    await expect(textarea).toHaveAttribute(
      'placeholder',
      /transform this image/i,
      { timeout: 20000 }
    );
    await textarea.fill('turn this into a watercolor painting');
    await page.getByRole('button', { name: /generate/i }).first().click();

    // The mocked i2i submission/poll resolves and the result appears in history.
    const result = page.locator(`img[src="${UPLOADED_URL}"]`).first();
    await expect(result).toBeVisible({ timeout: 30000 });
  });
});
