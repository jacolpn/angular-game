import { Component, Input } from '@angular/core';

import { FirstSeasonService } from 'src/app/shared/services/first-season.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input() user: Array<any> = [];

    constructor(public firstSeason: FirstSeasonService, ) { }

    displayTitle() {
        return this.firstSeason.titleFirstSeason();
    }
}
