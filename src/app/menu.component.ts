/**
 * Created by svet on 4/15/2017.
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'menu',
    templateUrl: 'menu.template.html'
})
export class MenuComponent {
  public navigationRoutes:Array<Object>;

  constructor() {
    this.navigationRoutes = [
      {
        name: 'Stores',
        icon: 'local_offer',
        url: './stores'
      },
      {
        name: 'Analytics',
        icon: 'show_chart',
        url: './analytics'
      },
      {
        name: 'Settings',
        icon: 'settings',
        url: './settings'
      }
    ]
  }
}
