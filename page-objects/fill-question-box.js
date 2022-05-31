module.exports = {
    url: "https://app.vutura.io/path",

    elements: {
        searchInput: by.xpath("//input[not(contains(@disabled, 'disabled')) and contains(@placeholder, 'Enter your chatbot response here..')]")
        // searchInput: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/main[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]")
    },

    perform: function () {
        var selector = page.fillQuestionBox.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.question.question1)
    }
}