module.exports = function () {
    this.Given(/^do login to add bot to connect line Vuejs$/, function () {
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

    this.Given(/^Click a bot card button to add bot to connect line Vuejs$/, function () {
        return driver.wait(until.elementsLocated(page.botcardVueButton.elements.searchInput), 10000).then(function () {
                return driver.findElements(page.botcardVueButton.elements.searchInput);
            }),

            driver.then(function () {
                return page.botcardVueButton.perform();
            })
    });

    this.Given(/^Click Connect button to add bot connect line VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.connectBtn.elements.searchInput), 10000).then(function () {
                return driver.findElements(page.connectBtn.elements.searchInput);
            }),

            driver.then(function () {
                return page.connectBtn.perform();
            })
    });

    this.Given(/^Click Setup Line Button to add bot to connect line VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.setupLineBtn.elements.searchInput), 10000).then(function () {
                return driver.findElements(page.setupLineBtn.elements.searchInput);
            }),

            driver.then(function () {
                return page.setupLineBtn.perform();
            })
    });

    this.Given(/^fill Channel Secret Line Button to add bot to connect line VueJs$/, function () {
        // return driver.wait(until.elementsLocated(page.fillSecretLineBtn.elements.searchInput), 30000).then(function () {
        //         return driver.findElements(page.fillSecretLineBtn.elements.searchInput);
        //     }),

        //     driver.then(function () {
        //         return page.fillSecretLineBtn.perform();
        //     })
    });

    this.Given(/^Click Next Secret Line Button to add bot to connect line VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.nextSecretLineBtn.elements.searchInput), 30000).then(function () {
                return driver.findElements(page.nextSecretLineBtn.elements.searchInput);
            }),

            driver.then(function () {
                return page.nextSecretLineBtn.perform();
            })
    });

    this.Given(/^fill Channel Token Line Button to add bot to connect line VueJs$/, function () {
        // return driver.wait(until.elementsLocated(page.ChannelTokenLineButton.elements.searchInput), 30000).then(function () {
        //         return driver.findElements(page.ChannelTokenLineButton.elements.searchInput);
        //     }),

        //     driver.then(function () {
        //         return page.ChannelTokenLineButton.perform();
        //     })
    });

    this.Given(/^Click Next Token Line Button to add bot to connect line VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.nextTokenLineBtn.elements.searchInput), 30000).then(function () {
                return driver.findElements(page.nextTokenLineBtn.elements.searchInput);
            }),

            driver.then(function () {
                return page.nextTokenLineBtn.perform();
            })
    });

    this.Given(/^fill WebHook URL Line Button to add bot to connect line VueJs$/, function () {
        // return driver.wait(until.elementsLocated(page.WebHookURLLineButton.elements.searchInput), 30000).then(function () {
        //         return driver.findElements(page.WebHookURLLineButton.elements.searchInput);
        //     }),

        //     driver.then(function () {
        //         return page.WebHookURLLineButton.perform();
        //     })
    });

    this.When(/^Click Create Line Connect Button to add bot to connect line VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.createLineConnectBtn.elements.searchInput), 30000).then(function () {
                return driver.findElements(page.createLineConnectBtn.elements.searchInput);
            }),

            driver.then(function () {
                return page.createLineConnectBtn.perform();
            })
    });

    this.Then(/^User success to add bot to connect line VueJs$/, function () {
        // console.log("clicked")
    });
}