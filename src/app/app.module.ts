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
import {NasaService} from "./services/nasa.service";
import {DrinksService} from "./services/drinks.service";
import { DrinksComponent } from './components/drinks/drinks.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {PictureOfTheDayComponent} from "./components/picture-of-the-day/picture-of-the-day.component";

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    PictureOfTheDayComponent,
    DrinksComponent,
    NotFoundComponent
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
