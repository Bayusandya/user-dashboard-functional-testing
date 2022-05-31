module.exports = {

    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[1]/div[1]/textarea[1]")
    },

    perform: function () {
        var selector = page.fillDescriptionBox.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.dataPath.description);
    }
}