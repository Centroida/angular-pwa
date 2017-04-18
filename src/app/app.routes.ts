import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DrinksComponent} from "./components/drinks/drinks.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {PictureOfTheDayComponent} from "./components/picture-of-the-day/picture-of-the-day.component";

const appRoutes: Routes = [
  {path: '', redirectTo: 'pictureOfTheDay', pathMatch: 'full'},
  {path: 'beers', component: DrinksComponent},
  {path: 'pictureOfTheDay', component: PictureOfTheDayComponent},
  {path: "**", component: NotFoundComponent,  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
