import { AfterContentChecked, Component } from '@angular/core';

import { UtilService } from 'src/app/shared/services/util.service';

import { firstChallenge } from 'src/app/shared/mocks/first-season/helper-first-mock';

@Component({
    selector: 'app-first-season',
    templateUrl: './first-season.component.html',
    styleUrls: ['./first-season.component.css']
})
export class FirstSeasonComponent implements AfterContentChecked {
    camouflage: boolean = false
    pressurization: boolean = true;
    hatch: boolean = false;
    options: any;

    constructor(public util: UtilService) { }

    ngAfterContentChecked(): void {
        this.options = firstChallenge[this.util.level - 1];
    }
}
