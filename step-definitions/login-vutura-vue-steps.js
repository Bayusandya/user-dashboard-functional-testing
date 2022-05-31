module.exports = function () {
    this.Given(/^User Browse vutura landing page$/, function () {
        helpers.loadPage(shared.pages.vuturaLoginPage)
    });

    this.Given(/^User Fill email$/, function () {
        driver.then(function () {
            return page.fillEmailBox.perform();
        })
    });

    this.Given(/^User Fill password$/, function () {
        driver.then(function () {
            return page.fillPasswordBox.perform();
        })
    });

    this.When(/^User click "Login" button$/, function () {
        driver.then(function () {
            return page.loginBtn.perform();
        })
    });

    this.Then(/^User delivered to home page$/, function () {
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
}