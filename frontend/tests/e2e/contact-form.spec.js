import { expect, test } from '@playwright/test';

test('allows a valid visitor to submit a message and see a thank you confirmation', async ({ page }) => {
  await page.goto('/contact');

  await page.getByLabel('Name').fill('Jamie Lee');
  await page.getByLabel('Email').fill('jamie@example.com');
  await page.getByLabel('Message').fill('I would like more information about your services.');
  await page.getByRole('button', { name: /submit/i }).click();

  await expect(page.getByRole('status')).toContainText(/thank you for your message/i);
});

test('shows validation errors for blank name and invalid email', async ({ page }) => {
  await page.goto('/contact');

  await page.getByRole('button', { name: /submit/i }).click();
  await expect(page.getByText(/name is required/i)).toBeVisible();

  await page.getByLabel('Name').fill('Jamie');
  await page.getByLabel('Email').fill('not-an-email');
  await page.getByRole('button', { name: /submit/i }).click();
  await expect(page.getByText(/please enter a valid email address/i)).toBeVisible();
});
