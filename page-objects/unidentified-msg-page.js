module.exports = {

    url: "https://app.vutura.io/unidentifiedMessage",
    elements: {
        searchInput: By.xpath("//tr[1]//td[2]")
    },

    perform: function () {
        var selector = page.unidentifiedMsgPage.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}
