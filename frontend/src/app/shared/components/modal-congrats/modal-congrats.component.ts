import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { UtilService } from 'src/app/shared/services/util.service';

@Component({
    selector: 'app-modal-congrats',
    templateUrl: './modal-congrats.component.html',
    styleUrls: ['./modal-congrats.component.css']
})
export class ModalCongratsComponent {

    constructor(public util: UtilService, public router: Router) { }

    confirm() {
        this.util.congrats = false;

        if (this.util.level === 6) {
            this.router.navigate(['/season']);
        }
    }

    displayText() {
        switch (this.util.level - 1) {
            case 1:
                return 'Parabéns, conseguimos dar início do processo de aterrissagem e aprendemos a utilizar a “Interpolação” do angular.';
            case 2:
                return 'Parabéns, conseguimos camuflar e aprender como utilizar o “Property Binding” do Angular!';
            case 3:
                return 'Parabéns,chegamos em Marte!! Conseguimos diminuir os propulsores e aprender como utilizar o “Pipe” do Angular!';
            case 4:
                return 'Parabéns, você conseguiu despressurizar a porta e aprender Two-way data binding.';
            case 5:
                return 'Parabéns, chegamos em Marte em segurança! Não paramos por ai, na próxima temporada iremos aprender conceitos avançados de Angular e aproveitaremos para matar outros Bilu’s.';
            case 6:
                return 'BEM VINDO À MARTE'
            default:
                return '';
        }
    }

    displayTextButton() {
        if (this.util.level < 6) {
            return 'Continuar';
        }

        return 'Próxima temporada';
    }
}
