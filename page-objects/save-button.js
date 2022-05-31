module.exports = {
    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//span[contains(text(),'Save')]")
    },

    perform: function () {
        var selector = page.saveButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}