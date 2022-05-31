module.exports={
    url: "https://app.vutura.io/integration", 

    elements: {
        // searchInput: by.xpath("//div[2]//div[1]//div[3]//button[1]")
        searchInput: by.xpath("//div[@class='v-input v-input--is-label-active v-input--is-dirty theme--light v-input--selection-controls v-input--switch green--text text--darken-1']//following-sibling::button")  //use following-sibling xpath
    },

    perform: function(){
        var selector = page.setupButtonTelegram.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}