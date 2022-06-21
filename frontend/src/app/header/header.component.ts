import { Component, Input } from '@angular/core';

// import { user } from '../shared/mocks/header-mock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
    @Input() user: Array<any> = [];

    constructor() { }
}
