module.exports = {

    url: "https://app.vutura.io/bot",

    elements: {
        searchInput: by.xpath("//h2[contains(text(),'bot_test')]")
        // searchInput: by.css("div.columns._bg_layout:nth-child(2) div.column.is-flex:nth-child(2) div._content_layout div._botlist:nth-child(1) div.field div.card._card-bot:nth-child(4) div.bot-info > h2.bot-title")
    },

    perform: function () {
        var selector = page.botcardBtn.elements.searchInput;
        return driver.findElement(selector).click(selector)
    }
}