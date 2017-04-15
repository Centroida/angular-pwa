/**
 * Created by svet on 4/15/2017.
 */
import {StoresComponent} from "./stores.component";
import {AnalyticsComponent} from "./analytics.component";
import {SettingsComponent} from "./settings.component";


export const AppRoutes = [

  { path: 'stores', component: StoresComponent},
  { path: 'analytics', component: AnalyticsComponent},
  { path: 'settings', component: SettingsComponent}
];
