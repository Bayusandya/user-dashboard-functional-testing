module.exports = {
    url : "https://app.vutura.io/broadcast",

    elements : {
        searchInput : by.xpath("//button[@class='swal2-confirm swal2-styled']")
    },

    perform: function () {
        var selector = page.okGroupButton.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}