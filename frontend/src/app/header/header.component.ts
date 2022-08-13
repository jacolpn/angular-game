import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Input() user: Array<any> = [];

    constructor(public util: UtilService, public router: Router) { }

    displayTitle() {
        if (this.router.routerState.snapshot.url.indexOf('season/start-introduction') > 0) {
            return 'INÍCIO'
        }

        if (this.router.routerState.snapshot.url.indexOf('season/first') > 0) {
            switch (this.util.level) {
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
