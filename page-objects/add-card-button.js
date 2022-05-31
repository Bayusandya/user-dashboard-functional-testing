module.exports = {
    url :"https://app.vutura.io/path",

    elements : {
        searchInput : by.xpath("//span[contains(text(),'Add Card')]")
    },

    perform: function () {
        var selector = page.addCardButton.elements.searchInput
        return driver.findElement(selector).click(selector)
    }

}