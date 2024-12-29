import LoginPage from "../support/pages/LoginPage";
import ProductPage from "../support/pages/ProductPage";
import CartPage from "../support/pages/CartPage";

describe('Testes no Carrinho', () =>{
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillUsername('standard_user')
        LoginPage.fillPassword('secret_sauce')
        LoginPage.submit()

        ProductPage.addProductToCart(0);
        ProductPage.addProductToCart(1);
    })

    it('Deve adicionar um produto ao carrinho', () => {
        ProductPage.validateCartBadge(2);
        cy.get('.fa-layers-counter').click();
        CartPage.goToCheckout();
    })

    it('Deve remover um produto do carrinho', () => {
        cy.get('.fa-layers-counter').click();
        CartPage.removeProductFromCart(0);
        CartPage.validateCartItemCount(1);
    })

})