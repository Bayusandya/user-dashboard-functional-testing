module.exports = {

    url: "https://app.vutura.io/signIn",

    elements: {
        searchInput: by.xpath("//input[@placeholder='Email']")
    },

    perform: function () {
        var selector = page.fillEmailBox.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.id.email_indah)
    }
}