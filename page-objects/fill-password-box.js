module.exports = {

    url: "https://app.vutura.io/signIn",

    elements: {
        searchInput: by.xpath("//input[@placeholder='Password']")
    },

    perform: function () {
        var selector = page.fillPasswordBox.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.id.password_indah)
    }
}