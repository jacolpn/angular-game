import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
    level: number;

    constructor() {
        this.level = localStorage.getItem('level') ? Number(localStorage.getItem('level')) : 1;
    }

    updateLevel() {
        if (localStorage.getItem('first-level-html') && localStorage.getItem('first-level-ts')) {
            localStorage.setItem('level', '2');

            this.level = Number(localStorage.getItem('level'));
        }

        if (localStorage.getItem('second-level-html') && localStorage.getItem('second-level-ts')) {
            localStorage.setItem('level', '3');

            this.level = Number(localStorage.getItem('level'));
        }

        if (localStorage.getItem('third-level-html')) {
            localStorage.setItem('level', '4');

            this.level = Number(localStorage.getItem('level'));
        }

        if (localStorage.getItem('fourth-level-html')) {
            localStorage.setItem('level', '5');

            this.level = Number(localStorage.getItem('level'));
        }

        if (localStorage.getItem('fifth-level-html')) {
            localStorage.setItem('level', '6');

            this.level = Number(localStorage.getItem('level'));
        }
    }
}
