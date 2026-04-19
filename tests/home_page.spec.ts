import { test, expect } from '@playwright/test';

test('Home Page', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await expect(page).toHaveTitle('vue-sandbox');
});

test('Increase Counter', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await expect(page.getByText('Count:')).toHaveText('Count: 0')

  await page.getByRole('button', { name: 'Count++' }).click();

  await expect(page.getByText('Count:')).toHaveText('Count: 1')
});
