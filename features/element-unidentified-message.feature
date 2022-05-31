# ./features/element-unidentified-message.feature

Feature: element unidentified message in statistic page on Vutura Website
    As a user, I want to be able to see unidentified message

    @success
    Scenario: User successfully see unidentified message page
        Given User do login to see unidentified message
        And User click a bot card button to see unidentified message
        When User click Unidentified Message button to see unidentified message
        Then User successfully see unidentified message page
