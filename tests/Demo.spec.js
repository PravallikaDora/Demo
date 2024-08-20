const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    
    await page.click('//img[contains(@src, "Toolsqa.jpg")]');
    //await page.pause();
    await page.locator('//h5[text()="Elements"]').click();
    // await page.pause();
    await page.locator('//span[text()="Text Box"]').click();
    

});
