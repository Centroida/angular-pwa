import {Component} from '@angular/core';
import {NasaService} from "../../services/nasa.service";

@Component({
  selector: 'app-monday',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.scss']
})
export class InfoComponent {
  public pictureOfTheDay: any;
  public hasError: boolean;

  public constructor(private _nasaService: NasaService) {
  }

  public onSelectDate(date: any) {
    const selectedDate = new Date(date.value);
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
    const formattedDate = year + '-' + month + '-' + day;

    this._nasaService.getImageOfTheDay(formattedDate).subscribe(
      (res) => this.pictureOfTheDay = res,
      (err) => this.hasError = true,
      () => {
        console.log("whats here");
      }
    );
  }

}
