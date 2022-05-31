module.exports = {

    url: "https://dashboard-staging.vutura.io/integration",

    elements: {
        searchInput: by.xpath("//div[@class='v-input--selection-controls__ripple green--text text--darken-1']")
    },

    perform: function () {
        var selector = page.statusConnectButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }

};