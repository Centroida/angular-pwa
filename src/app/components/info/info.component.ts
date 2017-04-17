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
  public errorMessage: string = null;
  constructor(private _nasaService: NasaService) {
  }

  public onSelectDate(date: any) {
    const selectedDate = new Date(date.value);
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
    const formattedDate = year + '-' + month + '-' + day;

    this._nasaService.getImageOfTheDay(formattedDate).subscribe(
      (res) => {
        if (res) {
          this.errorMessage = null;
          this.pic = res.url;
          this.info = res.explanation;
        }
      },
      (err) => {
        if(err.json().msg){
          this.errorMessage = err.json().msg;
        }else{
          this.pic = '';
          this.info = '';
        }
    });
  }
}
