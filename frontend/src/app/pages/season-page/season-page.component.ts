import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-season-page',
    templateUrl: './season-page.component.html',
    styleUrls: ['./season-page.component.css']
})
export class SeasonPageComponent  {
    constructor(private router: Router) { }

    onNavigateSeason(): any {
        return this.router.navigate(['season/start-introduction']);
    }
}
