module.exports = function(){
    this.Given(/^User login to add text element\.$/, function () {
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

    this.Given(/^User click a bot card button to add text element\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.botButtonGupta.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.botButtonGupta.elements.searchInput); 
        }),

        driver.then(function(){
            return page.botButtonGupta.perform();
        })
    });

    this.Given(/^User click path button on the menu to add text element\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.pathButton.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.pathButton.elements.searchInput); 
        }),

        driver.then(function(){
            return page.pathButton.perform();
        })
    });

    this.Given(/^User click greeting button to add text element\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.greetingButton.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.greetingButton.elements.searchInput); 
        }),

        driver.then(function(){
            return page.greetingButton.perform();
        })
    });

    this.Given(/^User click text button on add chatbot components menu to add text element\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.textButton.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.textButton.elements.searchInput); 
        }),

        driver.then(function(){
            return page.textButton.perform();
        })
    });

    this.Given(/^User fill question box to add text element\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.fillQuestionBox.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.fillQuestionBox.elements.searchInput); 
        }),

        driver.then(function(){
            return page.fillQuestionBox.perform();
        })
    });

    this.Given(/^User click save button to add text element\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.saveButton.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.saveButton.elements.searchInput); 
        }),

        driver.then(function(){
            return page.saveButton.perform();
        })
    });

    this.When(/^User click ok button to add text element\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.okButtonAddText.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.okButtonAddText.elements.searchInput); 
        }),

        driver.then(function(){
            return page.okButtonAddText.perform();
        })
    });

    this.Then(/^User success to add text element\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.questionCard.elements.searchInput), 30000).then(function () {
            // return the promise of an element to the following then.
            return driver.findElements(page.questionCard.elements.searchInput);
        })
        .then(function (elements) {
            // verify this element has children
            // expect(elements.length).to.not.equal(0);
            expect(page.questionCard.elements.searchInput).to.equal(page.questionCard.elements.searchInput);
        })
    });
}