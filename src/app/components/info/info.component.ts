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
  public hasInternet: boolean = true;
  public ddate:any;
  constructor(private _nasaService: NasaService) {
  }

  public onSelectDate(date: any) {
    const selectedDate = new Date(date);
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();
    const formattedDate = year + '-' + month + '-' + day;

    this._nasaService.getImageOfTheDay(formattedDate).subscribe(
      (res) => {
        if (res) {
          this.hasInternet = true;
          this.errorMessage = null;
          this.pic = res.url;
          this.info = res.explanation;
        }
      },
      (err) => {
        if(err.json().msg){
          this.errorMessage = err.json().msg;
        }else{
          this.hasInternet = false;
        }
        this.pic = '';
        this.info = '';
    });
  }
}
