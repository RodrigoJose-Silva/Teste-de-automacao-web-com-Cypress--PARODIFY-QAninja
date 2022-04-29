

class CadsatroPage {

    fillFormNewUser(email, password, confirmPassword) {
        cy.get('#user_email').type(email)
        cy.get('#user_password').type(password)
        cy.get('#user_password_confirmation').type(confirmPassword)
    }

    submitNewUser() {
        cy.get('input[type="submit"][name="commit"]').click()
    
    }

}

export default new CadsatroPage()