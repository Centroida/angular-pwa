import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {InfoComponent} from "./components/info/info.component";
import {DrinksComponent} from "./components/drinks/drinks.component";

const appRoutes: Routes = [
  {path: 'info', component: InfoComponent},
  {path: 'beers', component: DrinksComponent},
  {path: 'pictureOfTheDay', component: InfoComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
