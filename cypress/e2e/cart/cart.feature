Feature: Cart
    Scenario: Add a product to cart
        Given I search for a top
        When I add to cart
        Then I should see the item in the cart

    Scenario: Remove a product from cart
        Given I have products in my cart
        When I remove it
        Then I shoud see the cart empty