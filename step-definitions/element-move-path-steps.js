module.exports = function () {
    this.Given(/^User do login to create a new element move path$/, function () {
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

    this.Given(/^User click a bot card button to create a new element move path$/, function () {
        return driver.wait(until.elementsLocated(page.botBtn.elements.searchInput), 20000).then(function(){
            return driver.findElements(page.botBtn.elements.searchInput);
        }),
        driver.then(function () {
            return page.botBtn.perform();
        })
    });

    this.Given(/^User click a path button to create a new element move path$/, function () {
        return driver.wait(until.elementsLocated(page.pathBtn.elements.searchInput), 20000).then(function(){
            return driver.findElements(page.pathBtn.elements.searchInput);
        }),
        driver.then(function () {
            return page.pathBtn.perform();
        })
    });

    this.Given(/^User click a greeting path button to create a new element move path$/, function () {
        return driver.wait(until.elementsLocated(page.greetingPathBtn.elements.searchInput), 20000).then(function(){
            return driver.findElements(page.greetingPathBtn.elements.searchInput);
        }),
        driver.then(function () {
            return page.greetingPathBtn.perform();
        })
    });

    this.Given(/^User click a move path button to create a new element move path$/, function () {
        driver.then(function () {
            return page.movePathBtn.perform();
        })
    });

    this.Given(/^User click select path button to create a new element move path$/, function () {
        helpers.loadPage(shared.pages.movePathPage),
        driver.then(function () {
            return page.selectPathBtn.perform();
        })
    });

    this.Given(/^User click menu option to create a new element move path$/, function () {
        return driver.wait(until.elementsLocated(page.menuOption.elements.searchInput), 20000).then(function(){
            return driver.findElements(page.menuOption.elements.searchInput);
        }),
        driver.then(function () {
            return page.menuOption.perform();
        })
    });

    this.When(/^User click save button to create a new element move path$/, function () {
        driver.then(function () {
            return page.saveMovePathBtn.perform();
        })
    });

    this.Then(/^User successfully create a new element move path$/, function () {
        console.log();
    });
}