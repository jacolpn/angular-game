import { HttpClientModule } from '@angular/common/http';
import { loader } from './../../shared/utils/http-loader-factory';
import { TranslateModule } from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

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
                TranslateModule.forRoot({ loader }),
            ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SeasonPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create component', () => {
        expect(component).toBeTruthy();
    });
});
