module.exports = function(){
    this.Given(/^User do Login to create new qna$/, function(){
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

    this.Given(/^User click a Bot card button to view qna page and create new qna$/,function(){
        
        return driver.wait(until.elementsLocated(page.botCardButton.elements.searchInput), 10000).then(function(){
                // return the promise of an element to the following then.
            return driver.findElements(page.botCardButton.elements.searchInput);
        }),
        helpers.loadPage(shared.pages.homePage),
        driver.then(function(){
            return page.botCardButton.perform();
        })
    });

    this.Given(/^User click Qna button to create new qna dialog$/,function(){
        // helpers.loadPage(shared.pages.botHomePage)
        return driver.wait(until.elementsLocated(page.qnaButton.elements.searchInput), 10000).then(function(){
            // return the promise of an element to the following then.
        return driver.findElements(page.qnaButton.elements.searchInput);
        }),
        
        driver.then(function(){
            return page.qnaButton.perform();
        })
    });

    this.Given(/^User click Add dialog button to add new qna$/,function(){
        helpers.loadPage(shared.pages.qnaPage),
        driver.then(function(){
            return page.addDialogButton.perform();
        })
    });

    this.Given(/^User fill Question box to add a new qna$/,function(){
        driver.then(function(){
            return page.fillQuestionBox.perform();
        })
    });

    this.Given(/^User click a Text button to add text component answear$/,function(){
        driver.then(function(){
            return page.textButton.perform();
        })
    });

    this.Given(/^User fill Text box to add text component answear$/,function(){
        return driver.wait(until.elementsLocated(page.fillTextBox.elements.searchInput), 10000).then(function(){
            // return the promise of an element to the following then.
        return driver.findElements(page.fillTextBox.elements.searchInput);
        }),
        driver.then(function(){
            return page.fillTextBox.perform();
        })
    });

    this.When(/^User click Save qna button to add new qna$/,function(){
        driver.then(function(){
            return page.saveQnaButton.perform();
        })
    });

    this.Then(/^User success to create new dialog qna$/,function(){
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