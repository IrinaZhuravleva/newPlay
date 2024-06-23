import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://codemetrics.dev/');

  await expect(page).toHaveTitle(/CodeMetrics/);
});
