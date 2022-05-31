# ./features/delete-qna-list-vue.feature

Feature: Delete QnA List
    As a user I want to be able to delete QnA list

    @success
    Scenario: User success to delete QnA on the list.
        Given User login to delete QnA list.
        And User click a bot card button to delete QnA list.
        And User click QnA button on the menu to delete QnA list.
        And User click delete icon on the QnA list to delete QnA list.
        When User click delete button on notification to delete QnA list.
        Then User success to delete QnA list.
