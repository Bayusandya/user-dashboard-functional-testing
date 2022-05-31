module.exports = function () {
    this.Given(/^do login to add bot to connect qiscus Vuejs$/, function () {
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

    this.Given(/^Click a bot card button toadd bot to connect qiscus Vuejs$/, function () {
        return driver.wait(until.elementsLocated(page.botcardVueButton.elements.searchInput), 30000).then(function () {
                return driver.findElements(page.botcardVueButton.elements.searchInput);
            }),

            driver.then(function () {
                return page.botcardVueButton.perform();
            })
    });

    this.Given(/^Click Connect button to add bot to connect qiscus VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.connectBtn.elements.searchInput), 30000).then(function () {
                return driver.findElements(page.connectBtn.elements.searchInput);
            }),

            driver.then(function () {
                return page.connectBtn.perform();
            })
    });

    this.Given(/^Click Setup Qiscus Button to add bot to connect qiscus VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.setupQiscusBtn.elements.searchInput), 30000).then(function () {
                return driver.findElements(page.setupQiscusBtn.elements.searchInput);
            }),

            driver.then(function () {
                return page.setupQiscusBtn.perform();
            })
    });


    this.Given(/^fill Application ID Qiscus Button to add bot to connect qiscus VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.applicationidQiscusBtn.elements.searchInput), 30000).then(function () {
                return driver.findElements(page.applicationidQiscusBtn.elements.searchInput);
            }),

            driver.then(function () {
                return page.applicationidQiscusBtn.perform();
            })
    });

    this.Given(/^Click Next Application ID Button to add bot to connect qiscus VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.nextApplicationidBtn.elements.searchInput), 30000).then(function () {
                return driver.findElements(page.nextApplicationidBtn.elements.searchInput);
            }),

            driver.then(function () {
                return page.nextApplicationidBtn.perform();
            })
    });

    this.Given(/^fill Secret Key Qiscus Button to add bot to connect qiscus VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.secretkeyQiscusFill.elements.searchInput), 30000).then(function () {
                return driver.findElements(page.secretkeyQiscusFill.elements.searchInput);
            }),

            driver.then(function () {
                return page.secretkeyQiscusFill.perform();
            })
    });

    this.Given(/^Click Next Secret Key Qiscus Button to add bot to connect qiscus VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.nextSecretkeyQiscusBtn.elements.searchInput), 30000).then(function () {
                return driver.findElements(page.nextSecretkeyQiscusBtn.elements.searchInput);
            }),

            driver.then(function () {
                return page.nextSecretkeyQiscusBtn.perform();
            })
    });

    this.Given(/^fill WebHook URL Qiscus Button to add bot to connect qiscus VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.webhookUrlQiscusFill.elements.searchInput), 30000).then(function () {
                return driver.findElements(page.webhookUrlQiscusFill.elements.searchInput);
            }),

            driver.then(function () {
                return page.webhookUrlQiscusFill.perform();
            })
    });

    this.When(/^Click Create Qiscus Connect Button to add bot to connect qiscus VueJs$/, function () {
        return driver.wait(until.elementsLocated(page.createQiscusConnectBtn.elements.searchInput), 30000).then(function () {
                return driver.findElements(page.createQiscusConnectBtn.elements.searchInput);
            }),

            driver.then(function () {
                return page.createQiscusConnectBtn.perform();
            })
    });

    this.Then(/^User success to add bot to connect qiscus VueJs$/, function () {
        // console.log("clicked")
    });
}