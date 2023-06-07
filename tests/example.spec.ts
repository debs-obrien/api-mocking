import { test, expect } from '@playwright/test';

test.describe('mock and modify', () => {
  test.beforeEach(async ({ page }) => {
    
    
  });

  test('mocks a fruit and doesn\'t call api in dev mode', async ({ page }) => {
    await page.route('https://www.fruityvice.com/api/fruit/orange', async route => {
      const json = {
        message: {
          "name": "playwright",
        }
      };
      await route.fulfill({ json });
    });
    await page.goto('localhost:3003');
    
    await expect(page.locator('div').filter({ hasText: 'Playwright' })).toBeVisible();
  });
});
