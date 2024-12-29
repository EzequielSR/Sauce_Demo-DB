import selectors from '../../fixtures/selectors/login.json'

class LoginPage{
    visit(){
        cy.visit('/index.html');
    }
    fillUsername(username){
        cy.get(selectors.username).type(username);
    }
    fillPassword(password){
        cy.get(selectors.password).type(password);
    }
    submit(){
        cy.get(selectors.loginButton).click();
    }
}

export default new LoginPage();