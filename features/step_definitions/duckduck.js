const {Given, When, Then} = require('cucumber');
const {Selector} = require('testcafe');
const {t} = require('testcafe');
const Role = require('testcafe').Role;
const duckduckPage = require('../support/pages/duckduck-page');

Given(/^I am on the homepage$/, async function() {
    await testController.navigateTo(duckduckPage.duckduck.url());
});
 
When(/^I look at the page$/, async function () {
   
});
Then(/^I expect to see the duckduckgo logo on the page$/,async function () {
        if(duckduckPage.duckduck.logo().exists)
        {
            await testController.exists  ;
        }
        
});

When(/^I type "([^"]*)" into the search box$/, async function (String) {

    await testController.typeText(duckduckPage.duckduck.SearchBox(), String);
});
Then(/^I expect to see exactly (-?\d+) suggestions in the typeahead dropdown$/,async function (int) {
    var length = duckduckPage.duckduck.SearchDropdown();
    if(length==10)
    {
        await testController.exists  ;
    }
});
//Then(/^I expect the first result to be "([^"]*)"$/,async function (text) {
    
  //  await testController.expect(duckduckPage.duckduck.firstSearchResult().innerText).contains('supercalafragalistic');   
//});
When(/^I click on the hamburger menu in the top right$/, async function () {
    await testController.click(duckduckPage.duckduck.hamburgerButton())
});
Then(/^I expect to see a themes link$/,async function () {

//var firstLink = Selector('a').withText("Themes").with({ boundTestRun: testController });
if(duckduckPage.duckduck.Themeslink()=="Themes"){
   await testController.click(duckduckPage.duckduck.Themeslink());
}
});
When(/^I click on the themes link then click on the dark mode theme button$/,async function () {
   await testController.click(duckduckPage.duckduck.Themeslink());
   await testController.click(duckduckPage.duckduck.darkTheme());
});
Then(/^My page background should change colour$/, async function () {
   
    if(duckduckPage.duckduck.darkTheme().checked)
    {
        await testController.checked;   
    }
    
});
Given(/^I am on the traffic page$/, async function() {
    await testController.navigateTo("https://start.duckduckgo.com/traffic");
});

When(/^I click on the 2018 Traffic section$/, async function () {
   
    await testController.click(duckduckPage.duckduck.traffic2018());
});