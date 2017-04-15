import {Component, OnInit} from '@angular/core';
import {NasaService} from "../../services/nasa.service";

@Component({
  selector: 'app-tuesday',
  templateUrl: './tuesday.component.html',
  styleUrls: ['./tuesday.component.scss']
})
export class TuesdayComponent implements OnInit {

  public pic: string;
  public info: string;
  public hasError: boolean;

  constructor(private _nasaService: NasaService) {
  }

  ngOnInit() {
    this._nasaService.getImageOfTheDay('2017-02-24').subscribe(
      (res) => {
        if (res) {
          this.pic = res.url;
          this.info = res.explanation;
        }
      },
      (err) => this.hasError = true
    );
  }

}
