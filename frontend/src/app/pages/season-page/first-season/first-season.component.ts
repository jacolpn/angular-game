import { Component, OnInit } from '@angular/core';

import { IHelper } from './../../../shared/interfaces/helper.interface';

import { firstChallenge } from 'src/app/shared/mocks/first-season/helper-first-mock';
import { firstCongrats } from 'src/app/shared/mocks/first-season/helper-first-congrats-mock';

@Component({
    selector: 'app-first-season',
    templateUrl: './first-season.component.html',
    styleUrls: ['./first-season.component.css']
})
export class FirstSeasonComponent implements OnInit {
    camouflage: boolean = false
    pressurization: boolean = true;
    hatch: boolean = false;
    options: IHelper;

    constructor() { }

    ngOnInit(): void {
        this.options = firstChallenge;
    }
}
