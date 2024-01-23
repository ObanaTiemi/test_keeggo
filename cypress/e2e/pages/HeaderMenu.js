class HeaderMenu{
    elements = {
        homeButton: () => cy.get('ul').contains('Home'),
        productsButton: () => cy.get('ul').contains('Products'),
        cartButton: () => cy.get('ul').contains('Cart'),
        logoutButton: () => cy.get('ul').contains('Logout'),
        deleteAccountButton: () => cy.get('ul').contains('Delete Account'),
        testeCasesButton: () => cy.get('ul').contains('Test Cases'),
        apiTestingButton: () => cy.get('ul').contains('API Testing'),
        videoTutorialsButton: () => cy.get('ul').contains('Video Tutorials'),
        contactUsButton: () => cy.get('ul').contains('Contact Us'),
        loggedInButton: () => cy.get('ul').contains('Logged in as')
    }

    clickProductsButton(){
        return this.elements.productsButton().click()
    }
}
export default HeaderMenu