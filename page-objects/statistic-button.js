module.exports = {

    url: "https://dashboard-staging.vutura.io/statisticVutura",

    elements: {
        searchInput: by.xpath("//a[@class='v-list-item--active v-list-item v-list-item--link theme--dark']")
    },

    perform: function () {
        var selector = page.statisticButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }

};