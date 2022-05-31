module.exports = {
    url :"https://app.vutura.io/path",

    elements : {
        searchInput : by.xpath("//button[contains(@class,'v-btn v-btn--contained theme--dark v-size--default indigo')]")
    },

    perform: function () {
        var selector = page.doneButton.elements.searchInput
        return driver.findElement(selector).click(selector)
    }

}