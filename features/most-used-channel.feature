# ./features/most-used-channel.feature

Feature: element most used channel in statistic page on Vutura Website
    As a user, I want to be able to see most used channel

    @success
    Scenario: User successfully see most used channel page
        Given User do login to see most used channel
        And User click a bot card button to see most used channel
        When User click Most Used Channel button to see most used channel
        Then User successfully see most used channel page
 
