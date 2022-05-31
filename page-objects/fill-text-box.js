module.exports = {

    url: "https://app.vutura.io/qna",

    elements: {
        // searchInput: by.xpath("//label[contains(text(),'insert your response')]")
        searchInput: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/textarea[1]")
    },

    perform: function () {
        var selector = page.fillTextBox.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.qnaData.text);
    }
}