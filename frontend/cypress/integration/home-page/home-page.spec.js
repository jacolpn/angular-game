/// <reference types="cypress" />

context(`Testin in component: HomePage`, () => {
    beforeEach(() => { cy.visit('http://localhost:4200/#/'); });

    it('Should redirect to seasonPage when clicked in buttonSeason', () => {
        cy.get('.first_container > div > #button-season').click();
        cy.get('#season').should('be.visible')
    });
});
