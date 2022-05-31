module.exports = {

    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//span[contains(text(),'Add Path')]")
    },

    perform: function () {
        var selector = page.addNewPathvueButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}