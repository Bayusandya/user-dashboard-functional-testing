module.exports = {

    url: "https://app.vutura.io/integration",

    elements: {
        searchInput: by.xpath("//div[contains(text(),'Integration')]")

    },

    perform: function () {
        var selector = page.connectBtn.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}