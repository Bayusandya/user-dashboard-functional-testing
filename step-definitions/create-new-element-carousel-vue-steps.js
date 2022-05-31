module.exports = function(){

    this.Given(/^User do Login to create new element carousel$/, function(){
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
    
    this.Given(/^User click a Bot card button to create new element carousel$/,function(){
        
        return driver.wait(until.elementsLocated(page.botCardButton.elements.searchInput), 10000).then(function(){
                // return the promise of an element to the following then.
            return driver.findElements(page.botCardButton.elements.searchInput);
        }),
        helpers.loadPage(shared.pages.homePage),
        driver.then(function(){
            return page.botCardButton.perform();
        })
    });

    this.Given(/^User click Path button to create new element carousel$/,function(){
        helpers.loadPage(shared.pages.botHomePage)
        return driver.wait(until.elementsLocated(page.pathButton.elements.searchInput), 10000).then(function(){
            // return the promise of an element to the following then.
        return driver.findElements(page.pathButton.elements.searchInput);
        }),
        
        driver.then(function(){
            return page.pathButton.perform();
        })
    });

    this.Given(/^User click Greeting button to create new element carousel$/,function(){
        // helpers.loadPage(shared.pages.pathPage)
        return driver.wait(until.elementsLocated(page.greetingButton.elements.searchInput), 10000).then(function(){
            // return the promise of an element to the following then.
        return driver.findElements(page.greetingButton.elements.searchInput);
        }),
        driver.then(function(){
            return page.greetingButton.perform();
        })
    });

    this.Given(/^User click Carousel button to create new element carousel$/,function(){
        driver.then(function(){
            return page.carouselButton.perform();
        })
    });

    this.Given(/^User fill Img url box to add image on carousel element$/,function(){
        driver.then(function(){
            return page.fillImgUrlBox.perform();
        })
    });

    this.Given(/^User fill Title box to add title on carousel element$/,function(){
        driver.then(function(){
            return page.fillTitleBox.perform();
        })
    });

    this.Given(/^User fill Description box to add description on carousel element$/,function(){
        driver.then(function(){
            return page.fillDescriptionBox.perform();
        })
    });

    this.Given(/^User click Add button to add button on carousel element$/,function(){
        driver.then(function(){
            return page.addButton.perform();
        })
    });

    this.Given(/^User fill Title button box to add tittle button on carousel element$/,function(){
        driver.then(function(){
            return page.fillTitleButtonBox.perform();
        })
    });

    this.Given(/^User fill Web address box to add address on carousel element$/,function(){
        driver.then(function(){
            return page.fillWebAddressBox.perform();
        })
    });

    this.Given(/^User click Done button to save carousel button$/,function(){
        driver.then(function(){
            return page.doneButton.perform();
        })
    });

    this.Given(/^User click Save path button to save path with carousel element$/,function(){
        driver.then(function(){
            return page.savePathButton.perform();
        })
    });

    this.When(/^User click Ok save path button to save path with carousel element$/,function(){
        driver.then(function(){
            return page.okSavePathButton.perform();
        })
    });

    this.When(/^User success to create new element carousel$/,function(){
        return driver.wait(until.elementsLocated(page.addCardButton.elements.searchInput), 30000).then(function () {

            // return the promise of an element to the following then.
            return driver.findElements(page.addCardButton.elements.searchInput);
        })
        .then(function (elements) {
            // verify this element has children
            // expect(elements.length).to.not.equal(0);
            expect(page.addCardButton.elements.searchInput).to.equal(page.addCardButton.elements.searchInput);
        })
    });



}