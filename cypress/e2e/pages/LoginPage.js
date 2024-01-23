class LoginPage {
    elements = {
        loginEmailField: () => cy.get('[data-qa="login-email"]'),
        loginPasswordField: () => cy.get('[data-qa="login-password"]'),
        loginButton: () => cy.get('[data-qa="login-button"]'),
        loggedInMessage: () => cy.get(':nth-child(10) > a'),
        failedLoginMessage: () => cy.get('.login-form > form')
    }

    visit(){
        cy.visit("https://www.automationexercise.com/login")
    }

    getLoggedInMessage(){
        return this.elements.loggedInMessage()
    }

    getFailedLoginMessage(){
        return this.elements.failedLoginMessage()
    }

    typeLoginEmailField(email){
        return this.elements.loginEmailField().type(email)
    }

    typeLoginPasswordField(password){
        return this.elements.loginPasswordField().type(password)
    }

    clickLoginButton(){
        return this.elements.loginButton().click()
    }
}
export default LoginPage