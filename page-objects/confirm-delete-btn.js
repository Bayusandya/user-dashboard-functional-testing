module.exports = {

    url: "https://app.vutura.io/path",

    elements: {
        // searchInput: by.xpath("//button[@class='swal2-confirm swal2-styled']")
        searchInput: by.xpath("/html[1]/body[1]/div[2]/div[1]/div[3]/button[1]")
        // searchInput: by.css("body.swal2-shown.swal2-height-auto:nth-child(4) div.swal2-container.swal2-center.swal2-fade.swal2-shown:nth-child(6) div.swal2-popup.swal2-modal.swal2-show div.swal2-actions > button.swal2-confirm.swal2-styled")
    },

    perform: function () {
        var selector = page.confirmDeleteBtn.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }
}