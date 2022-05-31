module.exports = {
    url : "https://app.vutura.io/broadcast",

    elements : {
        searchInput : by.xpath("//button[@class='mb-2 text-capitalize v-btn v-btn--block v-btn--contained theme--dark v-size--default primary']")
    },

    perform: function () {
        var selector = page.addNewGroupButton.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}