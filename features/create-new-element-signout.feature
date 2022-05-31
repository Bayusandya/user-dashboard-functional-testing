# ./features/create-new-element-signout.feature

Feature: user - able to create a new element (Sign Out)
    As a user, I want to be able to create a new element (Sign Out)

    @success
    Scenario: User successfully create a new element sign out
        Given User do login to create a new element sign out
        And User click a bot card button to create a new element sign out
        And User click a path button to create a new element sign out
        And User click a bye path button to create a new element sign out
        And User click a sign out button to create a new element sign out
        And User fill Terimakasih sudah menggunakan produk kami. Semoga anda suka dan puas menggunakan produknya. at say goodbye to your audience field to create a new element sign out
        And User click save button to create a new element sign out
        When User click ok button to create a new element sign out
        Then User successfully create a new element sign out