import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialGameComponent } from './initial-game.component';

describe('InitialGameComponent', () => {
  let component: InitialGameComponent;
  let fixture: ComponentFixture<InitialGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
