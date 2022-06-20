import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { loader } from './../../../shared/utils/http-loader-factory';

import { FirstSeasonComponent } from './first-season.component';

describe('FirstSeasonComponent', () => {
    let component: FirstSeasonComponent;
    let fixture: ComponentFixture<FirstSeasonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FirstSeasonComponent],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [
                TranslateModule.forRoot({ loader }),
                HttpClientModule
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FirstSeasonComponent);
        component = fixture.componentInstance;
    });

    it('Should create component', () => {
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('(D) Should display helper component when initialized', () => {
        const initialGame: HTMLElement = fixture.nativeElement.querySelector('app-helper');
        expect(initialGame).toBeTruthy();
    });

    it(`(D) Should display class 'command-button-active' when propertie (camuuflage, pressurization, hatch) is true`, () => {
        component.camouflage = true;
        component.hatch = true;
        component.pressurization = true;
        fixture.detectChanges();

        const camouflageButton: HTMLElement = fixture.nativeElement.querySelector('#button-camouflage');
        const pressurizationButton: HTMLElement = fixture.nativeElement.querySelector('#button-pressurization');
        const hatchButton: HTMLElement = fixture.nativeElement.querySelector('#button-hatch');

        expect(camouflageButton.getAttribute('class')).toBe('command-button-active');
        expect(pressurizationButton.getAttribute('class')).toBe('command-button-active');
        expect(hatchButton.getAttribute('class')).toBe('command-button-active');
    });

    it(`(D) Should display class 'command-button-inactive' when propertie (camuuflage, pressurization, hatch) is false`, () => {
        component.camouflage = false;
        component.hatch = false;
        component.pressurization = false;
        fixture.detectChanges();

        const camouflageButton: HTMLElement = fixture.nativeElement.querySelector('#button-camouflage');
        const pressurizationButton: HTMLElement = fixture.nativeElement.querySelector('#button-pressurization');
        const hatchButton: HTMLElement = fixture.nativeElement.querySelector('#button-hatch');

        expect(camouflageButton.getAttribute('class')).toBe('command-button-inactive');
        expect(pressurizationButton.getAttribute('class')).toBe('command-button-inactive');
        expect(hatchButton.getAttribute('class')).toBe('command-button-inactive');
    });
});
