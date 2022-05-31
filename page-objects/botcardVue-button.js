module.exports = {

    url: "https://app.vutura.io/statisticVutura",

    elements: {
        searchInput: by.css("div.columns._bg_layout:nth-child(2) div.column.is-flex:nth-child(2) div._content_layout section:nth-child(1) div._botlist:nth-child(1) div.field > div.card._card-bot"),
        //searchInput: by.xpath("//div[@class='bot-button']"),
        //serchInput: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[3]"),
        //serchInput: by.xpath("div.columns._bg_layout:nth-child(2) div.column.is-flex:nth-child(2) div._content_layout section:nth-child(1) div._botlist:nth-child(1) div.field div.card._card-bot > div.bot-button"),
        //serchInput: by.xpath("//h2[@class='bot-title']")
        //serchInput: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[2]/h2[1]")
        //serchInput: by.xpath("div.columns._bg_layout:nth-child(2) div.column.is-flex:nth-child(2) div._content_layout div._botlist:nth-child(1) div.field div.card._card-bot div.bot-info > h2.bot-title")
        //serchInput: by.xpath("//div[@class='bot-info']")
        

    },

    perform: function () {
        var selector = page.botcardVueButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}