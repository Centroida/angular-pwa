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

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NoInternetComponent,
    InfoComponent
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
  providers: [NasaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
