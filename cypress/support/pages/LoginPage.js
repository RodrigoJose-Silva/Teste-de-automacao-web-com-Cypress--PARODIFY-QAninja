
class LoginPage {

    go() {
        cy.viewport(1440, 900)
        cy.visit('https://parodify.herokuapp.com/')
        cy.get('body section div div p').should('have.text', 'Paródias sobre cultura Geek e Tecnologia.')
    }

    submitLogin() {
        cy.get('a[href="/users/sign_in"]').click()
    }

    fillForm(email, password) {
        cy.get('#user_email').type(email)
        cy.get('#user_password').type(password)
    }

    submitValidarLogin() {
        cy.get('input[type="submit"][value="Log in"]').click()
    }

    validandoLoginInvalido() {
        return cy.get('.message-body')
    }

    cadastrarNewUser() {
        //Experimente agora
        cy.get('a[href="/users/sign_up"]').click()
    }

}

export default new LoginPage()