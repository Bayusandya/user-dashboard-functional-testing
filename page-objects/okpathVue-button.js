module.exports = {

    url: "https://app.vutura.io/path",

    elements: {
        //searchInput: by.xpath("/html[1]/body[1]/div[7]/div[1]/div[4]/div[1]/button[1]")
        searchInput: by.xpath("//button[@class='swal2-confirm swal2-styled']")
    },

    perform: function () {
        var selector = page.okpathVueButton.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}