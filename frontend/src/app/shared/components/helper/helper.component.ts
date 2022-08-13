import { Router } from '@angular/router';
import { Component, Input, OnChanges } from '@angular/core';

import { IHelper } from './../../interfaces/helper.interface';

@Component({
    selector: 'app-helper',
    templateUrl: './helper.component.html',
    styleUrls: ['./helper.component.css']
})
export class HelperComponent implements OnChanges {
    @Input() options: IHelper = {}

    index: number = 0;
    hiddenText: boolean = false;

    constructor(private router: Router) { }

    ngOnChanges(): void {
        this.index = 0;
    }

    onNavigate() {
        return this.router.navigate([this.options.routeSingleButton]);
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

    onHiddenText() {
        if (this.options.enableHiddenText) {
            return this.hiddenText = !this.hiddenText;
        }

        return false;
    }
}
