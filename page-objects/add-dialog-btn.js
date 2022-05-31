module.exports = {

    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//span[contains(text(),'Add Dialog')]")
    },

    perform: function () {
        var selector = page.addDialogBtn.elements.searchInput;
        return driver.findElement(selector).click(selector)
    }
}