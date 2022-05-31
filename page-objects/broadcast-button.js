module.exports = {
    url : "https://app.vutura.io/broadcast",

    elements : {
        searchInput : by.xpath("//body//a[5]")
    },

    perform: function () {
        var selector = page.broadcastButton.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}