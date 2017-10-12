import {Component, Input} from '@angular/core';
import { MatSidenav } from "@angular/material";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    @Input()
    public sidemenu: MatSidenav;

}
