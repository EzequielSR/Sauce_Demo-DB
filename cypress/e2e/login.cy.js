import LoginPage from "../support/pages/LoginPage";

describe('Testes no Login', () =>{
    beforeEach(() => {
        LoginPage.visit();
    })

    it('Deve fazer login com sucesso', () => {
        LoginPage.fillUsername('standard_user')
        LoginPage.fillPassword('secret_sauce')
        LoginPage.submit()

        cy.url().should('include', '/inventory.html')
    })

    it('Deve fazer login sem sucesso', () => {
        LoginPage.fillUsername('another_user')
        LoginPage.fillPassword('wrong-password')
        LoginPage.submit()

        cy.get('[data-test="error"]').should('be.visible');
    })
})