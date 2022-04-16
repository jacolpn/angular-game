import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe(HeaderComponent.name, () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ HeaderComponent ]
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
        let user = 'Test Unitary';

        component.user = true;
        component.userName = user;
        fixture.detectChanges();

        const userLogged: HTMLImageElement = fixture.nativeElement.querySelector('#user-logged');
        const login: HTMLImageElement = fixture.nativeElement.querySelector('#login');
        const userName: HTMLImageElement = fixture.nativeElement.querySelector('span');

        expect(userLogged).toBeTruthy();
        expect(login).toBeNull();
        expect(userName.innerText).toBe(user);
    });

    it(`(D) Should display "login" when bound to properties`, () => {
        component.user = false;
        fixture.detectChanges();

        const userLogged: HTMLImageElement = fixture.nativeElement.querySelector('#user-logged');
        const login: HTMLImageElement = fixture.nativeElement.querySelector('#login');

        expect(login).toBeTruthy();
        expect(userLogged).toBeNull();
    });
});
