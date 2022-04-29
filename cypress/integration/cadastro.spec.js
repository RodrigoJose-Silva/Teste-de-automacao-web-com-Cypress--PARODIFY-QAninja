import login from "../support/pages/LoginPage"
import newUser from "../support/pages/CadastroPage"
import footer from "../support/components/Footer"

describe('Acessando a página do Parodify', function () {

    it('Validando a página inicial', function () {

        login.go()
        
        //Experimente agora
        login.cadastrarNewUser()
    })
    it('Efetuando cadastro de usuário', function () {
        newUser.fillFormNewUser('qa.digo@gmail.com', 'test@123', 'test@123')

        newUser.submitNewUser()

        footer.iconHome().should('be.visible')
    })

})