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
import {RouterModule, Routes} from "@angular/router";
import {PictureOfTheDayComponent} from "./components/picture-of-the-day/picture-of-the-day.component";
import {NasaService} from "./services/nasa.service";
import {SharedModule} from "../shared/shared.module";
import { PictureComponent } from './containers/picture/picture.component';

export const PICTURE_ROUTES: Routes = [

    {
        path: '', component: PictureComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        RouterModule.forChild(PICTURE_ROUTES),
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
    declarations: [PictureOfTheDayComponent, PictureComponent],
    providers: [NasaService]
})
export class PicturesModule {
}
