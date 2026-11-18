
require('dotenv').config();

const {chromium} = require('playwright');
const {test, expect}=require('@playwright/test');

const LoginPage = require('../pages/LoginPage');


test('login test with pom', async() => {

    const browser = await chromium.launch({channel:'chrome',headless:false});

    const page = await browser.newPage();

    await page.goto(process.env.URL);

    //create an object for login page
    const loginpage = new LoginPage(page);

    await loginpage.login(process.env.TEST_USERNAME,process.env.TEST_PASSWORD);

    console.log(await page.title());

    await page.waitForTimeout(3000);

    // Validation
    await expect(page).toHaveTitle("Facebook");
  
  
    console.log("Test case Completed");



});