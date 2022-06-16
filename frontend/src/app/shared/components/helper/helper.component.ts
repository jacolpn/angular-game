import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

import { IHelper } from './../../interfaces/helper.interface';

import { option } from '../../mocks/helper-mock';

@Component({
    selector: 'app-helper',
    templateUrl: './helper.component.html',
    styleUrls: ['./helper.component.css']
})
export class HelperComponent implements OnInit {
    @Input() options: IHelper = {}

    index: number = 0;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.options = option;
    }

    onNavigate() {
        return this.router.navigate(['season']);
    }

    onDisabledButtonNext() {
        return this.index === (this.options?.paragraph?.length - 1)
    }

    onNextInstruction() {
        if (this.index < (this.options?.paragraph?.length - 1)) {
            return this.index++;
        }

        return this.index;
    }

    onDisabledButtonPrevious() {
        return this.index === 0;
    }

    onPreviousInstruction() {
        if (this.index > 0) {
            return this.index--;
        }

        return this.index;
    }
}
