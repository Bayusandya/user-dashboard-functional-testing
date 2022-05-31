module.exports = {

    url: "https://app.vutura.io/totalConversation",

    elements: {
        searchInput: by.xpath("//p[contains(text(),'Total Conversation')]")
    },

    perform: function () {
        var selector = page.TotalConversationvueButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}