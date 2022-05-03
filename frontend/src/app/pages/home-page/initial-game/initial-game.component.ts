import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-initial-game',
    templateUrl: './initial-game.component.html',
    styleUrls: ['./initial-game.component.css']
})
export class InitialGameComponent implements OnInit {
    gameText: string = '';
    gameTextResult: string = '{{ interpolation }}';

    constructor() { }

    ngOnInit(): void { }

    onValidGame(value: string) {
        value.replace(/\s/g, '').toLocaleUpperCase();

        switch(value) {
            case 'interpolation':
                return true;
                break;
            case '{{interpolation}}':
                return true;
                break;
            default:
                return false;
        }
    }
}
