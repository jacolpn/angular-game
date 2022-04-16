import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { InitialGameComponent } from './initial-game/initial-game.component';

@NgModule({
  declarations: [
    HomePageComponent,
    InitialGameComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomePageModule { }
