import { test, expect } from '@playwright/test';

test.describe('Visual smoke', () => {
  test('API key dialog matches the baseline', async ({ page }) => {
    await page.goto('/studio/image');
    await page.evaluate(() => localStorage.clear());
    await page.reload();

    const dialog = page.locator('[role="dialog"]').first();
    await expect(dialog).toBeVisible({ timeout: 30000 });
    // Platform focus-visible heuristics differ (Linux draws the autofocus ring,
    // macOS does not) — blur so the baseline is deterministic.
    await page.evaluate(() => document.activeElement?.blur?.());
    await expect(dialog).toHaveScreenshot('api-key-dialog.png', {
      maxDiffPixelRatio: 0.2,
      animations: 'disabled',
    });
  });

  test('studio sidebar matches the baseline', async ({ page }) => {
    await page.addInitScript(() => {
      try { window.localStorage.setItem('muapi_key', 'e2e-dummy-key'); } catch {}
    });
    await page.goto('/studio/image');

    const sidebar = page.locator('aside').first();
    await expect(sidebar).toBeVisible({ timeout: 30000 });
    await expect(sidebar).toHaveScreenshot('studio-sidebar.png', {
      maxDiffPixelRatio: 0.15,
      animations: 'disabled',
    });
  });
});
