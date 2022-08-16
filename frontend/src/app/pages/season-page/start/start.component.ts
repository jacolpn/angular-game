import { Component } from '@angular/core';

import { helperStart } from '../../../shared/mocks/first-season/helper-start-mock';

import { IHelper } from './../../../shared/interfaces/helper.interface';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent  {
    options: IHelper = helperStart;

    constructor() { }
}
