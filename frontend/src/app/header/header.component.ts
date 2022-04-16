import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Input() user: Array<any> = [];

    constructor() { }

    ngOnInit(): void {
        // this.user = [{
        //     userName: 'Angular Game',
        //     image: 'assets/images/google.png'
        // }];
    }
}
