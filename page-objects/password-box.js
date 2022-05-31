module.exports = {

    url: "https://app.vutura.io/signIn",

    elements: {
        searchInput: by.xpath("//input[@placeholder='Password']")
    },

    perform: function () {
        var selector = page.passwordBox.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.id.pass)
    }
}