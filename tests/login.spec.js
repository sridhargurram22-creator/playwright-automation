
const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('Login Test', async () => {

    const browser = await chromium.launch({channel:'chrome',headless:false});

    const page = await browser.newPage();
  // Open URL
  await page.goto('https://www.facebook.com/');

  // Enter username
  await page.locator("//*[text()='Email address or mobile number']").fill('Admin');

  await page.waitForTimeout(2000);

  // Enter password
  await page.locator("//*[text()='Password']").fill('admin123');

  await page.waitForTimeout(2000);

  console.log("Test case Completed");

  console.log(await page.title());

  await expect(page).toHaveTitle("Facebook");
  // Validation
  //await expect(page).toBe();

  await browser.close();

});