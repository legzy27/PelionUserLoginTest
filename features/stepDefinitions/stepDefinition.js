let expect = require('expect');
let {Given,When,Then,setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);




// user access https://portal.mbedcloud.com
Given(/^I go to "([^"]*)"$/, function (site) {
    browser.ignoreSynchronization=true;
    browser.driver.sleep(3000);
    return browser.get(site);  
  });

  When(/^user click on login with account.mbed.com$/, async function () {
    browser.driver.sleep(2000);
    await element(by.id('sign-in-button')).click();
    browser.driver.sleep(1000);
    return console.log("@When -- user click on login with account.mbed.com ")
  });

  //user provide credentials(username: cloudportal33, password: mbedcloud123)
  Then(/^user enter "([^"]*)" and "([^"]*)"$/ , async function (username, password) {
    await  browser.driver.sleep(3000);
    await element(by.id('email')).sendKeys('cloudportal33');
    await browser.driver.sleep(3000);
    await element(by.id('password')).sendKeys('cloudportal33');
    await browser.driver.sleep(3000);
   return console.log("@Then  -- user enter "+username+" and "+password+" ")
  });
   //user make sure to login
  Then(/^user click login button$/, async function () {
    await  browser.driver.sleep(3000);
    await element(by.id('sign-in-button')).click();
    await  browser.driver.sleep(3000);
    //user fails to login access denied
    await expect(element(by.id('login-result-area')).isPresent()).toBe(false);
    await  browser.driver.sleep(3000);
    return console.log("@Then  -- user click login button")
  });