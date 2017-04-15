/**
 * Created by svet on 4/15/2017.
 */
import { Routes } from '@angular/router';
import {StoresComponent} from "./stores.component";
import {AnalyticsComponent} from "./analytics.component";
import {SettingsComponent} from "./settings.component";


export const ROUTES: Routes = [

  { path: 'stores', component: StoresComponent},
  { path: 'analytics', component: AnalyticsComponent},
  { path: 'settings', component: SettingsComponent}
];
