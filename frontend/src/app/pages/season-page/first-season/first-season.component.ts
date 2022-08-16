import { AfterContentChecked, Component, OnInit } from '@angular/core';

import { helperText, paragraph } from 'src/app/shared/mocks/first-season/helper-text-mock';

import { IHelper } from './../../../shared/interfaces/helper.interface';

import { FirstSeasonService } from 'src/app/shared/services/first-season.service';

@Component({
    selector: 'app-first-season',
    templateUrl: './first-season.component.html',
    styleUrls: ['./first-season.component.css']
})
export class FirstSeasonComponent implements OnInit, AfterContentChecked {
    camouflage: boolean = false
    pressurization: boolean = true;
    hatch: boolean = false;
    options: IHelper;

    constructor(public firstSeason: FirstSeasonService) { }

    ngOnInit(): void {
        this.firstSeason.startLevel();
        this.options = helperText;
    }

    ngAfterContentChecked(): void {
        this.options.paragraph = paragraph[this.firstSeason.level - 1];

        if (this.firstSeason.level >= 3) {
            this.camouflage = true;
        }

        if (this.firstSeason.level >= 5) {
            this.pressurization = false;
            this.hatch = true;
        }
    }
}
