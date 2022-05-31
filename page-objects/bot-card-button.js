module.exports = {
    
    url: "https://app.vutura.io/bot",

    elements: {
        searchInput: by.xpath("//div[@class='card _card-bot']")
    },

    perform: function () {
        var selector = page.botCardButton.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}