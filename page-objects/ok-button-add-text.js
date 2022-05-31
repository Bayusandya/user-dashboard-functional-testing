module.exports = {
    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//button[contains(@class,'swal2-confirm swal2-styled')]")
    },

    perform: function () {
        var selector = page.okButtonAddText.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}