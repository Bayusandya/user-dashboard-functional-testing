module.exports = {

    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//div[4]//button[1]")
    },

    perform: function () {
        var selector = page.movePathBtn.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}