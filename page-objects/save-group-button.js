module.exports = {
    url : "https://app.vutura.io/broadcast",

    elements : {
        searchInput : by.xpath("//span[contains(text(),'Save')]")
    },

    perform: function () {
        var selector = page.saveGroupButton.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}