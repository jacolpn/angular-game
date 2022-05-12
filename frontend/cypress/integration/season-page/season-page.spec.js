/// <reference types="cypress" />

context(`Testin in component: SeasonPage`, () => {
    beforeEach(() => { cy.visit('http://localhost:4200/#/season'); });

    it('Should redirect to seasonPage when clicked in buttonSeason', () => {
        cy.get('#season').should('be.visible')
    });
});
