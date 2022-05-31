module.exports = {

    url: "https://app.vutura.io/bot",

    elements: {
        searchInput: by.xpath("//div[@class='createBotButton']")
    },

    perform: function () {
        var selector = page.tambahBotBtn.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}