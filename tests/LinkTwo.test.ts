import {chromium, expect, test} from "@playwright/test"




test("herokuapp test two", async() => {

    const browser =  await chromium.launch({
       headless: false 
    });
    const context = await browser.newContext();
    const page = await context.newPage();
 
    await page.goto("https://the-internet.herokuapp.com/")
    await page.click("(//div[@class='large-12 columns']//a)[2]")
    const headerABTesting  = page.locator("h3")
    console.log(await headerABTesting.textContent())
 
    //Verify the header
    await expect(headerABTesting).toHaveText("Add/Remove Elements")

    const btnAddElement = page.locator("//button[text()='Add Element']")
    await expect(btnAddElement).toBeVisible()
    await page.click("//button[text()='Add Element']")
    
    const btnDeleteElement =  page.locator("//button[text()='Delete']")
    await expect(btnDeleteElement).toBeVisible()
    await page.click("//button[text()='Delete']")
    await expect(btnDeleteElement).toHaveCount(0);

 })


 