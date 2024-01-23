const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import LoginPage from '../pages/LoginPage'
import HeaderMenu from '../pages/HeaderMenu'
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';

const loginPage = new LoginPage()
const headerMenu = new HeaderMenu()
const productsPage = new ProductsPage()
const cartPage = new CartPage()

Given("I search for a top", () => {
    loginPage.visit()
    cy.fixture('login_credentials').then((data) => {
        loginPage.typeLoginEmailField(data.email)
        loginPage.typeLoginPasswordField(data.password)
    })
    loginPage.clickLoginButton()
    headerMenu.clickProductsButton()
    productsPage.searchProduct('Top')
})

When("I add to cart", () => {
    productsPage.getAddToCartButton()
})

Then("I should see the item in the cart", () => {
    productsPage.getCartModal().should('be.visible')
    productsPage.goToCart()
    cartPage.getCartProductsTable().should('have.length', 1)
})

Given("I have products in my cart", () => {
    loginPage.visit()
    cy.fixture('login_credentials').then((data) => {
        loginPage.typeLoginEmailField(data.email)
        loginPage.typeLoginPasswordField(data.password)
    })
    loginPage.clickLoginButton()
    headerMenu.clickProductsButton()
    productsPage.searchProduct('Top')
    productsPage.getAddToCartButton()
    productsPage.goToCart()
    cartPage.getCartProductsTable().should('have.length', 1)
})

When("I remove it", () => {
    cartPage.deleteProdut()
})

Then("I shoud see the cart empty", () => {
    cartPage.getCartProductsTable().should('not.be.visible')
    cartPage.getEmptyCart().should('contain.text', 'Cart is empty!')
})