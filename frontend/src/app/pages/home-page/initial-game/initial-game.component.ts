import { Component } from '@angular/core';

@Component({
    selector: 'app-initial-game',
    templateUrl: './initial-game.component.html',
    styleUrls: ['./initial-game.component.css']
})
export class InitialGameComponent  {
    gameText: string = '';
    gameTextResult: string = '{{ interpolation }}';

    constructor() { }

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
