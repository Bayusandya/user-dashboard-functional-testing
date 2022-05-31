module.exports = {

    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//body//button[2]")
    },

    perform: function () {
        var selector = page.savenewpathvueButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}