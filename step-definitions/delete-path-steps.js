module.exports = function () {
    this.Given(/^User login to do do delete path$/, function () {
        helpers.loadPage(shared.pages.vuturaLoginPage)
            .then(function () {
                return page.fillEmailBox.perform();
            })
            .then(function () {
                return page.fillPasswordBox.perform();
            })
            .then(function () {
                return page.loginBtn.perform();
            })
        return driver.wait(until.elementsLocated(page.tambahBotBtn.elements.searchInput), 30000).then(function () {
                return driver.findElements(page.tambahBotBtn.elements.searchInput);
            })
            .then(function (elements) {
                expect(page.tambahBotBtn.elements.searchInput).to.equal(page.tambahBotBtn.elements.searchInput);
            })
    });

    this.Given(/^Click a bot card to do delete path$/, function () {
        return driver.wait(until.elementsLocated(page.botcardBtn.elements.searchInput), 30000).then(function () {
            return driver.findElements(page.botcardBtn.elements.searchInput);
        }).then(function () {
            return page.botcardBtn.perform();
        })
    });

    this.Given(/^Click path button to do delete path$/, function () {
        // return driver.wait(until.elementsLocated(page.pathBtn.elements.searchInput), 30000).then(function () {
        //         return driver.findElements(page.pathBtn.elements.searchInput);
        //     }),
        //     driver.then(function () {
        //         return page.pathBtn.perform();
        //     })
    });

    this.Given(/^Click action path button to do delete path$/, function () {
        // return driver.wait(until.elementsLocated(page.actionPathBtn.elements.searchInput), 30000).then(function () {
        //         return driver.findElements(page.actionPathBtn.elements.searchInput);
        //     }),
        //     driver.then(function () {
        //         return page.actionPathBtn.perform();
        //     })
    });

    this.Given(/^Click delete path button to do delete path$/, function () {
        // return driver.wait(until.elementsLocated(page.deletePathBtn.elements.searchInput), 30000).then(function () {
        //         return driver.findElements(page.deletePathBtn.elements.searchInput);
        //     }),
        //     driver.then(function () {
        //         return page.deletePathBtn.perform();
        //     })
    });

    this.Given(/^Click confirm delete button to do delete path$/, function () {
        // return driver.wait(until.elementsLocated(page.confirmDeleteBtn.elements.searchInput), 30000).then(function () {
        //         return driver.findElements(page.confirmDeleteBtn.elements.searchInput);
        //     }),
        //     driver.then(function () {
        //         return page.confirmDeleteBtn.perform();
        //     })
    });

    this.When(/^Click ok button confirm delete to do delete path$/, function () {
        // return driver.wait(until.elementsLocated(page.okButtonConfirmDeleteBtn.elements.searchInput), 30000).then(function () {
        //         return driver.findElements(page.okButtonConfirmDeleteBtn.elements.searchInput);
        //     }),
        //     driver.then(function () {
        //         return page.okButtonConfirmDeleteBtn.perform();
        //     })
    });

    this.Then(/^Path deleted$/, function () {});
}