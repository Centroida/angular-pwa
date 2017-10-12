/**
 * Copyright (c) 2017 Centroida.Ai All rights reserved.
 */

import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatTooltipModule

} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SidenavComponent} from "./sidenav/sidenav.component";
import { NavbarComponent } from './navbar/navbar.component';
import {NotFoundComponent} from "./not-found/not-found.component";
import { WrapperComponent } from './wrapper/wrapper.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatToolbarModule,
        MatInputModule,
        FlexLayoutModule,
        MatSidenavModule,
        MatTooltipModule,
        MatListModule,
        MatDatepickerModule
    ],
    declarations: [
        SidenavComponent,
        NavbarComponent,
        NotFoundComponent,
        WrapperComponent
    ],
    exports: [
        SidenavComponent,
        NavbarComponent,
        NotFoundComponent,
        WrapperComponent
    ],
    providers: []
})
export class SharedModule {
}
