import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { loader } from './../../shared/utils/http-loader-factory';
import { TranslateModule } from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { routes } from 'src/app/app-routing.module';

import { SeasonPageComponent } from './season-page.component';

describe('SeasonPageComponent', () => {
    let component: SeasonPageComponent;
    let fixture: ComponentFixture<SeasonPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SeasonPageComponent ],
            schemas: [NO_ERRORS_SCHEMA],
            imports: [
                HttpClientModule,
                RouterTestingModule,
                TranslateModule.forRoot({ loader }),
                RouterModule.forChild(routes)
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SeasonPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create component', () => {
        expect(component).toBeTruthy();
    });

    it('(D) Should move to "season" when buttonSeason clicked', () => {
        spyOn(component['router'], 'navigate');

        const buttonSeason = fixture.nativeElement.querySelector('#button-season');
        buttonSeason.click();

        expect(component['router'].navigate).toHaveBeenCalledWith(['season/start-introduction']);
        expect(buttonSeason).toBeTruthy();
    });
});
