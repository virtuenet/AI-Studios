import { test, expect } from '@playwright/test';

// Service workers bypass page.route interception — block them for mocked APIs.
test.use({ serviceWorkers: 'block' });

const KEY = 'e2e-dummy-key';
const RESULT_URL = 'https://cdn.muapi.ai/mock-qc-result.png';

async function seed(page) {
  await page.addInitScript((key) => {
    try { window.localStorage.setItem('muapi_key', key); } catch {}
  }, KEY);
}

async function mockGeneration(page) {
  await page.route('**/api/api/v1/**', async (route) => {
    const url = route.request().url();
    if (url.includes('/predictions/') && url.endsWith('/result')) {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ status: 'completed', output: { url: RESULT_URL }, outputs: [RESULT_URL] }),
      });
    }
    return route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ request_id: 'req-qc-1', status: 'pending' }),
    });
  });
}

test.describe('QC flow (mocked ML service)', () => {
  test('runs product-size from the review dialog and renders PASS', async ({ page }) => {
    await seed(page);
    await mockGeneration(page);

    const qcPosts = [];
    await page.route('**/api/qc', async (route) => {
      const request = route.request();
      if (request.method() === 'GET') {
        return route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({ enabled: true, checks: ['product-size', 'face-identity'] }),
        });
      }
      qcPosts.push(request.postDataJSON());
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          checks: [{
            name: 'product-size',
            pass: true,
            measured_mm: 47.5,
            real_mm: 48,
            ratio: 0.99,
          }],
        }),
      });
    });

    await page.goto('/studio/image');
    const textarea = page.locator('[data-studio="image"] textarea').first();
    await expect(textarea).toBeVisible({ timeout: 30000 });
    await textarea.fill('a skincare bottle on a wooden table');
    await page.getByRole('button', { name: /generate/i }).first().click();

    const result = page.locator(`img[src="${RESULT_URL}"]`).first();
    await expect(result).toBeVisible({ timeout: 30000 });
    await result.hover();
    await page.getByTitle('Crew check').first().click({ force: true });

    await expect(page.getByRole('dialog', { name: /crew review checklist/i })).toBeVisible();
    await expect(page.getByText('ML checks')).toBeVisible({ timeout: 15000 });

    await page.getByLabel(/real product width/i).fill('48');
    await page.getByRole('button', { name: /run checks/i }).click();

    await expect(page.getByText(/PASS · product-size/)).toBeVisible();
    await expect(page.getByText(/measured 47.5 mm vs 48 mm/)).toBeVisible();
    expect(qcPosts).toHaveLength(1);
    expect(qcPosts[0]).toMatchObject({
      check: 'product-size',
      imageUrl: RESULT_URL,
      productSizeMm: 48,
    });
  });
});
