module.exports = {

    url:"https://app.vutura.io/qna",

    elements: {
        searchInput: by.xpath("//div[@class='v-input v-input--hide-details v-input--is-label-active v-input--is-dirty theme--light v-text-field v-text-field--is-booted v-select']//div[@class='v-input__append-inner']")
    },

    perform: function () {
        var selector = page.RowvueButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}