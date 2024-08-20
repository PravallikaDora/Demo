// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('fill out and submit form', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  
  await page.waitForSelector('input#firstName', { state: 'visible' });
  await page.fill('input#firstName', 'John');
  
  await page.fill('input#lastName', 'Doe');
  await page.fill('input#userEmail', 'john.doe@example.com');
  
  await page.waitForSelector('label[for="gender-radio-1"]', { state: 'visible' });
  await page.click('label[for="gender-radio-1"]');

  await page.waitForSelector('input#userNumber', { state: 'visible' });
  await page.fill('input#userNumber', '1234567890');
  
  await page.click('button#submit');
  
  await page.waitForSelector('.modal-body', { state: 'visible' });
  await expect(page.locator('.modal-body')).toContainText('John Doe');
});
