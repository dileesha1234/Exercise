import {chromium, expect, test} from "@playwright/test"


 test("herokuapp test three", async() => {

    const browser =  await chromium.launch({
       headless: false 
    });
    const context = await browser.newContext(
        {
            httpCredentials: {
                username : "admin",
                password:  "admin"
            }
        }
    );
    const page = await context.newPage();
 
    await page.goto("https://the-internet.herokuapp.com/basic_auth")
    const headerABTesting  = page.locator("h3")
    const descBasicAuth  = page.locator("p")
    console.log(await headerABTesting.textContent())
 
    //Verify the header
    await expect(headerABTesting).toHaveText("Basic Auth")

    //verify the content
    await expect(descBasicAuth).toHaveText("Congratulations! You must have the proper credentials.")

 })


 test("herokuapp test three versio2", async() => {

    const browser =  await chromium.launch({
       headless: false 
    });
    const context = await browser.newContext(
        {
            httpCredentials: {
                username : "admin",
                password:  "invalid"
            }
        }
    );
    const page = await context.newPage();
 
    await page.goto("https://the-internet.herokuapp.com/basic_auth")
    const headerABTesting  = page.locator("body")
    const descBasicAuth  = page.locator("p")
    console.log(await headerABTesting.textContent())
 
    //Verify the body
    await expect(headerABTesting).toHaveText("Not authorized");

 })




