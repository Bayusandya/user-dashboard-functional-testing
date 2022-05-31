# .features/create-new-element-carousel-vue.feature

Feature: Create new  element carousel
    As a user i want to be able to create new element with carousel component

    @success
    Scenario:   User success to create new element carousel
        Given User do Login to create new element carousel
        Given User click a Bot card button to create new element carousel
        Given User click Path button to create new element carousel 
        Given User click Greeting button to create new element carousel
        Given User click Carousel button to create new element carousel
        Given User fill Img url box to add image on carousel element 
        Given User fill Title box to add title on carousel element
        Given User fill Description box to add description on carousel element
        Given User click Add button to add button on carousel element
        Given User fill Title button box to add tittle button on carousel element
        Given User fill Web address box to add address on carousel element
        Given User click Done button to save carousel button
        Given User click Save path button to save path with carousel element
        When User click Ok save path button to save path with carousel element 
        Then  User success to create new element carousel