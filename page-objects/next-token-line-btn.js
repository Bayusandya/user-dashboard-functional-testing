module.exports = {

    url: "https://app.vutura.io/integration",

    elements: {
        searchInput: by.xpath("//body/div[@id='__nuxt']/div[@id='__layout']/div[@id='inspire']/div[@class='v-dialog__content v-dialog__content--active']/div[@class='v-dialog v-dialog--active']/div[@class='v-card v-sheet theme--light']/div[@class='v-card__text']/div/div[@class='v-stepper v-stepper--is-booted v-stepper--alt-labels theme--light']/div[@class='v-stepper__items']/div[2]/div[1]/div[2]/div[1]/button[1]/span[1]")

    },

    perform: function () {
        var selector = page.nextTokenLineBtn.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}