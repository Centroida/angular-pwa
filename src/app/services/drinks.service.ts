import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()
export class DrinksService {

  constructor(private http: Http) {
  }

  getBeers(): Observable<any> {
    return this.http
      .get(`https://api.punkapi.com/v2/beers?page=1&per_page=12`,
        this.getRequestHeaders())
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  public getRequestHeaders() {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return new RequestOptions({headers: headers});
  }

}
