import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-season-page',
    templateUrl: './season-page.component.html',
    styleUrls: ['./season-page.component.css']
})
export class SeasonPageComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit(): void { }

    onNavigateSeason(): any {
        return this.router.navigate(['season/start-introduction']);
    }
}
