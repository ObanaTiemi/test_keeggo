Feature: PokeAPI
    Scenario: Get a Pokemon 
        When I request a Pikachu from PokeAPI
        Then I should receive Pikachus data