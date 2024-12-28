import LoginPage from '../support/pages/LoginPage';

describe('Login Test', () => {
    it('deve fazer login com credenciais validas', () => {
        LoginPage.visit();
        LoginPage.fillUsername('valid_user');
        LoginPage.fillPassword('valid_password');
        LoginPage.submit();

        cy.url().should('include', '/inventory.html')
    })

    it('deve aparecer erro com credenciais invalidas', () => {
        LoginPage.visit();
        LoginPage.fillUsername('invalid_user');
        LoginPage.fillPassword('invalid_password');
        LoginPage.submit();

        cy.get('.error-message').should('be.visible');
    })
})