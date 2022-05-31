module.exports = {

    url:"https://app.vutura.io/bot",
    
    elements: {
        searchInput: by.xpath("//button[@class='button is-primary is-medium is-fullwidth']")
    },

    perform: function () {
        var selector = page.loginVueButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}