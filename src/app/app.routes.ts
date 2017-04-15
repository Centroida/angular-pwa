/**
 * Created by svet on 4/15/2017.
 */
import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MondayComponent} from "./components/monday/monday/monday.component";
import {TuesdayComponent} from "./components/tuesday/tuesday/tuesday.component";


const appRoutes: Routes = [
  { path: 'monday', component: MondayComponent},
  { path: 'tuesday', component: TuesdayComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
