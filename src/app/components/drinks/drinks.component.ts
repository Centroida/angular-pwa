import { Component, OnInit } from '@angular/core';
import {DrinksService} from "../../services/drinks.service";

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  public beers: any;
  constructor(private _drinksService: DrinksService) { }

  ngOnInit() {
    this._drinksService.getBeers().subscribe(
      (res) => this.beers = res);
  }

}
