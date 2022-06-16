import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelperComponent } from './helper.component';

@NgModule({
    declarations: [HelperComponent],
    imports: [
        CommonModule,
        TranslateModule
    ],
    exports: [HelperComponent]
})
export class HelperModule { }
