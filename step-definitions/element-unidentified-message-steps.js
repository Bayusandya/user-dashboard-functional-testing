module.exports = function () {
    this.Given(/^User do login to see unidentified message$/, function () {
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

    this.Given(/^User click a bot card button to see unidentified message$/, function () {
        return driver.wait(until.elementsLocated(page.botBtn.elements.searchInput), 20000).then(function(){
            return driver.findElements(page.botBtn.elements.searchInput);
        }),
        driver.then(function () {
            return page.botBtn.perform();
        })
    });

    this.When(/^User click Unidentified Message button to see unidentified message$/, function () {
        return driver.wait(until.elementsLocated(page.unidentifiedMsgBtn.elements.searchInput), 20000).then(function(){
            return driver.findElements(page.unidentifiedMsgBtn.elements.searchInput);
        }),
        driver.then(function () {
            return page.unidentifiedMsgBtn.perform();
        })
    });

    this.Then(/^User successfully see unidentified message page$/, function () {
        return driver.wait(until.elementsLocated(page.unidentifiedMsgPage.elements.searchInput), 10000).then(function () {
            return driver.findElements(page.unidentifiedMsgPage.elements.searchInput);
        }),
        driver.then(function (elements) {
            expect(page.unidentifiedMsgPage.elements.searchInput).to.equal(page.unidentifiedMsgPage.elements.searchInput);
        });

    });
}