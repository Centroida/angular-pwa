import {Component, ViewEncapsulation} from '@angular/core';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Observable} from "rxjs";
import 'isomorphic-fetch';
declare const fetch;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/cats');
    console.log(window.navigator.onLine);
  }
  isOver(): boolean {
    console.log('hereee')
    return window.matchMedia(`(max-width: 960px)`).matches;
  }
}

