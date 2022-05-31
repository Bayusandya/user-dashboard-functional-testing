module.exports = {

    url:"https://app.vutura.io/qna",

    elements: {
        searchInput: by.xpath("//i[@class='v-icon notranslate mdi mdi-forum theme--dark']")
    },

    perform: function () {
        var selector = page.QnavueButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}