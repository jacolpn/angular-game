import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { HomePageComponent } from './home-page.component';
import { InitialGameComponent } from './initial-game/initial-game.component';

import { routes } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    HomePageComponent,
    InitialGameComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule { }
