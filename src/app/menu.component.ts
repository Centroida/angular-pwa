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
    ]
  }
}
