module.exports = {

    url: "https://app.vutura.io/signIn",

    elements: {
        searchInput: by.xpath("//button[@class='button is-primary is-medium is-fullwidth']")
    },

    perform: function () {
        var selector = page.loginBtn.elements.searchInput
        return driver.findElement(selector).click(selector)
    }
}