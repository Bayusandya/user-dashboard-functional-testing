module.exports = {

    url: "https://app.vutura.io/integration",

    elements: {
        searchInput: by.xpath("//div[@class='v-dialog__content v-dialog__content--active']//div[@class='v-stepper v-stepper--alt-labels theme--light']//div[1]//div[1]//div[2]//div[1]//button[1]")

    },

    perform: function () {
        var selector = page.nextSecretLineBtn.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}