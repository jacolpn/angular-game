import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateModule } from '@ngx-translate/core';

import { loader } from './../../utils/http-loader-factory';

import { helperCongrats } from './../../mocks/first-season/helper-congrats-mock';

import { routes } from 'src/app/app-routing.module';

import { HelperComponent } from './helper.component';

describe('HelperComponent', () => {
    let component: HelperComponent;
    let fixture: ComponentFixture<HelperComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HelperComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [
                RouterModule.forChild(routes),
                TranslateModule.forRoot({ loader }),
                RouterTestingModule,
                HttpClientModule
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HelperComponent);
        component = fixture.componentInstance;
        component.options = helperCongrats;
        component.options.visible = true;
    });

    it('Should create component', () => {
        expect(component).toBeTruthy();
    });

    it(`(D) Should display "Single button" when bound to singleButton propertie is true`, () => {
        component.options.singleButton = true;
        fixture.detectChanges();

        const singleButton: HTMLElement = fixture.nativeElement.querySelector('#button-single');
        const backButton: HTMLElement = fixture.nativeElement.querySelector('#button-back');
        const nextButton: HTMLElement = fixture.nativeElement.querySelector('#button-next');

        expect(singleButton).toBeTruthy();
        expect(backButton).toBeNull();
        expect(nextButton).toBeNull();
    });

    it(`(D) Should display "Next" and "Back" button when bound to singleButton propertie is false`, () => {
        component.options.singleButton = false;
        fixture.detectChanges();

        const singleButton: HTMLElement = fixture.nativeElement.querySelector('#button-single');
        const backButton: HTMLElement = fixture.nativeElement.querySelector('#button-back');
        const nextButton: HTMLElement = fixture.nativeElement.querySelector('#button-next');

        expect(singleButton).toBeNull();
        expect(backButton).toBeTruthy();
        expect(nextButton).toBeTruthy();
    });

    it(`(D) Should change paragraph when clicked in next button`, () => {
        component.options.singleButton = false;
        fixture.detectChanges();

        const nextButton: HTMLElement = fixture.nativeElement.querySelector('#button-next');
        const firstParagraph: HTMLElement = fixture.nativeElement.querySelector('#first-paragraph');

        expect(component.index).toBe(0);
        expect(firstParagraph.innerText).toBe(helperCongrats.paragraph[0].firstParagraph);

        nextButton.click();
        fixture.detectChanges();

        expect(component.index).toBe(1);
        expect(firstParagraph.innerText).toBe(helperCongrats.paragraph[1].firstParagraph);
    });

    it(`onNavigate: Should move to 'first season'`, () => {
        spyOn(component['router'], 'navigate');

        component.onNavigate();

        expect(component['router'].navigate).toHaveBeenCalledWith(['season/first']);
    });

    it('disabledButton(previous): Should return true and false', () => {
        component.index = 0;
        expect(component.disabledButton('previous')).toBeTrue();

        component.index = 1;
        expect(component.disabledButton('previous')).toBeFalse();
    });

    it('disabledButton(next): Should return true and false', () => {

        component.index = 4;
        expect(component.disabledButton()).toBeTrue();

        component.index = 5;
        expect(component.disabledButton()).toBeFalse();
    });

    it('changeInstruction(previous): Should return correct values', () => {
        component.index = 2;
        component.changeInstruction('previous');

        expect(component.index).toBe(1);
    });

    it(`changeInstruction(previous): Should'n decrement to index when index is zero(0)`, () => {
        component.index = 0;
        component.changeInstruction('previous');

        expect(component.index).toBe(0);
    });

    it('changeInstruction(next): Should return correct values', () => {
        fixture.detectChanges();

        component.index = 0;
        component.changeInstruction('next');

        expect(component.index).toBe(1);
    });

    it(`changeInstruction(next): Should'n append to index when index is the size of paragraph array`, () => {
        fixture.detectChanges();

        component.index = 4;
        component.changeInstruction('next');

        expect(component.index).toBe(4);
    });

    it(`(D) Should display class 'pt-5' when 'iconHiddenText' is true and display class 'pt-2' when 'iconHiddenText' is false`, () => {
        component.options.iconHiddenText = true;
        fixture.detectChanges();

        const containerText: HTMLElement = fixture.nativeElement.querySelector('#container-text');

        expect(containerText.getAttribute('class')).toContain('pt-5');

        component.options.iconHiddenText = false;
        fixture.detectChanges();

        expect(containerText.getAttribute('class')).toContain('pt-2');
    });

    it(`(D) Should display 'container, arrow, balons' when 'hiddenText' is false`, () => {
        component.options.iconHiddenText = true;
        fixture.detectChanges();

        const containerText: HTMLElement = fixture.nativeElement.querySelector('#container-text');
        const arrowMinimize: HTMLElement = fixture.nativeElement.querySelector('#arrow-minimize');
        const firstBalon: HTMLElement = fixture.nativeElement.querySelector('#first-balon');
        const secondBalon: HTMLElement = fixture.nativeElement.querySelector('#second-balon');

        expect(containerText).toBeTruthy();
        expect(arrowMinimize).toBeTruthy();
        expect(firstBalon).toBeTruthy();
        expect(secondBalon).toBeTruthy();
    });

    it(`(D) Shouldn't display 'container, arrow, balons' when 'hiddenText' is true`, () => {
        component.options.iconHiddenText = true;
        component.options.visible = false;
        fixture.detectChanges();

        const containerText: HTMLElement = fixture.nativeElement.querySelector('#container-text');
        const arrowMinimize: HTMLElement = fixture.nativeElement.querySelector('#arrow-minimize');
        const firstBalon: HTMLElement = fixture.nativeElement.querySelector('#first-balon');
        const secondBalon: HTMLElement = fixture.nativeElement.querySelector('#second-balon');

        expect(containerText).toBeNull();
        expect(arrowMinimize).toBeNull();
        expect(firstBalon).toBeNull();
        expect(secondBalon).toBeNull();
    });

    it(`(D) Shouldn't display 'arrow-minimize' when 'iconHiddenText' is false`, () => {
        component.options.iconHiddenText = false;
        fixture.detectChanges();

        const arrowMinimize: HTMLElement = fixture.nativeElement.querySelector('#arrow-minimize');
        expect(arrowMinimize).toBeNull();
    });

    it(`hiddenText: Should return true when 'iconHiddenText' is false and return true when 'iconHiddenText' is true`, () => {
        component.options.iconHiddenText = false;
        expect(component.hiddenText()).toBeFalse();

        component.options.visible = false;
        component.options.iconHiddenText = true;
        expect(component.hiddenText()).toBeTruthy();
    });
});
