import { Component, OnInit } from '@angular/core';

import { UtilService } from './../../../services/util.service';

import { option } from './panel-root-mock';

import { IPanelRoot } from './../../../interfaces/panel-root.interface';

@Component({
  selector: 'app-panel-root',
  templateUrl: './panel-root.component.html',
  styleUrls: ['./panel-root.component.css']
})
export class PanelRootComponent implements OnInit {
    options: Array<IPanelRoot> = [];

    constructor(public util: UtilService) { }

    ngOnInit(): void {
        this.fillText();
    }

    fillText() {
        for (let i = 0; i <= this.util.level - 1; i++) {
            this.options.push(option[i]);
        }
    }
}
