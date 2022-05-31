module.exports = {

    url:"https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//i[@class='v-icon notranslate mdi mdi-vector-rectangle theme--dark']")
        
    },

    perform: function () {
        var selector = page.PathvueButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}