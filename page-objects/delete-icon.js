module.exports={
    url: "https://app.vutura.io/qna", 

    elements: {
        searchInput: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/table[1]/tbody[1]/tr[6]/td[3]/div[1]/i[1]")
    },

    perform: function(){
        var selector = page.deleteIcon.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}