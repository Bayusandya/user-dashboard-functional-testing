module.exports = {

    url: "https://app.vutura.io/integration",

    elements: {
        searchInput: by.xpath("//div[@class='row']//div[1]//div[1]//div[3]//button[1]")

    },

    perform: function () {
        var selector = page.setupLineBtn.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}