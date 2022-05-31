module.exports = {
    url :"https://app.vutura.io/path",

    elements : {
        searchInput : by.xpath("//button[contains(@class,'indigo ml-auto white--text v-btn v-btn--contained theme--light v-size--default')]")
    },

    perform: function () {
        var selector = page.savePathButton.elements.searchInput
        return driver.findElement(selector).click(selector)
    }

}