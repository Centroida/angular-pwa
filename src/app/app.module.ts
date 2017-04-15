import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MaterialModule} from "./material/material.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MenuComponent} from "./menu.component";
import {RouterModule} from "@angular/router";
import {StoresComponent} from "./stores.component";
import {AnalyticsComponent} from "./analytics.component";
import {SettingsComponent} from "./settings.component";
import {AppRoutes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StoresComponent,
    AnalyticsComponent,
    SettingsComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
