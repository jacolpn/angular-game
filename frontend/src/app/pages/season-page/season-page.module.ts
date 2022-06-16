import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeasonRoutingModule } from './season-page-routing.module';

import { SeasonPageComponent } from './season-page.component';
import { HelperModule } from './../../shared/components/helper/helper.module';
import { StartComponent } from './start/start.component';

@NgModule({
    declarations: [
        SeasonPageComponent,
        StartComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        SeasonRoutingModule,
        HelperModule
    ]
})
export class SeasonPageModule { }
