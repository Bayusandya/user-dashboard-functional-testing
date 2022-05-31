module.exports = {
    
    url: "https://app.vutura.io/qna",

    elements: {
        searchInput: by.xpath("//button[@class='indigo v-btn v-btn--contained theme--dark v-size--default']")
    },

    perform: function () {
        var selector = page.saveQnaButton.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}