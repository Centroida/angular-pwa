import {Component, OnInit} from '@angular/core';
import {ImagesService} from "../../services/images.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  public cats: Observable<any>;
  public internetConnection: boolean;

  constructor(private imgService: ImagesService) {
    this.internetConnection = window.navigator.onLine;
    this.cats = this.imgService.getCats();
    this.cats.subscribe(res => console.log(res));
  }

  ngOnInit() {
  }

}
