module.exports = {

    url: "https://app.vutura.io/path",

    elements: {
    //    searchInput: by.xpath("//span[contains(text(),'Upload Image')]") 
        // searchInput: by.xpath("/html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[1]/label[1]/span[1]")
        // searchInput: by.xpath("//label[@class='btn round btn-min-width mr-1 mb-1']")
        searchInput: by.xpath("//button[contains(@class,'align-self-start v-btn v-btn--depressed v-btn--flat v-btn--outlined theme--light v-size--x-large grey--text text--darken-2')]//span[contains(@class,'v-btn__content')][contains(text(),'Choose File')]")
       
    },
    

    
    perform: function () {
        var selector = page.choosefileButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}