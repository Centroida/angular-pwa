import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {MaterialModule} from "./material/material.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {AngularFireModule} from "angularfire2";
import {RouterModule} from "@angular/router";
import {routing} from "./app.routes";
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { NoInternetComponent } from './shared/no-internet/no-internet.component';
import {NasaService} from "./services/nasa.service";
import {InfoComponent} from "./components/info/info.component";
// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyDwRirzSQ6qpDvjrhlACnVr03HG76xXukQ",
  authDomain: "angular2-pwa-8efb6.firebaseapp.com",
  databaseURL: "https://angular2-pwa-8efb6.firebaseio.com",
  storageBucket: "angular2-pwa-8efb6.appspot.com",
  messagingSenderId: "711819828193"
};


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
    MaterialModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [NasaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
