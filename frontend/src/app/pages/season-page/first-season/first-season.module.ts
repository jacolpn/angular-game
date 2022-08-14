import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { FirstSeasonRoutingModule } from './first-season-routing.module';

import { PanelModule } from './../../../shared/components/panel/panel.module';
import { ModalCongratsModule } from './../../../shared/components/modal-congrats/modal-congrats.module';
import { HelperModule } from './../../../shared/components/helper/helper.module';

import { FirstSeasonComponent } from './first-season.component';

@NgModule({
  declarations: [
    FirstSeasonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FirstSeasonRoutingModule,
    TranslateModule,
    HelperModule,
    PanelModule,
    ModalCongratsModule
  ]
})
export class FirstSeasonModule { }
