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