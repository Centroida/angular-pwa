/**
 * Created by svet on 4/15/2017.
 */
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { InfoComponent} from "./components/info/info.component";

const appRoutes: Routes = [
  { path: 'info', component: InfoComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
