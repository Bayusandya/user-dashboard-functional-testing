# .features/create-qna-vue.feature

Feature: Create new dialog via qna page
    As a user, I want to be able to create Qna

    @success
    Scenario:  User success to create new dialog qna
        Given User do Login to create new qna
        Given User click a Bot card button to view qna page and create new qna
        Given User click Qna button to create new qna dialog
        Given User click Add dialog button to add new qna
        Given User fill Question box to add a new qna
        Given User click a Text button to add text component answear
        Given User fill Text box to add text component answear
        When User click Save qna button to add new qna 
        Then User success to create new dialog qna