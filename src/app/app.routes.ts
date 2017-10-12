/**
 * Copyright (c) 2017 Centroida.Ai All rights reserved.
 */

import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {AppCustomPreloader} from "./app-custom-preloading";

const appRoutes: Routes = [
    {path: '', redirectTo: 'pictureOfTheDay', pathMatch: 'full'},

    {
        path: 'books',
        loadChildren: 'app/books/books.module#BooksModule',
        data: {
            preload: false
        }
    },
    {
        path: 'pictureOfTheDay',
        loadChildren: 'app/pictures/pictures.module#PicturesModule',
        data: {
            preload: false
        }
    },
    {path: "**", component: NotFoundComponent}
];


export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes, {useHash: true, preloadingStrategy: AppCustomPreloader});
