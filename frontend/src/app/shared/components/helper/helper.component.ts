import { Router } from '@angular/router';
import { Component, Input, OnChanges } from '@angular/core';

import { IHelper } from './../../interfaces/helper.interface';

@Component({
    selector: 'app-helper',
    templateUrl: './helper.component.html',
    styleUrls: ['./helper.component.css']
})
export class HelperComponent implements OnChanges {
    @Input() options: IHelper;

    index: number = 0;

    constructor(private router: Router) { }

    ngOnChanges(): void {
        this.index = 0;
    }

    onNavigate() {
        return this.router.navigate([this.options.routeSingleButton]);
    }

    disabledButton(type?: string) {
        if (type === 'previous') {
            return this.index === 0;
        }

        return this.index === (this.options?.paragraph?.length - 1);
    }

    changeInstruction(type: string) {
        if (type === 'previous' && this.index > 0) {
            return this.index--;
        }

        if (type == 'next' && this.index < (this.options?.paragraph?.length - 1)) {
            return this.index++;
        }

        return this.index;
    }

    hiddenText() {
        if (this.options.iconHiddenText) {
            return this.options.visible = !this.options.visible;
        }

        return false;
    }
}
