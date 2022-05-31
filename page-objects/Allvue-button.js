module.exports = {

    url: "https://app.vutura.io/qna",

    elements: {
        searchInput: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]")
    },

    perform: function () {
        var selector = page.AllvueButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}