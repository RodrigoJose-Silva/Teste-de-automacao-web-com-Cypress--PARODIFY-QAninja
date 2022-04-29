import login from "../support/pages/LoginPage"
import header from "../support/components/Header"
import footer from "../support/components/Footer"


describe('Validando o login do usuário', function () {

    it('Login com sucesso', function () {

        login.go()
        login.submitLogin()
        login.fillForm('qa.digo@gmail.com', 'test@123')
        login.submitValidarLogin()

        header.validandoUserLogado().should('have.attr', 'href', '/users/sign_out')
    })

    it('Login incorreto', function () {

        login.go()
        login.submitLogin()
        login.fillForm('qa-digo@gmoil.com', 'gsdahjhej')
        login.submitValidarLogin()

        login.validandoLoginInvalido().should('contain', 'Email e/ou senha incorretos.')
    })
})