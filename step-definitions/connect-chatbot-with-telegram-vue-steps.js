module.exports = function(){
    this.Given(/^User login to connect chatbot with Telegram\.$/, function () {
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

    this.Given(/^User click a bot card button to connect chatbot with Telegram\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.botButtonGupta.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.botButtonGupta.elements.searchInput); 
        }),
        driver.then(function(){
            return page.botButtonGupta.perform();
        })
    });
    
    this.Given(/^User click connect button to connect chatbot with Telegram\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.connectButton.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.connectButton.elements.searchInput); 
        }),

        driver.then(function(){
            return page.connectButton.perform();
        })
    });
    
    this.Given(/^User click setup button in Telegram section to connect chatbot with Telegram\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.setupButtonTelegram.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.setupButtonTelegram.elements.searchInput); 
        }),

        driver.then(function(){
            return page.setupButtonTelegram.perform();
        })
    });
    
    this.Given(/^User fill token API form on dialog box to connect chatbot with Telegram\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.fillTokenAPI.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.fillTokenAPI.elements.searchInput); 
        }),

        driver.then(function(){
            return page.fillTokenAPI.perform();
        })
    });
    
    this.When(/^User click create button on dialog box to connect chatbot with Telegram\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.createButtonTelegramAPI.elements.searchInput), 3000).then(function(){
            return driver.findElements(page.createButtonTelegramAPI.elements.searchInput); 
        }),

        driver.then(function(){
            return page.createButtonTelegramAPI.perform();
        })
    });
    
    this.Then(/^User success to connect chatbot with Telegram\.$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return driver.wait(until.elementsLocated(page.statusConnectButton.elements.searchInput), 30000).then(function () {
            // return the promise of an element to the following then.
            return driver.findElements(page.statusConnectButton.elements.searchInput);
        })
        .then(function (elements) {
            // verify this element has children
            // expect(elements.length).to.not.equal(0);
            expect(page.statusConnectButton.elements.searchInput).to.equal(page.statusConnectButton.elements.searchInput);
        })
    });
}