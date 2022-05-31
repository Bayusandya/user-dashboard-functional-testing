module.exports = {

    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//span[contains(text(),'Text')]")
    },

    perform: function () {
        var selector = page.textQnaBtn.elements.searchInput;
        return driver.findElement(selector).click(selector)
    }
}