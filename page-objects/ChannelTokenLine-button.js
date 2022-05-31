module.exports = {

    url: "https://app.vutura.io/integration",

    elements: {
        searchInput: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]"),
        // searchInput: by.xpath("//input[@id='input-191']"),
        // searchInput: by.css("#input-191")


    },

    perform: function () {
        var selector = page.ChannelTokenLineButton.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.isiLine.aksestoken);
    }
}