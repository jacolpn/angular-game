import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTsComponent } from './panel-ts.component';

describe('PanelTsComponent', () => {
  let component: PanelTsComponent;
  let fixture: ComponentFixture<PanelTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelTsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
