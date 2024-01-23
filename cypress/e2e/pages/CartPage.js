class CartPage{
    elements = {
        cartProductsTable: () => cy.get('[id="cart_info_table"]'),
        cartDeleteProduct: () => cy.get('.cart_quantity_delete > .fa'),
        emptyCart: () => cy.get('#empty_cart'),
        checkoutButton: () => cy.get('.btn').contains('Proceed To Checkout')
    }

    getCartProductsTable(){
        return this.elements.cartProductsTable()
    }

    getEmptyCart(){
        return this.elements.emptyCart()
    }

    deleteProdut(){
        return this.elements.cartDeleteProduct().click({force: true})
    }

    goToCheckout(){
        return this.elements.checkoutButton().click({force: true})
    }

}
export default CartPage