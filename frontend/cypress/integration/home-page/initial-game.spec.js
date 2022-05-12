import { InitialGameComponent } from '../../../src/app/pages/home-page/initial-game/initial-game.component.ts';
import { InitialGameSpec, inputGame, paragraphGame, loadingGame } from '../../support/initial-game/index.ts';

context(`Testin in component: HomePage/InitialGame`, () => {
    beforeEach(() => { cy.visit('http://localhost:4200/#/'); });

    it('test cenário', () => {
        cy.get('.first_container > div > #button-season').click();
        cy.get('.title-module').should('be.visible');
    })

    it('Simple: Should finish game when entering a correct value', () => {
        cy.get('#input-game').type('interpolation');
        cy.get('#paragraph-game').should('have.text', ' {{ interpolation }} ');
        cy.get('#loading-typing').should('not.be.true');
    });

    it('Page Object: Should finish game when entering a correct value', () => {
        inputGame('interpolation');
        paragraphGame('have.text', ' {{ interpolation }} ');
        loadingGame('not.be.true', '');
        // InitialGameSpec.instance.inputGame('interpolation');
        // InitialGameSpec.instance.paragraphGame('have.text', ' {{ interpolation }} ');
        // InitialGameSpec.instance.loadingGame('not.be.true', '');
    });

    it('Simple: Should not finish game when entering a incorrect value', () => {
        cy.get('#input-game').type('interpolatios');
        cy.get('#paragraph-game').should('not.be.true');
        cy.get('#loading-typing').should('be.visible');
    });

    it('Page Object: Should not finish game when entering a incorrect value', () => {
        InitialGameSpec.instance.inputGame('interpolatios');
        InitialGameSpec.instance.paragraphGame('not.be.true', '');
        InitialGameSpec.instance.loadingGame('be.visible', '');
    });

    it('Simple: onValidGame: Should return true when value is valid AND return false when value is invalid', () => {
        const initialGameComponent = new InitialGameComponent();

        expect(initialGameComponent.onValidGame('interpolation')).to.be.true;
        expect(initialGameComponent.onValidGame('{{interpolation}}')).to.be.true;
        expect(initialGameComponent.onValidGame('anyone')).not.to.be.true;
    });

    it('Page Object: onValidGame: Should return true when value is valid AND return false when value is invalid', () => {
        expect(InitialGameSpec.instance.onValidGame('interpolation')).to.be.true;
        expect(InitialGameSpec.instance.onValidGame('{{interpolation}}')).to.be.true;
        expect(InitialGameSpec.instance.onValidGame('anyone')).not.to.be.true;
    });
});
