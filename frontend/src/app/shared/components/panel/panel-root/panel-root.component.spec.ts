import { RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

import { TranslateModule } from '@ngx-translate/core';

import { PanelRootComponent } from './panel-root.component';

import { routes } from 'src/app/app-routing.module';

import { FirstSeasonService } from 'src/app/shared/services/first-season.service';

import { loader } from '../../../utils/http-loader-factory';

fdescribe('PanelRootComponent', () => {
    let component: PanelRootComponent;
    let fixture: ComponentFixture<PanelRootComponent>;
    let service: FirstSeasonService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PanelRootComponent],
            imports: [
                RouterModule.forChild(routes),
                TranslateModule.forRoot({ loader }),
                RouterTestingModule,
                HttpClientModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(PanelRootComponent);
        component = fixture.componentInstance;
        service = TestBed.inject(FirstSeasonService);
    });

    it('Should create component', () => {
        expect(component).toBeTruthy();
    });

    it('setBorder: Should change class when level is changed', () => {
        service.level = 1;
        expect(component.setBorder()).toBe('wrapper');

        service.level = 2;
        expect(component.setBorder()).toBe('wrapper-2');
    });

    it('(D) Should change class when level is changed', () => {
        let painelRoot: HTMLElement;

        service.level = 1;
        fixture.detectChanges();

        painelRoot = fixture.nativeElement.querySelector('#painel-root');
        expect(painelRoot.getAttribute("class")).toBe('wrapper');

        service.level = 2;
        fixture.detectChanges();

        painelRoot = fixture.nativeElement.querySelector('#painel-root');
        expect(painelRoot.getAttribute("class")).toBe('wrapper-2');
    });
});
