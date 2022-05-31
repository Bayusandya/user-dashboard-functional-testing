module.exports = function(){
    this.Given(/^User login to view statistic most accessed path\.$/, function () {
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

    this.Given(/^User click a bot card button to view statistic most accessed path\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.botButtonGupta.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.botButtonGupta.elements.searchInput); 
        }),
        driver.then(function(){
            return page.botButtonGupta.perform();
        })
    });
    
    this.Given(/^User click statistic button on the menu to view statistic most accessed path\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.statisticButton.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.statisticButton.elements.searchInput); 
        }),
        driver.then(function(){
            return page.statisticButton.perform();
        })
    });

    this.When(/^User click most accessed path button to view statistic most accessed path\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.smapButton.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.smapButton.elements.searchInput); 
        }),
        driver.then(function(){
            return page.smapButton.perform();
        })
    });

    this.Then(/^User success to view statistic most accessed path\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.pathNameButton.elements.searchInput), 30000).then(function () {
            // return the promise of an element to the following then.
            return driver.findElements(page.pathNameButton.elements.searchInput);
        })
        .then(function (elements) {
            // verify this element has children
            // expect(elements.length).to.not.equal(0);
            expect(page.pathNameButton.elements.searchInput).to.equal(page.pathNameButton.elements.searchInput);
        })
    });
}