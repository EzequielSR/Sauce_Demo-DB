import selectors from '../../fixtures/selectors/cartPage.json'

class CartPage {
    validateCartItemCount(count){
        cy.get(selectors.cartItems).should('have.length', count);
    }
    removeProductFromCart(productIndex){
        cy.get(selectors.removeButtons).eq(productIndex).click();
    }
    goToCheckout(){
        cy.get(selectors.checkoutButton).click();
    }
}

export default new CartPage();