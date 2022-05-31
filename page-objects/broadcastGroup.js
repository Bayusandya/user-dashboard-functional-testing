module.exports = {
    url : "https://app.vutura.io/broadcast",

    elements : {
        searchInput : by.xpath("//div[@class='v-data-table elevation-0 v-data-table--dense v-data-table--fixed-height theme--light']//td[@class='text-left'][contains(text(),'Group keluarga')]")
    },

    perform: function () {
        var selector = page.broadcastGroup.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}