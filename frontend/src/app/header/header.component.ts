import { Component, Input, OnInit } from '@angular/core';

// import { user } from '../shared/mocks/header-mock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Input() user: Array<any> = [];

    constructor() { }

    ngOnInit(): void {
        // this.user = user;
    }
}
