const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import LoginPage from '../pages/LoginPage'
import HeaderMenu from '../pages/HeaderMenu'
import ProductsPage from '../pages/ProductsPage';

const loginPage = new LoginPage()
const headerMenu = new HeaderMenu()
const productsPage = new ProductsPage()

Given("I am logged in at automationexercise.com", () => {
    loginPage.visit()
    cy.fixture('login_credentials').then((data) => {
        loginPage.typeLoginEmailField(data.email)
        loginPage.typeLoginPasswordField(data.password)
    })
    loginPage.clickLoginButton()
})

When("I search for a top", () => {
    headerMenu.clickProductsButton()
    productsPage.searchProduct('Top')
})

Then("the search should return it", () => {
    productsPage.getProductList().should(($result) => {
        expect($result).to.contain('Top')
    })
})

When("I search for pants", () => {
    headerMenu.clickProductsButton()
    productsPage.searchProduct('Pants')
})

Then("the search should return nothing", () => {
    productsPage.getProductList().should(($result) => {
        expect($result).to.not.contain('Pants')
    })
})