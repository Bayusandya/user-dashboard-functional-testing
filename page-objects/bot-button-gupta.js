module.exports={
    url: "https://app.vutura.io/bot", 

    elements: {
        searchInput: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/section[1]/div[1]/div[1]/div[2]/div[2]/h2[1]")
    },

    perform: function(){
        var selector = page.botButtonGupta.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}