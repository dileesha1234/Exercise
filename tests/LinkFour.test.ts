import {chromium, expect, test} from "@playwright/test"

 test("herokuapp test four ", async() => {

    const browser =  await chromium.launch({
       headless: false 
    });
    const context = await browser.newContext(
        
    );
    const page = await context.newPage();
 
    await page.goto("https://the-internet.herokuapp.com/context_menu")
    
    
    page.on("dialog", async (dialog) =>{
      const dialogMessage = dialog.message()
       expect(dialogMessage).toEqual("You selected a context menu");
       await dialog.accept()
       
    })

    const contextMenu  = page.locator("#hot-spot")
    await contextMenu.click({ button: 'right' });
    await page.keyboard.press('Enter');

   

 })


 