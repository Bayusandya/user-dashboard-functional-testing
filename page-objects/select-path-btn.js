module.exports = {

    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[3]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]")
    },

    perform: function () {
        var selector = page.selectPathBtn.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}