module.exports = function () {
    this.Given(/^User do login to see statistic page$/, function () {
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

    this.When(/^User click a bot card button to see statistic page$/, function () {
        return driver.wait(until.elementsLocated(page.botBtn.elements.searchInput), 20000).then(function(){
            return driver.findElements(page.botBtn.elements.searchInput);
        }),
        driver.then(function () {
            return page.botBtn.perform();
        })
    });

    this.Then(/^User successfully see statistic page$/, function () {
        return driver.wait(until.elementsLocated(page.statisticPage.elements.searchInput), 10000).then(function () {
            return driver.findElements(page.statisticPage.elements.searchInput);
        }),
        driver.then(function (elements) {
            expect(page.statisticPage.elements.searchInput).to.equal(page.statisticPage.elements.searchInput);
        });
    });
}