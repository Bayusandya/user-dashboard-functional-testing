module.exports = function(){
    this.Given(/^User login to delete QnA list\.$/, function () {
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

    this.Given(/^User click a bot card button to delete QnA list\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.botButtonGupta.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.botButtonGupta.elements.searchInput); 
        }),

        driver.then(function(){
            return page.botButtonGupta.perform();
        })
    });

    this.Given(/^User click QnA button on the menu to delete QnA list\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.qnaButton.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.qnaButton.elements.searchInput); 
        }),

        driver.then(function(){
            return page.qnaButton.perform();
        })
    });

    this.Given(/^User click delete icon on the QnA list to delete QnA list\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        helpers.loadPage(shared.pages.qnaPage)
        return driver.wait(until.elementsLocated(page.deleteIcon.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.deleteIcon.elements.searchInput); 
        }),

        driver.then(function(){
            return page.deleteIcon.perform();
        })
    });

    this.When(/^User click delete button on notification to delete QnA list\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.deleteButton.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.deleteButton.elements.searchInput); 
        }),

        driver.then(function(){
            return page.deleteButton.perform();
        })
    });

    this.Then(/^User success to delete QnA list\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        console.log('ok');
    });
}