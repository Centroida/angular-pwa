/**
 * Created by svet on 4/15/2017.
 */
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CatsComponent} from "./components/cats/cats.component";
import {DogsComponent} from "./components/dogs/dogs.component";
import {ElephantsComponent} from "./components/elephants/elephants.component";


const appRoutes: Routes = [
  { path: 'cats', component: CatsComponent},
  { path: 'dogs', component: DogsComponent},
  { path: 'elephants', component: ElephantsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
