module.exports = function () {
    //Cari cara memanggil function (login)
    this.Given(/^do login to view all list qna Vuejs$/, function () {
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

    this.Given(/^Click a bot card button to view all list qna VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.botcardVueButton.elements.searchInput), 30000).then(function(){
            return driver.findElements(page.botcardVueButton.elements.searchInput);
        }),
        
        driver.then(function () {
             return page.botcardVueButton.perform();
         })

      });

      this.Given(/^Click QNA button to view all list qna VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.QnavueButton.elements.searchInput), 30000).then(function(){
            return driver.findElements(page.QnavueButton.elements.searchInput);
        }),
        
        driver.then(function () {
             return page.QnavueButton.perform();
         })

      });

      this.Given(/^Click Row Button to view all list qna VueJs$/, function () {
            return driver.wait(until.elementsLocated(page.RowvueButton.elements.searchInput), 30000).then(function(){
                return driver.findElements(page.RowvueButton.elements.searchInput);
            }),
            
            driver.then(function () {
                 return page.RowvueButton.perform();
             })
    
          });


        //   this.Given(/^Click All Button to view all list qna VueJs$/, function () {
        //     driver.then(function () {
        //     // helpers.loadPage(shared.pages.savePage)
        //         return page.AllvueButton.perform();
        //     })
    
        //  });

          this.When(/^Click All Button to view all list qna VueJs$/, function () {
            return driver.wait(until.elementsLocated(page.AllvueButton.elements.searchInput), 30000).then(function(){
                return driver.findElements(page.AllvueButton.elements.searchInput);
            }),
            
            driver.then(function () {
                 return page.AllvueButton.perform();
             })
    
          });

          this.Then(/^User success to view a qna list vuejs$/, function () {
        });

    }