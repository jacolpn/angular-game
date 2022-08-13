import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelHtmlComponent } from './panel-html.component';

describe('PanelHtmlComponent', () => {
  let component: PanelHtmlComponent;
  let fixture: ComponentFixture<PanelHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
