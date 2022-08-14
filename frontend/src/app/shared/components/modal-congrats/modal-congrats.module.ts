import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCongratsComponent } from './modal-congrats.component';

@NgModule({
    declarations: [ModalCongratsComponent],
    exports: [ModalCongratsComponent],
    imports: [CommonModule]
})
export class ModalCongratsModule { }
