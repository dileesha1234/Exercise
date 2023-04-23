import {chromium, expect, test} from "@playwright/test"


 test("herokuapp test five ", async() => {
    

    const browser =  await chromium.launch({
       headless: false 
    });
    const context = await browser.newContext(
        
    );
    const page = await context.newPage();
 
    await page.goto("https://the-internet.herokuapp.com/checkboxes")

    const headerCheckBoxes  = page.locator("h3")

    //Verify the header
    await expect(headerCheckBoxes).toHaveText("Checkboxes");
    
    await page.check("//form[@id='checkboxes']//input[1]")
    expect(await page.locator("//form[@id='checkboxes']//input[1]").isChecked()).toBeTruthy()

    await page.uncheck("//form[@id='checkboxes']//input[1]")
    expect(await page.locator("//form[@id='checkboxes']//input[1]").isChecked()).toBeFalsy()

    expect(await page.locator("//form[@id='checkboxes']//input[2]").isChecked()).toBeTruthy()

    await page.uncheck("//form[@id='checkboxes']//input[2]")
    expect(await page.locator("//form[@id='checkboxes']//input[2]").isChecked()).toBeFalsy()


    
   

 })




