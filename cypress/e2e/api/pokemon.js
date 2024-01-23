const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("I request a Pikachu from PokeAPI", () => {
    cy.request({
        url: Cypress.env('pokeUrl') + 'pokemon/pikachu',
        method: 'GET'
    }).as('pokemon')
})

Then("I should receive Pikachus data", () => {
    cy.get('@pokemon').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('name', 'pikachu')
    })
})