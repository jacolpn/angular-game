import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SeasonPageComponent } from './season-page.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
	{
		path: '',
		component: SeasonPageComponent
	},
    {
		path: 'start-introduction',
		component: StartComponent
	},
	{
		path: 'first',
		loadChildren: () => import('./first-season/first-season.module').then(module => module.FirstSeasonModule)
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeasonRoutingModule { }
