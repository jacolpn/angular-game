import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCssComponent } from './panel-css.component';

describe('PanelCssComponent', () => {
  let component: PanelCssComponent;
  let fixture: ComponentFixture<PanelCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
