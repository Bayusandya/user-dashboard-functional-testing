module.exports = {

    url: "https://app.vutura.io/integration",

    elements: {
        searchInput: by.xpath("//div[3]//div[1]//div[2]//div[1]//button[2]")

    },

    perform: function () {
        var selector = page.createQiscusConnectBtn.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}