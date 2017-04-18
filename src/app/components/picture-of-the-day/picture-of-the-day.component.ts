import { Component } from '@angular/core';
import {NasaService} from "../../services/nasa.service";

@Component({
  selector: 'app-picture-of-the-day',
  templateUrl: './picture-of-the-day.component.html',
  styleUrls: ['./picture-of-the-day.component.scss']
})
export class PictureOfTheDayComponent {

  public hasError: any;
  public loading: boolean;
  public picOfTheDay: any;
  public dateOverRange: string;

  constructor(private _nasaService: NasaService) {
    this.dateOverRange = "";
  }

  public onSelectDate(date: any) {
    this.loading = true;
    const selectedDate = new Date(date);
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
    const formattedDate = year + '-' + month + '-' + day;

    this._nasaService.getImageOfTheDay(formattedDate).subscribe(
      (res) => {
        this.picOfTheDay = res;
        this.dateOverRange = "";
        this.loading = false;
        this.hasError = false;
      },
      (err) => {
        if (err.json().code === 400) {
          this.dateOverRange = err.json().msg;
        } else {
          this.dateOverRange = "";
          this.hasError = true;
        }
        this.loading = false;
      });
  }

}
