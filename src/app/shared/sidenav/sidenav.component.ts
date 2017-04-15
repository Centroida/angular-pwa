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
        name: 'Cats',
        url: './cats'
      },
      {
        name: 'Dogs',
        url: './dogs'
      },
      {
        name: 'Elephants',
        url: './elephants'
      }
    ];
  }

  ngOnInit() {
  }
}
