class LoginPage{
    visit(){
        cy.visit('/');
    }
    fillUsername(username){
        cy.get('#username').type(username);
    }
    fillPassword(password){
        cy.get('#password').type(password);
    }
    submit(){
        cy.get('login-button').click();
    }
}

export default new LoginPage();