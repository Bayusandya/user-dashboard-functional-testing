module.exports={
    url: "https://app.vutura.io/integration", 

    elements: {
        searchInput: by.xpath("//button[@type='button' and contains(@class, 'v-btn v-btn--contained theme--light v-size--default green lighten-4')]") //use contains(), and, not xpath
    },

    perform: function(){
        var selector = page.createButtonTelegramAPI.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}