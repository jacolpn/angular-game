import { Component } from '@angular/core';

import { option } from '../../../shared/mocks/helper-mock';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent  {
    options = option;

    constructor() { }
}
