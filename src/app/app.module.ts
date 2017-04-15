import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MaterialModule} from "./material/material.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MenuComponent} from "./menu.component";
import {RouterModule} from "@angular/router";
import {routing} from "./app.routes";
import {CatsComponent} from "./cats.component";
import {DogsComponent} from "./dogs.component";
import {ElephantsComponent} from "./elephants.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CatsComponent,
    DogsComponent,
    ElephantsComponent
  ],
  imports: [
    RouterModule,
    routing,
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
