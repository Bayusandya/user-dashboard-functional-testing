module.exports = {

    url: "https://app.vutura.io/statisticVutura",

    elements: {
        searchInput: by.xpath("//p[contains(text(),'Unidentified Message')]")
    },

    perform: function () {
        var selector = page.unidentifiedMsgBtn.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}