module.exports = {

    url: "https://dashboard-staging.vutura.io/qna",

    elements: {
        searchInput: by.xpath("//body//a[2]")
    },

    perform: function () {
        var selector = page.qnaButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }

};