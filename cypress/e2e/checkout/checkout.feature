Feature: Checkout Page
    Scenario: Check produts at Checkout
        Given I have products in cart
        When I go to checkout
        Then I should see the itens on checkout