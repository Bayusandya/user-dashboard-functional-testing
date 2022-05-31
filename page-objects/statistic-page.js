module.exports = {

    url: "https://app.vutura.io/statisticVutura",
    elements: {
        searchInput: By.xpath("//div[contains(text(),'Overview')]")
    },

    perform: function () {
        var selector = page.statisticPage.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}
