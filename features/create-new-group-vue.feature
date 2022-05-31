# .features/create-new-group-vue.feature

Feature: Create new group via broadcast page
    As a user, I want to be able to create new group

    @success
    Scenario:  User success to add new  group
        Given User do Login to add new group
        Given User click a Bot card button to view broadcast page and add new group 
        Given User click Broadcast button to view broadcast page to add new group 
        Given User click Add new group button to add new group
        Given User fill Group name box to add name the group
        Given User click a People button to choose people on the group
        Given User click Save group button to save group
        When User click ok group button to save group 
        Then User success to add new  group