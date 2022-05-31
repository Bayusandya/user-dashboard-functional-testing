module.exports = {

    url: "https://app.vutura.io/statisticVutura",

    elements: {
        searchInput: by.xpath("//p[contains(text(),'Most used Channel')]")
    },

    perform: function () {
        var selector = page.mostUsedChannelBtn.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}