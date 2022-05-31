module.exports = function () {
    //Cari cara memanggil function (login)
    this.Given(/^do login to View all total conversation Vuejs$/, function () {
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

    this.Given(/^Click a bot card button to View all total conversation VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.botcardVueButton.elements.searchInput), 30000).then(function(){
            return driver.findElements(page.botcardVueButton.elements.searchInput);
        }),
        
        driver.then(function () {
             return page.botcardVueButton.perform();
         })

      });

      this.When(/^Click Total conversation button to View all total conversation VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.TotalConversationvueButton.elements.searchInput), 30000).then(function(){
            return driver.findElements(page.TotalConversationvueButton.elements.searchInput);
        }),
        
        driver.then(function () {
             return page.TotalConversationvueButton.perform();
         })

      });

    //   this.Given(/^Click Row Button to view all list qna VueJs$/, function () {
    //         return driver.wait(until.elementsLocated(page.RowvueButton.elements.searchInput), 30000).then(function(){
    //             return driver.findElements(page.RowvueButton.elements.searchInput);
    //         }),
            
    //         driver.then(function () {
    //              return page.RowvueButton.perform();
    //          })
    
    //       });


        //   this.Given(/^Click All Button to view all list qna VueJs$/, function () {
        //     driver.then(function () {
        //     // helpers.loadPage(shared.pages.savePage)
        //         return page.AllvueButton.perform();
        //     })
    
        //  });

        //   this.When(/^Click All Button to view all list qna VueJs$/, function () {
        //     return driver.wait(until.elementsLocated(page.AllvueButton.elements.searchInput), 30000).then(function(){
        //         return driver.findElements(page.AllvueButton.elements.searchInput);
        //     }),
            
        //     driver.then(function () {
        //          return page.AllvueButton.perform();
        //      })
    
        //   });

          this.Then(/^User success to View all total conversation VueJs$/, function () {
                console.log("clicked")
        });

    }