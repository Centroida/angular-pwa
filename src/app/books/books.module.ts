/**
 * Copyright (c) 2017 Centroida.Ai All rights reserved.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatTooltipModule

} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {BooksService} from "./services/books.service";
import {RouterModule, Routes} from "@angular/router";
import {BooksComponent} from "./components/books/books.component";
import { BookComponent } from './containers/book/book.component';
import {SharedModule} from "../shared/shared.module";

export const BOOK_ROUTES: Routes = [

    {
        path: '', component: BookComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        RouterModule.forChild(BOOK_ROUTES),
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatInputModule,
        FlexLayoutModule,
        MatSidenavModule,
        MatTooltipModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatDatepickerModule,
        SharedModule
    ],
    declarations: [BooksComponent, BookComponent],
    providers: [BooksService]
})
export class BooksModule {
}
