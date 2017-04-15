/**
 * Created by svet on 4/15/2017.
 */
import {ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CatsComponent} from "./cats.component";
import {DogsComponent} from "./dogs.component";
import {ElephantsComponent} from "./elephants.component";


var appRoutes = [
  { path: 'cats', component: CatsComponent},
  { path: 'dogs', component: DogsComponent},
  { path: 'elephants', component: ElephantsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
