import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRootComponent } from './panel-root/panel-root.component';
import { PanelHtmlComponent } from './panel-html/panel-html.component';
import { PanelCssComponent } from './panel-css/panel-css.component';
import { PanelTsComponent } from './panel-ts/panel-ts.component';



@NgModule({
  declarations: [
    PanelRootComponent,
    PanelHtmlComponent,
    PanelCssComponent,
    PanelTsComponent
  ],
  imports: [CommonModule],
  exports: [
    PanelRootComponent,
    PanelHtmlComponent,
    PanelCssComponent,
    PanelTsComponent
  ]
})
export class PanelModule { }
