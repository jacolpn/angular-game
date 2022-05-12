/// <reference types="cypress" />

context('Testin in component: Header', () => {
    beforeEach(() => { cy.visit('http://localhost:4200/#/'); });

    it('Should redirect to homePage when clicked in logo', () => {
        cy.get('.first_container > div > #button-season').click();
        cy.get('.logo').click();
        cy.get('.h1').should('have.text', 'Estude Angular de uma forma divertida');
    });
});
