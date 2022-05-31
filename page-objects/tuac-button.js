module.exports = {

    url: "https://dashboard-staging.vutura.io/statisticVutura",

    elements: {
        searchInput: by.xpath("//p[contains(text(),'Total User All Channel')]")
    },

    perform: function () {
        var selector = page.tuacButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }

};