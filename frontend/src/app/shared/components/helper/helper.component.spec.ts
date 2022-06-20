import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { option } from '../../mocks/helper-mock';
import { loader } from './../../utils/http-loader-factory';

import { routes } from 'src/app/app-routing.module';

import { HelperComponent } from './helper.component';

let options: any = option;

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
    });

    it('Should create component', () => {
        expect(component).toBeTruthy();
    });

    it(`(D) Should display "Single button" when bound to singleButton propertie is true`, () => {
        options.singleButton = true;
        component.options = options;
        fixture.detectChanges();

        const singleButton: HTMLElement = fixture.nativeElement.querySelector('#button-single');
        const backButton: HTMLElement = fixture.nativeElement.querySelector('#button-back');
        const nextButton: HTMLElement = fixture.nativeElement.querySelector('#button-next');

        expect(singleButton).toBeTruthy();
        expect(backButton).toBeNull();
        expect(nextButton).toBeNull();
    });

    it(`(D) Should display "Next" and "Back" button when bound to singleButton propertie is false`, () => {
        options.singleButton = false;
        component.options = options;
        fixture.detectChanges();

        const singleButton: HTMLElement = fixture.nativeElement.querySelector('#button-single');
        const backButton: HTMLElement = fixture.nativeElement.querySelector('#button-back');
        const nextButton: HTMLElement = fixture.nativeElement.querySelector('#button-next');

        expect(singleButton).toBeNull();
        expect(backButton).toBeTruthy();
        expect(nextButton).toBeTruthy();
    });

    it(`(D) Should change paragraph when clicked in next button`, () => {
        options.singleButton = false;
        component.options = options;
        fixture.detectChanges();

        const nextButton: HTMLElement = fixture.nativeElement.querySelector('#button-next');
        const firstParagraph: HTMLElement = fixture.nativeElement.querySelector('#first-paragraph');
        const secondParagraph: HTMLElement = fixture.nativeElement.querySelector('#second-paragraph');
        const thirdParagraph: HTMLElement = fixture.nativeElement.querySelector('#third-paragraph');

        expect(component.index).toBe(0);
        expect(firstParagraph.innerText).toBe(options.paragraph[0].firstParagraph);
        expect(secondParagraph.innerText).toBe(options.paragraph[0].secondParagraph);
        expect(thirdParagraph.innerText).toBe(options.paragraph[0].thirdParagraph);

        nextButton.click();
        fixture.detectChanges();

        expect(component.index).toBe(1);
        expect(firstParagraph.innerText).toBe(options.paragraph[1].firstParagraph);
        expect(secondParagraph.innerText).toBe(options.paragraph[1].secondParagraph);
        expect(thirdParagraph.innerText).toBe(options.paragraph[1].thirdParagraph);
    });

    it(`onNavigate: Should move to 'first season'`, () => {
        component.options = options;
        spyOn(component['router'], 'navigate');

        component.onNavigate();

        expect(component['router'].navigate).toHaveBeenCalledWith(['season/first']);
    });

    it('onDisabledButtonPrevious: Should return true and false', () => {
        component.index = 0;
        expect(component.onDisabledButtonPrevious()).toBeTrue();

        component.index = 1;
        expect(component.onDisabledButtonPrevious()).toBeFalse();
    });

    it('onDisabledButtonNext: Should return true and false', () => {
        component.options = options;
        fixture.detectChanges();

        component.index = 1;
        expect(component.onDisabledButtonNext()).toBeTrue();

        component.index = 2;
        expect(component.onDisabledButtonNext()).toBeFalse();
    });

    it('onPreviousInstruction: Should return correct values', () => {
        component.index = 2;
        component.onPreviousInstruction();

        expect(component.index).toBe(1);
    });

    it(`onPreviousInstruction: Should'n decrement to index when index is zero(0)`, () => {
        component.index = 0;
        component.onPreviousInstruction();

        expect(component.index).toBe(0);
    });

    it('onNextInstruction: Should return correct values', () => {
        component.options = options;
        fixture.detectChanges();

        component.index = 0;
        component.onNextInstruction();

        expect(component.index).toBe(1);
    });

    it(`onNextInstruction: Should'n append to index when index is the size of paragraph array`, () => {
        component.options = options;
        fixture.detectChanges();

        component.index = 2;
        component.onNextInstruction();

        expect(component.index).toBe(2);
    });

    it(`(D) Should display class 'pt-5' when 'enableHiddenText' is true and display class 'pt-2' when 'enableHiddenText' is false`, () => {
        options.enableHiddenText = true;
        component.options = options;
        fixture.detectChanges();

        const containerText: HTMLElement = fixture.nativeElement.querySelector('#container-text');

        expect(containerText.getAttribute('class')).toContain('pt-5');

        options.enableHiddenText = false;
        component.options = options;
        fixture.detectChanges();

        expect(containerText.getAttribute('class')).toContain('pt-2');
    });

    it(`(D) Should display 'container, arrow, balons' when 'hiddenText' is false`, () => {
        options.enableHiddenText = true;
        component.options = options;
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
        options.enableHiddenText = true;
        component.hiddenText = true;
        component.options = options;
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

    it(`(D) Shouldn't display 'arrow-minimize' when 'enableHiddenText' is false`, () => {
        options.enableHiddenText = false;
        component.options = options;
        fixture.detectChanges();

        const arrowMinimize: HTMLElement = fixture.nativeElement.querySelector('#arrow-minimize');
        expect(arrowMinimize).toBeNull();
    });

    it(`onHiddenText: Should return true when 'enableHiddenText' is false and return true when 'enableHiddenText' is true`, () => {
        options.enableHiddenText = false;
        component.options = options;

        expect(component.onHiddenText()).toBeFalse();

        options.enableHiddenText = true;
        component.options = options;

        expect(component.onHiddenText()).toBeTruthy();
    });
});
