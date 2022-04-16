import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeasonPageComponent } from './season-page.component';

import { SeasonRoutingModule } from './season-page-routing.module';

@NgModule({
  declarations: [
    SeasonPageComponent
  ],
  imports: [
    CommonModule,
    SeasonRoutingModule
  ]
})
export class SeasonPageModule { }
