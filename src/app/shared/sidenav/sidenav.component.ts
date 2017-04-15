import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {
  public navigationRoutes: Array<Object>;

  constructor() {
    this.navigationRoutes = [
      {
        name: 'Picture of the day',
        url: './info'
      },
      {
        name: 'Tuesday',
        url: './tuesday'
      }
    ];
  }

  ngOnInit() {
  }

}
