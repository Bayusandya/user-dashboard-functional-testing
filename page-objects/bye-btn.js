module.exports = {

    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//div[contains(text(),'BYE')]")
    },

    perform: function () {
        var selector = page.byeBtn.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}