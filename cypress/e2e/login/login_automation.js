const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import LoginPage from '../pages/LoginPage'

const loginPage = new LoginPage()

Given("I am visiting automationexercise.com", () => {
    loginPage.visit()
})

When("I fill my login credentials", () => {
    cy.fixture('login_credentials').then((data) => {
        loginPage.typeLoginEmailField(data.email)
        loginPage.typeLoginPasswordField(data.password)
    })
    loginPage.clickLoginButton()
})

Then("I should see a login message", () => {
    loginPage.getLoggedInMessage()
    .should('contain',' Logged in as testeteste')
})

When("I fill my credentials with incorrect data", () => {
    cy.fixture('wrong_credentials').then((data) => {
        loginPage.typeLoginEmailField(data.email)
        loginPage.typeLoginPasswordField(data.password)
    })
    loginPage.clickLoginButton()
})

Then("I can not login", () => {
    loginPage.getFailedLoginMessage()
    .should('contain','Your email or password is incorrect!')
})