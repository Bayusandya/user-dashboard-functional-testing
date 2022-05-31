module.exports = {
    url: "https://app.vutura.io/path",

    elements: {
        // searchInput: by.xpath("//div[@class='v-dialog__content v-dialog__content--active']//div[@class='col']//div[2]//button[1]")
        searchInput: by.xpath("//div[contains(@class,'container d-flex flex-row align-baseline pa-0')]//div[1]//button[1]")
    },

    perform: function () {
        var selector = page.textButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}