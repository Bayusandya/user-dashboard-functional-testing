module.exports = function () {
    this.Given(/^User do login to create a new element sign out$/, function () {
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

    this.Given(/^User click a bot card button to create a new element sign out$/, function () {
        return driver.wait(until.elementsLocated(page.botBtn.elements.searchInput), 20000).then(function(){
            return driver.findElements(page.botBtn.elements.searchInput);
        }),
        driver.then(function () {
            return page.botBtn.perform();
        })
    });

    this.Given(/^User click a path button to create a new element sign out$/, function () {
        driver.then(function () {
            return page.pathBtn.perform();
        })
    });

    this.Given(/^User click a bye path button to create a new element sign out$/, function () {
        return driver.wait(until.elementsLocated(page.byeBtn.elements.searchInput), 20000).then(function(){
            return driver.findElements(page.byeBtn.elements.searchInput);
        }),
        driver.then(function () {
            return page.byeBtn.perform();
        })
    });

    this.Given(/^User click a sign out button to create a new element sign out$/, function () {
        driver.then(function () {
            return page.signoutBtn.perform();
        })
    });

    this.Given(/^User fill Terimakasih sudah menggunakan produk kami\. Semoga anda suka dan puas menggunakan produknya\. at say goodbye to your audience field to create a new element sign out$/, function () {
        return driver.wait(until.elementsLocated(page.fillGdbye.elements.searchInput), 20000).then(function(){
            return driver.findElements(page.fillGdbye.elements.searchInput);
        }),
        driver.then(function () {
            return page.fillGdbye.perform();
        })
    });

    this.Given(/^User click save button to create a new element sign out$/, function () {
        driver.then(function () {
            return page.saveGdbyeBtn.perform();
        })
    });

    this.When(/^User click ok button to create a new element sign out$/, function () {
        driver.then(function () {
            return page.okGyeBtndb.perform();
        })
    });

    this.Then(/^User successfully create a new element sign out$/, function () {
        
    });
}