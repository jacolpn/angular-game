import { Component, Input, OnInit } from '@angular/core';

import { option } from './panel-ts-mock';

import { FirstSeasonService } from 'src/app/shared/services/first-season.service';

@Component({
  selector: 'app-panel-ts',
  templateUrl: './panel-ts.component.html',
  styleUrls: ['./panel-ts.component.css']
})
export class PanelTsComponent implements OnInit {
    @Input() options: any;
    @Input() level: number;

    firstLevel: string;
    secondLevel: string;

    constructor(public firstSeason: FirstSeasonService) { }

    ngOnInit(): void {
        this.level = this.firstSeason.level;
        this.options = option;
        this.firstLevel = localStorage.getItem('first-level-ts') ? localStorage.getItem('first-level-ts') : '';
        this.secondLevel = localStorage.getItem('second-level-ts') ? localStorage.getItem('second-level-ts') : '';
    }

    showTextInit(type: string, item: any) {
        switch (type) {
            case 'text':
                if (this.firstLevel !== '' && item.id === 1) {
                    return true;
                }

                break;
            case 'input':
                if (this.firstLevel === '' && item.id === 1) {
                    return true;
                }

                break;
            default:
                return false;
        }

        return false;
    }

    showTextFinal(type: string, item: any) {
        switch (type) {
            case 'text':
                if (this.secondLevel !== '' && item.id === 2) {
                    return true;
                }

                break;
            case 'input':
                if (this.secondLevel === '' && item.id === 2) {
                    return true;
                }

                break;
            default:
                return false;
        }

        return false;
    }

    conclude(value: any, id: number) {
        if (value.target.value.trim() !== '' && id === 1) {
            this.firstLevel = value.target.value;
            localStorage.setItem('first-level-ts', value.target.value);
        }

        if (value.target.value.trim().replace(/\s/g, '') === 'false' && id === 2) {
            this.secondLevel = value.target.value;
            localStorage.setItem('second-level-ts', value.target.value);

            if (localStorage.getItem('second-level-html')) {
                this.firstSeason.congrats = true;
            }
        }

        this.firstSeason.nextLevel();
    }

    disableInput(id: any) {
        if (this.firstSeason.level === 1 && id === 1) {
            return false;
        }

        if (this.firstSeason.level === 2 && id === 2) {
            return false;
        }

        return true;
    }

    placeholderInput(id: any) {
        if (this.firstSeason.level <= 1 || !this.firstSeason.level) {
            return 'false';
        }

        return '';
    }
}
