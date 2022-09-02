import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { FirstSeasonService } from 'src/app/shared/services/first-season.service';
import { helperCongrats } from '../../mocks/first-season/helper-congrats-mock';
import { IHelper } from './../../../shared/interfaces/helper.interface';

@Component({
    selector: 'app-modal-congrats',
    templateUrl: './modal-congrats.component.html',
    styleUrls: ['./modal-congrats.component.css']
})
export class ModalCongratsComponent implements OnInit {
    activeInput: boolean = true;
    options: IHelper;

    constructor(public firstSeason: FirstSeasonService, public router: Router) { }

    ngOnInit(): void {
        this.options = helperCongrats;
    }

    confirm() {
        if (this.firstSeason.level < 6) {
            this.firstSeason.congrats = false;
        }

        if (this.firstSeason.level === 6 && !this.firstSeason.lastLevel) {
            this.firstSeason.congrats = false;
            this.router.navigate(['/season']);
        }

        if (this.firstSeason.level === 6 && this.firstSeason.lastLevel) {
            this.firstSeason.lastLevel = false;
        }

    }

    displayText() {
        switch (this.firstSeason.level) {
            case 2:
                return 'Parabéns, conseguimos dar início do processo de aterrissagem e aprendemos a utilizar a “Interpolação” do angular.';
            case 3:
                return 'Parabéns, conseguimos camuflar e aprender como utilizar o “Property Binding” do Angular!';
            case 4:
                return 'Parabéns, chegamos em Marte!! Conseguimos diminuir os propulsores e aprender como utilizar o “Pipe” do Angular!';
            case 5:
                if (this.activeInput) {
                    return 'Para liberar a escotilha, precisaremos alterar o valor da variável "escotilhaTrancada" inserindo "liberada".';
                }

                return 'Parabéns, você conseguiu despressurizar a porta e aprender Two-way data binding.';
            case 6:
                if (this.firstSeason.lastLevel) {
                    return 'Parabéns, chegamos em Marte em segurança! Não paramos por ai, na próxima temporada iremos aprender conceitos avançados de Angular e aproveitaremos para matar outros Bilu’s.';
                }

                return 'Bem vindo à Marte!'
            default:
                return '';
        }
    }

    displayTextButton() {
        if (this.firstSeason.level < 6) {
            return 'continuar';
        }

        if (this.firstSeason.lastLevel) {
            return 'abrir a escotilha';
        }

        return 'próxima temporada';
    }

    conclude(value: any) {
        if (value.target.value.trim().toLowerCase().replace(/\s/g, '') === 'liberada') {
            this.activeInput = false;
        }
    }

    displayInput() {
        if (this.activeInput && this.firstSeason.level === 5) {
            return true;
        }

        return false;
    }
}
