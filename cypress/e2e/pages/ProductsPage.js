class ProductsPage{
    elements = {
        searchField: () => cy.get('[id="search_product"]'),
        searchButton: () => cy.get('[id="submit_search"]'),
        productsList: () => cy.get('.features_items'),
        addToCartButton: () => cy.get('.btn').contains('Add to cart'),
        cartModal: () => cy.get('.modal-content'),
        goToCartText: () => cy.contains('u','View Cart')
    }

    getProductList(){
        return this.elements.productsList()
    }

    getAddToCartButton(){
        return this.elements.addToCartButton().click()
    }

    getCartModal(){
        return this.elements.cartModal()
    }

    goToCart(){
        return this.elements.goToCartText().click()
    }

    searchProduct(product){
        this.elements.searchField().type(product)
        return this.elements.searchButton().click()
    }

}
export default ProductsPage