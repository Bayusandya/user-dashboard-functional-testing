module.exports = {

    url : "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//div[8]//button[1]")
    },

    perform: function () {
        var selector = page.signoutBtn.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}