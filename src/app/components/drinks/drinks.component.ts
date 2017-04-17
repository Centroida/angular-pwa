import { Component, OnInit } from '@angular/core';
import {DrinksService} from "../../services/drinks.service";

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {
  public beers: Array<any>;
  public hasError: any;
  public constructor(private _drinksService: DrinksService) { }

  public ngOnInit() {
    this._drinksService.getBeers().subscribe(
      (res) => this.beers = res,
      (err) => this.hasError = true
    );
  }
}
