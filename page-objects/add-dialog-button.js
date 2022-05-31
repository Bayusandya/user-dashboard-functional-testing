module.exports = {
    
    url: "https://app.vutura.io/qna",

    elements: {
        searchInput: by.xpath("//button[@class='v-btn v-btn--contained theme--dark v-size--default indigo']")
    },

    perform: function () {
        var selector = page.addDialogButton.elements.searchInput;
        return driver.findElement(selector).click(selector)
    }
}