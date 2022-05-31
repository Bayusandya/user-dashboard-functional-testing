module.exports = {

    url: "https://dashboard-staging.vutura.io/statisticVutura",

    elements: {
        searchInput: by.xpath("//p[contains(text(),'Most Accessed Path')]")
    },

    perform: function () {
        var selector = page.smapButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }

};