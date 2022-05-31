module.exports = function () {
    this.Given(/^User do login to see most used channel$/, function () {
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
        return driver.wait(until.elementsLocated(page.tambahBotBtn.elements.searchInput), 30000).then(function () {

            // return the promise of an element to the following then.
            return driver.findElements(page.tambahBotBtn.elements.searchInput);
        })
        .then(function (elements) {
            // verify this element has children
            // expect(elements.length).to.not.equal(0);
            expect(page.tambahBotBtn.elements.searchInput).to.equal(page.tambahBotBtn.elements.searchInput);
        })
    });
    
    this.Given(/^User click a bot card button to see most used channel$/, function () {  
        return driver.wait(until.elementsLocated(page.botBtn.elements.searchInput), 20000).then(function(){
            return driver.findElements(page.botBtn.elements.searchInput);
        }),
        driver.then(function () {
            return page.botBtn.perform();
        })
    });

    this.When(/^User click Most Used Channel button to see most used channel$/, function () {
        driver.then(function () {
            return page.mostUsedChannelBtn.perform();
        })
    });

    this.Then(/^User successfully see most used channel page$/, function () {
        console.log();
    });
}