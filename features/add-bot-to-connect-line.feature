# ./features/add-bot-to-connect-line.feature

Feature: add-bot-connect-line
    As a user, I want to do add-bot-connect-line

    @success
    Scenario: add-bot-connect-line
        Given do login to add bot to connect line Vuejs
        And   Click a bot card button to add bot to connect line Vuejs
        And   Click Connect button to add bot connect line VueJs
        And   Click Setup Line Button to add bot to connect line VueJs
        And   fill Channel Secret Line Button to add bot to connect line VueJs
        And   Click Next Secret Line Button to add bot to connect line VueJs
        And   fill Channel Token Line Button to add bot to connect line VueJs
        And   Click Next Token Line Button to add bot to connect line VueJs
        And   fill WebHook URL Line Button to add bot to connect line VueJs
        When  Click Create Line Connect Button to add bot to connect line VueJs 
        Then  User success to add bot to connect line VueJs