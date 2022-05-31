# ./features/add-new-path-image.feature

Feature: add-new-path
    As a user, I want to do add new path 

    @success
    Scenario: User success add new path
        Given Do login to Add new path vue
        And   Click a bot card button to Add new path vue
        And   Click Path vue button 
        And   Click add new Path vue button
        And   fill Path name vue 
        And   Click Save button new path vue
        When  Click ok button new path vue 
        Then  User success to add a new Path vue