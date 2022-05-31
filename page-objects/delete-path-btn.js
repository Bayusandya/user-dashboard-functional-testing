module.exports = {

    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//div[contains(text(),'Delete Path')]")
    },

    perform: function () {
        var selector = page.deletePathBtn.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}