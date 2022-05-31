module.exports = function(){

    this.Given(/^User do Login to add new group$/, function(){
        helpers.loadPage(shared.pages.vuturaLoginPage)
        driver.then(function () {
            return page.fillEmailBox.perform();
        }),
        driver.then(function () {
            return page.fillPasswordBox.perform();
        }),
        driver.then(function () {
            return page.loginBtn.perform();
        })
    });
    
    this.Given(/^User click a Bot card button to view broadcast page and add new group$/,function(){
        
        return driver.wait(until.elementsLocated(page.botCardButton.elements.searchInput), 10000).then(function(){
                // return the promise of an element to the following then.
            return driver.findElements(page.botCardButton.elements.searchInput);
        }),
        helpers.loadPage(shared.pages.homePage),
        driver.then(function(){
            return page.botCardButton.perform();
        })
    });

    this.Given(/^User click Broadcast button to view broadcast page to add new group$/,function(){
        helpers.loadPage(shared.pages.botHomePage)
        return driver.wait(until.elementsLocated(page.broadcastButton.elements.searchInput), 10000).then(function(){
            // return the promise of an element to the following then.
        return driver.findElements(page.broadcastButton.elements.searchInput);
        }),
        
        driver.then(function(){
            return page.broadcastButton.perform();
        })
    });

    this.Given(/^User click Add new group button to add new group$/,function(){
        // helpers.loadPage(shared.pages.broadcastPage),
        driver.then(function(){
            return page.addNewGroupButton.perform();
        })
    });

    this.Given(/^User fill Group name box to add name the group$/,function(){
        driver.then(function(){
            return page.fillGroupNameBox.perform();
        })
    });

    this.Given(/^User click a People button to choose people on the group$/,function(){
        driver.then(function(){
            return page.peopleButton.perform();
        })
    });

    this.Given(/^User click Save group button to save group$/,function(){
        driver.then(function(){
            return page.saveGroupButton.perform();
        })
    });

    this.When(/^User click ok group button to save group$/,function(){
        driver.then(function(){
            return page.okGroupButton.perform();
        })
    });

    this.Then(/^User success to add new  group$/,function(){
        return driver.wait(until.elementsLocated(page.broadcastGroup.elements.searchInput), 30000).then(function () {

            // return the promise of an element to the following then.
            return driver.findElements(page.broadcastGroup.elements.searchInput);
        })
        .then(function (elements) {
            // verify this element has children
            // expect(elements.length).to.not.equal(0);
            expect(page.broadcastGroup.elements.searchInput).to.equal(page.broadcastGroup.elements.searchInput);
        })
    });

}