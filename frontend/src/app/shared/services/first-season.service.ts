import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstSeasonService {
    level: number;
    lastLevel: boolean;
    congrats: boolean;

    constructor(public router: Router) {
        this.level = localStorage.getItem('level') ? Number(localStorage.getItem('level')) : 1;
    }

    nextLevel() {
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

            this.lastLevel = true;
            this.level = Number(localStorage.getItem('level'));
        }
    }

    startLevel() {
        if (!localStorage.getItem('level')) {
            localStorage.setItem('level', '1');
        }
    }

    titleFirstSeason() {
        if (this.router.routerState.snapshot.url.indexOf('season/start-introduction') > 0) {
            return 'INÍCIO'
        }

        if (this.router.routerState.snapshot.url.indexOf('season/first') > 0) {
            switch (this.level) {
                case 1:
                    return 'FASE 1 - INICIANDO O PROCEDIMENTO DE ATERRISSAGEM';
                case 2:
                    return 'FASE 2 - CAMUFLAGEM DA NAVE';
                case 3:
                    return 'FASE 3 - DIMINUIÇÃO DOS PROPULSORES';
                case 4:
                    return 'FASE 4 - DESPRESSURIZAÇÃO DA NAVE';
                case 5:
                    return 'FASE 5 - SAINDO DA NAVE';
                case 6:
                    return 'BEM VINDO À MARTE'
                default:
                    return '';
            }
        }

        return '';
    }
}
