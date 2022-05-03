import { RouterModule } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

import { loader } from './../../shared/utils/http-loader-factory';

import { routes } from 'src/app/app-routing.module';

describe('HomePageComponent', () => {
    let component: HomePageComponent;
    let fixture: ComponentFixture<HomePageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomePageComponent],
            imports: [
                RouterTestingModule,
                HttpClientModule,
                TranslateModule.forRoot({ loader }),
                RouterModule.forChild(routes)
            ],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create component', () => {
        expect(component).toBeTruthy();
    });

    it('(D) Should display initial game component when initialized', () => {
        const initialGame = fixture.nativeElement.querySelector('app-initial-game');
        expect(initialGame).toBeTruthy();
    });

    it('(D) Should move to "season" when buttonSeason clicked', () => {
        spyOn(component['router'], 'navigate');

        const buttonSeason = fixture.nativeElement.querySelector('#button-season');
        buttonSeason.click();

        expect(component['router'].navigate).toHaveBeenCalledWith(['season']);
        expect(buttonSeason).toBeTruthy();
    });

    it('onNavigateSeason: Should move to "season"', () => {
        spyOn(component['router'], 'navigate');

        component.onNavigateSeason();

        expect(component['router'].navigate).toHaveBeenCalledWith(['season']);
    });
});
