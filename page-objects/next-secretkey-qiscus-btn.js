module.exports = {

    url: "https://app.vutura.io/integration",

    elements: {
        searchInput: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/button[1]/span[1]")

    },

    perform: function () {
        var selector = page.nextSecretkeyQiscusBtn.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}