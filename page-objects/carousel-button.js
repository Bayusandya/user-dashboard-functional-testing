module.exports = {
    url :"https://app.vutura.io/path",

    elements : {
        searchInput : by.xpath("//div[contains(@class,'v-card__actions grey lighten-4 mt-auto')]//div[3]//button[1]")
    },

    perform: function () {
        var selector = page.carouselButton.elements.searchInput
        return driver.findElement(selector).click(selector)
    }

}