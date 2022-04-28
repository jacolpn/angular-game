import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '',
		pathMatch: 'full',
		component: HomePageComponent
	},
	{
		path: 'season',
		loadChildren: () => import('./pages/season-page/season-page.module').then(module => module.SeasonPageModule)
	}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
