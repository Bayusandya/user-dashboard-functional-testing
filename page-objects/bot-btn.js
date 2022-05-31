module.exports = {

    url: "https://app.vutura.io/bot",

    elements: {
        searchInput: by.xpath("//h2[contains(text(),'makeupuchino')]")
    },

    perform: function () {
        var selector = page.botBtn.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}