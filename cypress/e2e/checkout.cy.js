import LoginPage from "../support/pages/LoginPage";
import ProductPage from "../support/pages/ProductPage";
import CartPage from "../support/pages/CartPage";
import CheckoutPage from "../support/pages/CheckoutPage";

describe('Testes no Checkout', () =>{
    beforeEach(() => {
        LoginPage.visit();
        LoginPage.fillUsername('standard_user')
        LoginPage.fillPassword('secret_sauce')
        LoginPage.submit()

        ProductPage.addProductToCart(0);
        cy.get('.fa-layers-counter').click();
        CartPage.goToCheckout();
    })
    it('Deve concluir o formulário e a compra', () => {
        CheckoutPage.fillCheckoutForm('John', 'Doe', '12345');
        CheckoutPage.continueToSummary();
        CheckoutPage.finishCheckout();
        CheckoutPage.validateThankYouMessage();
    });

    it('Deve dar erro por ausencia de informações do formulário', () => {
        CheckoutPage.continueToSummary();
    });
})