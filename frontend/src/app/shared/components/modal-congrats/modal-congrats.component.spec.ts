import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCongratsComponent } from './modal-congrats.component';

describe('ModalCongratsComponent', () => {
  let component: ModalCongratsComponent;
  let fixture: ComponentFixture<ModalCongratsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCongratsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCongratsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
