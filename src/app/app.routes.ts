import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {InfoComponent} from "./components/info/info.component";
import {DrinksComponent} from "./components/drinks/drinks.component";
import {TuesdayComponent} from "./components/tuesday/tuesday.component";

const appRoutes: Routes = [
  {path: 'info', component: InfoComponent},
  {path: 'drinks', component: DrinksComponent},
  {path: 'tuesday', component: TuesdayComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
