import { Injectable } from '@angular/core';
import {RequestOptions, Headers, Http} from "@angular/http";

@Injectable()
export class NasaService {

  constructor(private http: Http) { }

  getImageOfTheDay(date:string) {
    return this.http.get(`https://api.nasa.gov/planetary/apod?api_key=rTwZovLn60smJqOHYzWlg1vOMBr58dWXHKtAnaIo&date=${date}`, this.getRequestHeaders())
      .map(res => res.json());
  }

  public getRequestHeaders() {
    const headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    return new RequestOptions({headers: headers});
  }
}
