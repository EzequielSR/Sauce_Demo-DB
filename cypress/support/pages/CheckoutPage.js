import selectors from '../../fixtures/selectors/checkoutPage.json'

class CheckoutPage {
    fillCheckoutForm(firstName, lastName, postalCode){
        cy.get(selectors.firstNameInput).type(firstName);
        cy.get(selectors.lastNameInput).type(lastName);
        cy.get(selectors.postalCodeInput).type(postalCode);
    }

    continueToSummary(){
        cy.get(selectors.continueButton).click();
    }

    finishCheckout(){
        cy.get(selectors.finishButton).click();
    }

    validateThankYouMessage(){
        cy.get(selectors.thankYouHeader).should('contain.text', 'THANK YOU FOR YOUR ORDER')
    }
}

export default new CheckoutPage();