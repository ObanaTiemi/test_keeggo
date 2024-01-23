Feature: Search for Products
    Scenario: Search a existing product
        Given I am logged in at automationexercise.com
        When I search for a top
        Then the search should return it

    Scenario: Search a non-existing product
        Given I am logged in at automationexercise.com
        When I search for pants
        Then the search should return nothing