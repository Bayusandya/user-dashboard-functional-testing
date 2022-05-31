module.exports = {

    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//div[10]//button[1]//span[1]")
    },

    perform: function () {
        var selector = page.actionPathBtn.elements.searchInput;
        return driver.findElement(selector).click(selector)
    }
}