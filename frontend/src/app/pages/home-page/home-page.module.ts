import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { HomePageComponent } from './home-page.component';
import { InitialGameComponent } from './initial-game/initial-game.component';

@NgModule({
  declarations: [
    HomePageComponent,
    InitialGameComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class HomePageModule { }
