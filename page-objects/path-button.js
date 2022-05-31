module.exports = {
    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//body//a[3]")
    },

    perform: function () {
        var selector = page.pathButton.elements.searchInput
        return driver.findElement(selector).click(selector)
    }

}