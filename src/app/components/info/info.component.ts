import {Component} from '@angular/core';
import {NasaService} from "../../services/nasa.service";

@Component({
  selector: 'app-monday',
  templateUrl: 'info.component.html',
  styleUrls: ['info.component.scss']
})
export class InfoComponent {

  public pic: string;
  public info: string;
  public hasError: boolean;
  constructor(private _nasaService: NasaService) {
  }

  onSelectDate(date:any) {
    let selectedDate = new Date(date.value);
    let year = selectedDate.getFullYear();
    let month = selectedDate.getMonth() + 1;
    let day = selectedDate.getDate();
    let formattedDate = year + '-' + month + '-' + day;

    this._nasaService.getImageOfTheDay(formattedDate).subscribe(
      (res) => {
        if (res) {
          this.hasError = false;
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
