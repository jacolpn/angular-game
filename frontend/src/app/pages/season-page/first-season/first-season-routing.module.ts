import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstSeasonComponent } from './first-season.component';


const routes: Routes = [
	{
		path: '',
		component: FirstSeasonComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstSeasonRoutingModule { }
