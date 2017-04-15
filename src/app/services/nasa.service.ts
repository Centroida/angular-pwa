import {Injectable} from '@angular/core';
import {RequestOptions, Headers, Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class NasaService {

  constructor(private http: Http) {
  }

  getImageOfTheDay(date: string): Observable<any> {
    return this.http.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`, this.getRequestHeaders())
      .map(res => res.json())
      .catch(err => Observable.throw(err));
  }

  public getRequestHeaders() {
    const headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    return new RequestOptions({headers: headers});
  }
}
