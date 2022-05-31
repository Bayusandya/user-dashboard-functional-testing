module.exports = {

    url: "https://app.vutura.io/broadcast",

    elements: {
        searchInput: by.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]")
    },

    perform: function () {
        var selector = page.fillGroupNameBox.elements.searchInput;
        return driver.findElement(selector).sendKeys(shared.dataBroadcast.groupname);
    }
}