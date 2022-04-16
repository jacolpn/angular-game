import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

import { loader } from './../shared/utils/http-loader-factory';

describe(HeaderComponent.name, () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HeaderComponent],
            imports: [
                RouterTestingModule,
                HttpClientModule,
                TranslateModule.forRoot({ loader })
            ],
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Should create component', () => {
        expect(component).toBeTruthy();
    });

    it(`(D) Should display "userLogged" when bound to properties`, () => {
        fixture.detectChanges();
        const users = {
            userName: 'Angular Game',
            image: 'assets/images/google.png'
        };

        component.user.push(users);
        fixture.detectChanges();

        const userLogged: HTMLImageElement = fixture.nativeElement.querySelector('#user-logged');
        const login: HTMLImageElement = fixture.nativeElement.querySelector('#login');
        const userName: HTMLImageElement = fixture.nativeElement.querySelector('span');
        const image: HTMLImageElement = fixture.nativeElement.querySelector('#image_login');

        expect(userLogged).toBeTruthy();
        expect(userName.innerText).toBe(users.userName);
        expect(image.getAttribute('src')).toBe(users.image);
        expect(login).toBeNull();
    });

    it(`(D) Should display "login" when bound to properties`, () => {
        fixture.detectChanges();

        const userLogged: HTMLImageElement = fixture.nativeElement.querySelector('#user-logged');
        const login: HTMLImageElement = fixture.nativeElement.querySelector('#login');

        expect(login).toBeTruthy();
        expect(userLogged).toBeNull();
    });
});
