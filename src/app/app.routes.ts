import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {InfoComponent} from "./components/info/info.component";
import {DrinksComponent} from "./components/drinks/drinks.component";

const appRoutes: Routes = [
  {path: 'pictureOfTheDay', component: InfoComponent},
  {path: 'drinks', component: DrinksComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
