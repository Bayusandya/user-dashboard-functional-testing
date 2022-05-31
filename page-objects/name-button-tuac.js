module.exports = {
    url: "https://app.vutura.io/endUserProfile",

    elements: {
        searchInput: by.xpath("//span[contains(text(),'Name')]")
    },

    perform: function () {
        var selector = page.nameButtonTuac.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}