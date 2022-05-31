module.exports = {

    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//div[contains(text(),'GREETING')]")
    },

    perform: function () {
        var selector = page.greetingPathBtn.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}