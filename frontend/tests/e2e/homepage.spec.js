import { expect, test } from '@playwright/test';

test('homepage shows the welcome message and contact link', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: /welcome to northstar studio/i })).toBeVisible();
  await expect(page.getByRole('link', { name: /contact us/i })).toBeVisible();

  const carousel = page.getByLabel('Company highlights carousel');
  await expect(carousel).toBeVisible();
});
