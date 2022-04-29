import footer from "../support/components/Footer"

describe('Play Song', function() {

    it('Let´s go Rock', function() {
        
        cy.signIn('qa.digo@gmail.com', 'test@123')
        
        //acessando a função de busca
        footer.iconSearch().click()

        cy.contains('h2', 'Buscar').should('be.visible')
        cy.get('img[src*="rock.png"]').parent().click()
        cy.contains('h2', 'Rock').should('be.visible')
        cy.contains('a', 'NullVana').click()
        cy.contains('h2', 'Músicas').should('be.visible')

        cy.contains('.song-item', 'Windows My Ass')
            .get('.play-button a').click()
        
    })
})