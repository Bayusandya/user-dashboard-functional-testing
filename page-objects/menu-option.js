module.exports = {

    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//div[@id='menu-list-item-154']")
    },

    perform: function () {
        var selector = page.menuOption.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}