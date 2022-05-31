module.exports = {
    url: "https://app.vutura.io/mostAccessedPath",

    elements: {
        searchInput: by.xpath("//span[contains(text(),'Path Name')]")
    },

    perform: function () {
        var selector = page.pathNameButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}