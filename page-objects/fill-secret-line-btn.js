module.exports = {

    url: "https://app.vutura.io/integration",

    elements: {
        // searchInput: by.xpath("//input[@id='input-184']"),
        searchInput: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]")

    },

    perform: function () {
        var selector = page.fillSecretLineBtn.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.isiLine.channelsecret);
    }
}