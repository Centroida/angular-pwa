import { Component, OnInit } from '@angular/core';
import {NasaService} from "../../../services/nasa.service";

@Component({
  selector: 'app-monday',
  templateUrl: './monday.component.html',
  styleUrls: ['./monday.component.scss']
})
export class MondayComponent implements OnInit {

  public pic:string;
  public info:string;

  constructor(private _nasaService: NasaService) { }

  ngOnInit() {
    this._nasaService.getImageOfTheDay('2017-02-23').subscribe((res)=>{
      if(res){
        this.pic = res.url;
        this.info = res.explanation;
      }
    })
  }

}
