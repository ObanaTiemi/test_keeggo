const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import LoginPage from '../pages/LoginPage'
import HeaderMenu from '../pages/HeaderMenu'
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage'

const loginPage = new LoginPage()
const headerMenu = new HeaderMenu()
const productsPage = new ProductsPage()
const cartPage = new CartPage()
const checkoutPage = new CheckoutPage()

Given("I have products in cart", () => {
    loginPage.visit()
    cy.fixture('login_credentials').then((data) => {
        loginPage.typeLoginEmailField(data.email)
        loginPage.typeLoginPasswordField(data.password)
    })
    loginPage.clickLoginButton()
    headerMenu.clickProductsButton()
    productsPage.searchProduct('Top')
    productsPage.getAddToCartButton()
    productsPage.getCartModal().should('be.visible')
    productsPage.goToCart()
    cartPage.getCartProductsTable().should('have.length', 1)
})

When("I go to checkout", () => {
    cartPage.goToCheckout()
})

Then("I should see the itens on checkout", () => {
    cy.scrollTo(0, 500)
    checkoutPage.getCheckoutTable().should('be.visible')
})