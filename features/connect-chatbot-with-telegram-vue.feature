# ./features/connect-chatbot-with-telegram-vue

Feature: connect chatbot with Telegram
    As a user I want to be able to connect chatbot with Telegram

    @success
    Scenario: User success to connect chatbot with Telegram.
        Given User login to connect chatbot with Telegram.
        And User click a bot card button to connect chatbot with Telegram.
        And User click connect button to connect chatbot with Telegram.
        And User click setup button in Telegram section to connect chatbot with Telegram.
        And User fill token API form on dialog box to connect chatbot with Telegram.
        When User click create button on dialog box to connect chatbot with Telegram.
        Then User success to connect chatbot with Telegram.
