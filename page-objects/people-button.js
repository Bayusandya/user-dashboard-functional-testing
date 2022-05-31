module.exports = {
    url : "https://app.vutura.io/broadcast",

    elements : {
        searchInput : by.xpath("//div[contains(@class,'v-data-table v-data-table--dense theme--light')]//thead[contains(@class,'v-data-table-header')]//div[contains(@class,'v-input--selection-controls__ripple')]")
    },

    perform: function () {
        var selector = page.peopleButton.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}