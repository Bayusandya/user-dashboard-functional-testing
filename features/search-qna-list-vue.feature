# ./features/search-qna-list-vue.feature

Feature: Search QnA List
    As a user I want to be able to search QnA list

    @success
    Scenario: User success to search QnA on the list.
        Given User login to search QnA list.
        And User click a bot card button to search QnA list.
        And User click QnA button on the menu to search QnA list.
        When User fill text-field to search QnA list.
        Then User success to search QnA list.
