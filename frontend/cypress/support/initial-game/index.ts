import { InitialGameComponent } from '../../../src/app/pages/home-page/initial-game/initial-game.component';
import { ELEMENTS } from './elements';

export const inputGame = (type: string) => cy.get(ELEMENTS.inputGame).type(type);

export const paragraphGame = (property: string, value: string) => cy.get(ELEMENTS.paragraphGame).should(property, value);

export const loadingGame = (property: string, value: string) => cy.get(ELEMENTS.loadingGame).should(property, value);

export class InitialGameSpec {
    static instance = new InitialGameSpec();
    initialGameComponent = new InitialGameComponent()

    get el() {
        return ELEMENTS;
    }

    public inputGame(type: string) {
        return cy.get(this.el.inputGame).type(type);
    }

    public paragraphGame(property: string, value: string) {
        return cy.get(this.el.paragraphGame).should(property, value);
    }

    public loadingGame(property: string, value: string) {
        return cy.get(this.el.loadingGame).should(property, value);
    }

    onValidGame(value: string) {
        return this.initialGameComponent.onValidGame(value);
    }

    onSetValueGameText(value: string) {
        return this.initialGameComponent.gameText = value;
    }
}
