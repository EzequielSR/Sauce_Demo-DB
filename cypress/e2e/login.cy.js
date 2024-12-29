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

    it('Deve aparecer erro ao preencher credenciais inválidas', () => {
        LoginPage.fillUsername('another_user')
        LoginPage.fillPassword('wrong-password')
        LoginPage.submit()

        cy.get('[data-test="error"]').should('be.visible')
            .and('contain', 'Epic sadface: Username and password do not match any user in this service');
    })

    it('Deve aparecer erro ao entrar sem credenciais', () => {
        LoginPage.submit()
        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username is required');
    })

    it('Deve aparecer erro ao entrar sem a credencial de senha', () => {
        LoginPage.fillUsername('standard_user')
        LoginPage.submit()
        cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Password is required');
    })
})