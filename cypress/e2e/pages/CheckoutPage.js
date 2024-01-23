class CheckoutPage{
    elements = {
        checkoutTable: () => cy.get('#cart_info')
    }

    getCheckoutTable(){
        return this.elements.checkoutTable()
    }
}
export default CheckoutPage