module.exports = function(){ 
    this.Given(/^User login to search QnA list.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        helpers.loadPage(shared.pages.vuturaLoginPage)
        driver.then(function () {
            return page.fillEmailBox.perform();
        })
        driver.then(function () {
            return page.fillPasswordBox.perform();
        })
        driver.then(function () {
            return page.loginBtn.perform();
        })
    });

    this.Given(/^User click a bot card button to search QnA list.$/, function () {
        return driver.wait(until.elementsLocated(page.botButtonGupta.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.botButtonGupta.elements.searchInput); 
        }),
        driver.then(function(){
            return page.botButtonGupta.perform();
        })
    });

    this.Given(/^User click QnA button on the menu to search QnA list.$/, function () {
      // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.qnaButton.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.qnaButton.elements.searchInput); 
        }),

        driver.then(function(){
            return page.qnaButton.perform();
        })
    });

    this.When(/^User fill text-field to search QnA list.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.fillQnaSearchBox.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.fillQnaSearchBox.elements.searchInput); 
        }),

        driver.then(function(){
            return page.fillQnaSearchBox.perform();
        })
    });

    this.Then(/^User success to search QnA list.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        console.log("ok!")
    });
}