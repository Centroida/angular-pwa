import {Component} from '@angular/core';
import {NasaService} from "../../services/nasa.service";

@Component({
  selector: 'app-monday',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.scss']
})
export class InfoComponent {
  public selectedDate: string;
  public pictureOfTheDay: any;
  public hasError: boolean;

  constructor(private _nasaService: NasaService) {
  }

  onSelectDate(date) {
    const newDate = new Date(date.value).toISOString().substr(0, 10);
    this._nasaService.getImageOfTheDay(newDate).subscribe(
      (res) => this.pictureOfTheDay = res,
      (err) => this.hasError = true,
      () => {
        console.log("whats here");
      }
    );
  }

}
