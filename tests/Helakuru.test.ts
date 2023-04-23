import {chromium, expect, test} from "@playwright/test"


test("herokuapp test one version1", async() => {

    const browser =  await chromium.launch({
       headless: false 
    });
    const context = await browser.newContext();
    const page = await context.newPage();


    // Add cookies to the browserContext inorder to get the version1 of the page (application variation 1 header)
    const cookieVals = await setCookieValsVer1();
    context.addCookies(cookieVals)
 
    await page.goto("https://the-internet.herokuapp.com/")
    await page.click("//a[contains(text(),'A/B Testing')]")
    const headerABTesting  = page.locator("h3")
    console.log(await headerABTesting.textContent())


 
    //Verify the header
    await expect(headerABTesting).toHaveText("A/B Test Variation 1")
    
    //Verify the paragraph content
    const descABTesting = page.locator("//div[@class='example']//p[1]")
    await expect(descABTesting).toHaveText("Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).")
    
 })

 test("herokuapp test one version2", async() => {

    const browser =  await chromium.launch({
       headless: false 
    });
    const context = await browser.newContext();
    const page = await context.newPage();


    // Add cookies to the browserContext inorder to get the version1 of the page (application variation 1 header)
    const cookieVals = await setCookieValsVer2();
    context.addCookies(cookieVals)
 
    await page.goto("https://the-internet.herokuapp.com/")
    await page.click("//a[contains(text(),'A/B Testing')]")
    const headerABTesting  = page.locator("h3")
    console.log(await headerABTesting.textContent())

 
    //Verify the header
    await expect(headerABTesting).toHaveText("A/B Test Control")
    
    //Verify the paragraph content
    const descABTesting = page.locator("//div[@class='example']//p[1]")
    await expect(descABTesting).toHaveText("Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).")
    
 })



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




 test("herokuapp test four ", async() => {

    const browser =  await chromium.launch({
       headless: false 
    });
    const context = await browser.newContext(
        
    );
    const page = await context.newPage();
 
    await page.goto("https://the-internet.herokuapp.com/context_menu")
    
    page.on("dialog", (dialog) => {
      const dialogMessage = dialog.message()
       expect(dialogMessage).toEqual("You selected a context menu")   
    })

    const contextMenu  = page.locator("#hot-spot")
    await contextMenu.click({ button: 'right' });
   

 })


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





 export async function setCookieValsVer1() {

    const cookies = [
        {name:"rack.session", value:"BAh7CUkiD3Nlc3Npb25faWQGOgZFVEkiRWRmMDQxODIzMTQzZjZjNTMzYzg3%0AN2Y4MGVkMjNhM2Y3YzYwZjQwZjY5OGE0ZDYzZWM5ZWZlMGJlMWY1NDY4ZTEG%0AOwBGSSIJY3NyZgY7AEZJIiUyYmMzYzVkY2Q3NjYwN2IyNjliYmYyNTIxMzFm%0AOTA1ZQY7AEZJIg10cmFja2luZwY7AEZ7B0kiFEhUVFBfVVNFUl9BR0VOVAY7%0AAFRJIi1lYjM3ZDM4MTllMmM2ZDI2M2ZiZmRmNWVjOWE0OGM0MjJmYmJjOTM4%0ABjsARkkiGUhUVFBfQUNDRVBUX0xBTkdVQUdFBjsAVEkiLWQ4NzE0NjhlNDcz%0ANThhMjc5ZmMyNDc5MmIxODExMDg2YTJlMDY1ZTQGOwBGSSIKZmxhc2gGOwBG%0AewA%3D%0A--50e08e28afe5e71ad1cb6adf5dc0d5a11cdc01c9", path:"/", domain:"the-internet.herokuapp.com"},
        {name:"optimizelyBuckets", value:"%7B%22298349752%22%3A%22298343790%22%7D", path:"/", domain:"the-internet.herokuapp.com"},
        {name:"optimizelyEndUserId", value:"%5B%22n%3Dhttps%253A%252F%252Fthe-internet.herokuapp.com%252Fabtest%26g%3D298349752%26u%3Doeu1681788967977r0.4500791624448581%26wxhr%3Dtrue%26t%3D1682258660720%26f%3D298349752%2C318188263%22%2C%22n%3Dengagement%26g%3D298283957%26u%3Doeu1681788967977r0.4500791624448581%26wxhr%3Dtrue%26t%3D1682258659386%26f%3D298349752%2C318188263%22%5D", path:"/", domain:"the-internet.herokuapp.com"},
        {name:"optimizelySegments", value:"%7B%7D", path:"/", domain:"the-internet.herokuapp.com"},
    ]

    return cookies;
}

export async function setCookieValsVer2() {

    const cookies = [
        {name:"rack.session", value:"BAh7CUkiD3Nlc3Npb25faWQGOgZFVEkiRThmODI0YzRkZmU0ZGJhZTQ2MTEx%0AMWFhNzdlMmNmNWU1ZDE2NTM1YzQ4MDJmNGM5MDI0YTlkMWFlNTJhYmY4OTQG%0AOwBGSSIJY3NyZgY7AEZJIiVhY2NmYmUyY2QyZTM3MzdiZGUxYTZiZTBkNzRl%0AYzU0YQY7AEZJIg10cmFja2luZwY7AEZ7B0kiFEhUVFBfVVNFUl9BR0VOVAY7%0AAFRJIi1lYjM3ZDM4MTllMmM2ZDI2M2ZiZmRmNWVjOWE0OGM0MjJmYmJjOTM4%0ABjsARkkiGUhUVFBfQUNDRVBUX0xBTkdVQUdFBjsAVEkiLTEwODBjOGZkNjQy%0ANzJiZDg1OTZmZjI4MjMwNzVjMDUzOWNjNDNkOGEGOwBGSSIKZmxhc2gGOwBG%0AewA%3D%0A--a3daa990a97142e9206f2a678b31688f748ceba3", path:"/", domain:"the-internet.herokuapp.com"},
        {name:"optimizelyBuckets", value:"%7B%22298349752%22%3A%22298291000%22%7D", path:"/", domain:"the-internet.herokuapp.com"},
        {name:"optimizelyEndUserId", value:"oeu1682262223270r0.893655677470885", path:"/", domain:"the-internet.herokuapp.com"},
        {name:"optimizelySegments", value:"%7B%7D", path:"/", domain:"the-internet.herokuapp.com"},
    ]

    return cookies;
}