/**
 * Copyright (c) 2017 Centroida.Ai All rights reserved.
 */

import {Component, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class SidenavComponent {

    public navigationRoutes: Array<MainNavigationRoutes>;

    public constructor(public _router: Router) {
        this.navigationRoutes = [
            {
                name: 'Picture of the day',
                url: 'pictureOfTheDay'
            },
            {
                name: 'Books',
                url: 'books',
            }
        ];
    }
}

interface MainNavigationRoutes {
    name: string;
    url: string;
}
