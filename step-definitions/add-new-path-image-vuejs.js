module.exports = function () {
    //Cari cara memanggil function (login)
    this.Given(/^Do login to Add path use image vuejs$/, function () {
        helpers.loadPage(shared.pages.vuturaLoginPageVue)

        driver.then(function () {
            return page.emailBox.perform();
        })
    
        driver.then(function () {
            return page.passwordBox.perform();
        })
        
        driver.then(function () {
            return page.loginVueButton.perform();
        })
    });

    this.Given(/^Click a bot card button to Add path use image vuejs$/, function () {
        return driver.wait(until.elementsLocated(page.botcardVueButton.elements.searchInput), 30000).then(function(){
            return driver.findElements(page.botcardVueButton.elements.searchInput);
        }),
        
        driver.then(function () {
             return page.botcardVueButton.perform();
         })

      });

      this.Given(/^Click Path button vuejs$/, function () {
        return driver.wait(until.elementsLocated(page.PathvueButton.elements.searchInput), 30000).then(function(){
            return driver.findElements(page.PathvueButton.elements.searchInput);
        }),
        
        driver.then(function () {
             return page.PathvueButton.perform();
         })

      });

      this.Given(/^Click Greeting button vuejs$/, function () {
            return driver.wait(until.elementsLocated(page.greetingpathvueButton.elements.searchInput), 30000).then(function(){
                return driver.findElements(page.greetingpathvueButton.elements.searchInput);
            }),
            
            driver.then(function () {
                 return page.greetingpathvueButton.perform();
             })
    
          });

    //   this.Given(/^Click Greeting button vuejs$/, function () {
    //     //helpers.loadPage(shared.pages.kujengpathPage)
    //     driver.then(function () {
    //         return page.greetingpathvueButton.perform();
    //     })
    //   });

       this.Given(/^Click Image element button vuejs$/, function () {
           driver.then(function () {
               return page.imageelementvuejsButton.perform();
           })

      });

      this.Given(/^Click choose file button vuejs$/, function () {
        return driver.wait(until.elementsLocated(page.choosefileButton.elements.searchInput), 30000).then(function(){
            return driver.findElements(page.choosefileButton.elements.searchInput);
        }),
        
        driver.then(function () {
             return page.choosefileButton.perform();
         })

      });

    //   this.When(/^Click Save button image vuejs$/, function () {
    //     //  driver.then(function () {
    //     //      return page.saveimageButton.perform();
    //     //  })
    // });

    this.Then(/^User success to add a new Path list vuejs$/, function () {
    });
}