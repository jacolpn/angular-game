import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import ngx-translate and the http loader.
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { loader } from './shared/utils/http-loader-factory';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({ loader })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
