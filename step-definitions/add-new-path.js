module.exports = function () {
    //Cari cara memanggil function (login)
    this.Given(/^Do login to Add new path vue$/, function () {
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

    //   this.Given(/^Click a bot card button to Add new path vue$/,function () {
    //     helpers.loadPage(shared.pages.botPageVue)
    //     driver.then(function () {
    //         return page.botcardVueButton.perform();
    //     })
    //   });

      this.Given(/^Click a bot card button to Add new path vue$/, function () {
        return driver.wait(until.elementsLocated(page.botcardVueButton.elements.searchInput), 30000).then(function(){
            return driver.findElements(page.botcardVueButton.elements.searchInput);
        }),
        
        driver.then(function () {
             return page.botcardVueButton.perform();
         })

      });
      
    //   this.Given(/^Click Path vue button$/, function () {
    //     driver.then(function () {
    //     // helpers.loadPage(shared.pages.Page)
    //         return page.PathvueButton.perform();
    //     })

    //   });
      
      this.Given(/^Click Path vue button$/, function () {
        return driver.wait(until.elementsLocated(page.PathvueButton.elements.searchInput), 30000).then(function(){
            return driver.findElements(page.PathvueButton.elements.searchInput);
        }),
        
        driver.then(function () {
             return page.PathvueButton.perform();
         })

      });


      this.Given(/^Click add new Path vue button$/, function () {
        return driver.wait(until.elementsLocated(page.addNewPathvueButton.elements.searchInput), 30000).then(function(){
            return driver.findElements(page.addNewPathvueButton.elements.searchInput);
        }),
        
        driver.then(function () {
             return page.addNewPathvueButton.perform();
         })

      });

      this.Given(/^fill Path name vue$/, function () {
        return driver.wait(until.elementsLocated(page.fillpathnameVueButton.elements.searchInput), 30000).then(function(){
            return driver.findElements(page.fillpathnameVueButton.elements.searchInput);
        }),
        
        driver.then(function () {
             return page.fillpathnameVueButton.perform();
         })

      });
//       this.Given(/^Click add new Path vue button$/, function () {
//         driver.then(function () {
//         // helpers.loadPage(shared.pages.AddNewQnaPage)
//             return page.addNewPathVueButton.perform();
//         })

//      });

    //  this.Given(/^fill Path name vue$/, function () {
    //     driver.then(function () {
    //         return page.fillpathnameVueButton.perform();
    //     })
    //   });

    //   this.Given(/^Click Save button new path vue$/, function () {
    //     return driver.wait(until.elementsLocated(page.savenewpathvueButton.elements.searchInput), 30000).then(function(){
    //         return driver.findElements(page.savenewpathvueButton.elements.searchInput);
    //     }),
        
    //     driver.then(function () {
    //          return page.savenewpathvueButton.perform();
    //      })

    //   });

      
      this.Given(/^Click Save button new path vue$/, function () {
        driver.then(function () {
        // helpers.loadPage(shared.pages.savePage)
            return page.savenewpathvueButton.perform();
        })

     });

     this.Given(/^Click ok button new path vue$/, function () {
        return driver.wait(until.elementsLocated(page.okpathVueButton.elements.searchInput), 30000).then(function(){
            return driver.findElements(page.okpathVueButton.elements.searchInput);
        }),
        
        driver.then(function () {
             return page.okpathVueButton.perform();
         })

      });


    //  this.When(/^Click ok button new path vue$/, function () {
    //       driver.then(function () {
    //     //   helpers.loadPage(shared.pages.okPage)
    //           return page.okpathVueButton.perform();
    //       })
    //   });

      this.Then(/^User success to add a new Path vue$/, function () {
    });

} 