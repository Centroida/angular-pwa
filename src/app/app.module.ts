import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {MaterialModule} from "./material/material.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {routing} from "./app.routes";
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { NoInternetComponent } from './shared/no-internet/no-internet.component';
import {NasaService} from "./services/nasa.service";
import {InfoComponent} from "./components/info/info.component";
import {DrinksService} from "./services/drinks.service";
import { DrinksComponent } from './components/drinks/drinks.component';
import {TuesdayComponent} from "./components/tuesday/tuesday.component";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NoInternetComponent,
    InfoComponent,
    DrinksComponent,
    TuesdayComponent
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
  providers: [NasaService , DrinksService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
