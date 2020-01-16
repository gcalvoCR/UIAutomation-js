const {Builder, By, Key, util} = require("selenium-webdriver");

const driver = await new Builder().forBrowser("chrome").build();

async function example(){
    await driver.get("http://google.com");
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    //await driver.wait(until.titleIs('webdriver - Google Search'), 5000);
}

example();
