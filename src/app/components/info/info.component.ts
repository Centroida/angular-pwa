import {Component, OnInit} from '@angular/core';
import {NasaService} from "../../services/nasa.service";

@Component({
  selector: 'app-monday',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.scss']
})
export class InfoComponent {

  public pic: string;
  public info: string;
  public selectedDate: string;
  public hasError: boolean;
  constructor(private _nasaService: NasaService) {
  }

  onSelectDate(date) {
    const newDate = new Date(date.value);
    this.selectedDate = newDate.getFullYear() + '-' + newDate.getDay() + '-' + newDate.getMonth();
    this._nasaService.getImageOfTheDay(this.selectedDate).subscribe(
      (res) => {
        if (res) {
          this.pic = res.url;
          this.info = res.explanation;
        }
      },
      (err) => {
        this.hasError = true;
        this.pic = '';
        this.info = '';
      });
    }

}
