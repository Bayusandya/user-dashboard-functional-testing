module.exports = {

    url: "https://dashboard-staging.vutura.io/path",

    elements: {
        searchInput: by.xpath("//body/div[@id='__nuxt']/div[@id='__layout']/div[@id='inspire']/div[contains(@class,'v-application--wrap')]/main[contains(@class,'v-content')]/div[contains(@class,'v-content__wrap')]/div[contains(@class,'container')]/div[contains(@class,'row')]/div[contains(@class,'pa-0 col col-9')]/div[contains(@class,'elevation-0 d-flex flex-column v-card v-card--outlined v-sheet v-sheet--tile theme--light')]/div[@id='pathContent']/div[contains(@class,'d-flex flex-column justify-start align-start pa-auto')]/div[contains(@class,'v-timeline v-timeline--dense theme--light')]/span/div[3]/div[1]/div[1]/div[2]/div[1]/div[1]")
    },

    perform: function () {
        var selector = page.questionCard.elements.searchInput;
        return driver.findElement(selector).click(selector);
    }

};