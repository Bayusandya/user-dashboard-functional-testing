# ./features/login-vutura-vue.feature

Feature: Login on Vutura Website
    As a user, I want to do login on vutura Website

    @success
    Scenario: User success login
        Given User Browse vutura landing page
        And User Fill email
        And User Fill password
        When User click "Login" button
        Then User delivered to home page