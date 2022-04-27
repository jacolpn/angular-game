import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { loader } from './../../../shared/utils/http-loader-factory';

import { InitialGameComponent } from './initial-game.component';

describe('InitialGameComponent', () => {
    let component: InitialGameComponent;
    let fixture: ComponentFixture<InitialGameComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InitialGameComponent],
            imports: [
                RouterTestingModule,
                HttpClientModule,
                TranslateModule.forRoot({ loader })
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InitialGameComponent);
        component = fixture.componentInstance;
    });

    it('Should create component', () => {
        expect(component).toBeTruthy();
    });

    it('(D) Should display "inputGame" and hidden "paragraphGame" when init component', () => {
        fixture.detectChanges();

        const inputGame: HTMLImageElement = fixture.nativeElement.querySelector('#input-game');
        const paragraphGame: HTMLImageElement = fixture.nativeElement.querySelector('#paragraph-game');

        expect(inputGame).toBeTruthy();
        expect(paragraphGame).toBeNull();
    });

    it('(D) Should display "paragraphGame" and hidden "inputGame" when variable gameText is correct', () => {
        component.onValidGame('interpolation');
        fixture.detectChanges();

        const inputGame: HTMLImageElement = fixture.nativeElement.querySelector('#input-game');
        const paragraphGame: HTMLImageElement = fixture.nativeElement.querySelector('#paragraph-game');

        expect(inputGame).toBeTruthy();
        expect(paragraphGame).toBeNull();
    });
});
