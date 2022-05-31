module.exports = {
    url :"https://app.vutura.io/path",

    elements : {
        searchInput : by.xpath("//span[contains(text(),'Add Button')]")
    },

    perform: function () {
        var selector = page.addButton.elements.searchInput
        return driver.findElement(selector).click(selector)
    }

}