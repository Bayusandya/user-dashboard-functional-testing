# ./features/add-text-element-vue.feature

Feature: add text element
    As a user I want to be able to add text element

    @success
    Scenario: User success to add text element.
        Given User login to add text element.
        And User click a bot card button to add text element.
        And User click path button on the menu to add text element.
        And User click greeting button to add text element.
        And User click text button on add chatbot components menu to add text element.
        And User fill question box to add text element.
        And User click save button to add text element.
        When User click ok button to add text element.
        Then User success to add text element.
