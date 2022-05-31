# ./features/statistic-page.feature

Feature: Statistic page on Vutura Website
    As a user, I want to be able to see statistic page

    @success
    Scenario: User successfully see statistic page
        Given User do login to see statistic page
        When User click a bot card button to see statistic page
        Then User successfully see statistic page
