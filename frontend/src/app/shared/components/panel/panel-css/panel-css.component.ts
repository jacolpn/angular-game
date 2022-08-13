import { Component, Input, OnInit } from '@angular/core';

import { option } from './panel-css-mock';

@Component({
  selector: 'app-panel-css',
  templateUrl: './panel-css.component.html',
  styleUrls: ['./panel-css.component.css']
})
export class PanelCssComponent implements OnInit {
    @Input() options: any;

    constructor() { }

    ngOnInit(): void {
        this.options = option;
    }
}
