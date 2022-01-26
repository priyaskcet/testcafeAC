const {Selector, t} = require('testcafe');



function select(selector) {
    return Selector(selector).with({boundTestRun: testController});
}

exports.duckduck = {
    url: function() {
        return "https://start.duckduckgo.com/";
    },
    logo: function() {
        return select('.logo_homepage_link');
    },
    SearchBox: function() {
            return select('.search--home');
    },
    SearchDropdown: function() {
        var num=select('div#acp').childNodeCount
                var n=num.length;
        return num;
    },
    hamburgerButton: function() {
        return select('.header__button--menu');
    },
    loginErrorMessage: function() {
        return select('#js-flash-container > div > div');
    },
    searchButton: function() {
        return select('.header-search-input');
    },
    firstSearchResult: function() {
        return Selector('.acp-wrap').nth(0).with({boundTestRun: testController});
    },
    Themeslink: function() {
        return Selector('a').withText("Themes").with({boundTestRun: testController});
    },
    darkTheme: function() {
        return Selector('label').withAttribute('data-theme-id','d').with({boundTestRun: testController});
    },
    magnifying: function() {
        return Selector('input').withAttribute('id','search_button_homepage').with({boundTestRun: testController});
    },
    traffic2018: function(){
       return Selector('h2').withText("2018 Traffic").with({boundTestRun: testController});
    },
};
