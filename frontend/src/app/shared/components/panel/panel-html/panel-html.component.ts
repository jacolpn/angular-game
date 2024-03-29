import { Component, Input, OnInit } from '@angular/core';

import { FirstSeasonService } from 'src/app/shared/services/first-season.service';

import { option } from './panel-html-mock';

@Component({
    selector: 'app-panel-html',
    templateUrl: './panel-html.component.html',
    styleUrls: ['./panel-html.component.css']
})
export class PanelHtmlComponent implements OnInit {
    @Input() options: any;
    @Input() level: number;

    firstLevel: string;
    secondLevel: string;
    thirdLevel: string;
    fourthLevel: string;
    fifthLevel: string;

    constructor(public firstSeason: FirstSeasonService) { }

    ngOnInit(): void {
        this.level = this.firstSeason.level;
        this.options = option;
        this.firstLevel = localStorage.getItem('first-level-html') ? localStorage.getItem('first-level-html') : '';
        this.secondLevel = localStorage.getItem('second-level-html') ? localStorage.getItem('second-level-html') : '';
        this.thirdLevel = localStorage.getItem('third-level-html') ? localStorage.getItem('third-level-html') : '';
        this.fourthLevel = localStorage.getItem('fourth-level-html') ? localStorage.getItem('fourth-level-html') : '';
        this.fifthLevel = localStorage.getItem('fifth-level-html') ? localStorage.getItem('fifth-level-html') : '';
    }

    conclude(value: any, id: number) {
        if (id === 1 && value.target.value.trim().toLowerCase().replace(/\s/g, '') === `{{${localStorage.getItem('first-level-ts')}}}`) {
            this.firstLevel = value.target.value;
            localStorage.setItem('first-level-html', `{{ ${localStorage.getItem('first-level-ts')} }}`);
            this.firstSeason.congrats = true;
        }

        if (id === 2 && value.target.value.trim().toLowerCase().replace(/\s/g, '') === '[class]') {
            this.secondLevel = value.target.value;
            localStorage.setItem('second-level-html', value.target.value);

            if (localStorage.getItem('second-level-ts')) {
                this.firstSeason.congrats = true;
            }
        }

        if (id === 3 && value.target.value.trim().toLowerCase().replace(/\s/g, '') === '{{50|percent}}') {
            this.thirdLevel = value.target.value;
            localStorage.setItem('third-level-html', value.target.value);
            this.firstSeason.congrats = true;
        }

        if (id === 4 && value.target.value.trim().toLowerCase().replace(/\s/g, '') === '[(ngmodel)]') {
            this.fourthLevel = value.target.value;
            localStorage.setItem('fourth-level-html', value.target.value);
            this.firstSeason.congrats = true;
        }

        if (id === 5 && value.target.value.trim().toLowerCase().replace(/\s/g, '') === '(click)') {
            this.fifthLevel = value.target.value;
            localStorage.setItem('fifth-level-html', value.target.value);
            this.firstSeason.congrats = true;
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

        if (this.firstSeason.level === 3 && id === 3) {
            return false;
        }

        if (this.firstSeason.level === 4 && id === 4) {
            return false;
        }

        if (this.firstSeason.level === 5 && id === 5) {
            return false;
        }

        return true;
    }

    displayInput(id: any) {
        if (id === 1 && localStorage.getItem('first-level-html') === null) {
            return true;
        }

        if (id === 2 && localStorage.getItem('second-level-html') === null) {
            return true;
        }

        if (id === 3 && localStorage.getItem('third-level-html') === null) {
            return true;
        }

        if (id === 4 && localStorage.getItem('fourth-level-html') === null) {
            return true;
        }

        if (id === 5 && localStorage.getItem('fifth-level-html') === null) {
            return true;
        }

        return false;
    }

    displaySpan(id: any) {
        if (id === 1 && localStorage.getItem('first-level-html') !== null) {
            return localStorage.getItem('first-level-html');
        }

        if (id === 2 && localStorage.getItem('second-level-html') !== null) {
            return localStorage.getItem('second-level-html');
        }

        if (id === 3 && localStorage.getItem('third-level-html') !== null) {
            return localStorage.getItem('third-level-html');
        }

        if (id === 4 && localStorage.getItem('fourth-level-html') !== null) {
            return localStorage.getItem('fourth-level-html');
        }

        if (id === 5 && localStorage.getItem('fifth-level-html') !== null) {
            return localStorage.getItem('fifth-level-html');
        }

        return '';
    }
}
