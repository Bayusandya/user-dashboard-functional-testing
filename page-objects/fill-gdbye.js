module.exports = {

    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//input[@id='input-200']")
    },

    perform: function () {
        var selector = page.fillGdbye.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.id.gdBye)
    }
}