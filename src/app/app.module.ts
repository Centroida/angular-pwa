/**
 * Copyright (c) 2017 Centroida.Ai All rights reserved.
 */

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {routing} from "./app.routes";
import {AppCustomPreloader} from "./app-custom-preloading";
import {SharedModule} from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        RouterModule,
        routing,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        SharedModule
    ],
    providers: [AppCustomPreloader],
    bootstrap: [AppComponent]
})
export class AppModule {
}
