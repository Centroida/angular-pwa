import {Injectable} from '@angular/core';
import {AngularFire} from "angularfire2";
import {Http, RequestOptions, Headers} from "@angular/http";


@Injectable()
export class ImagesService {

  constructor(private af: AngularFire, private http: Http) {
  }

  public getCats() {

    return this.http.get("http://milenabooks.azurewebsites.net/api/Books", this.getRequestHeaders())
      .map(res => res.json());
  }

  public getDogs() {
    return this.af.database.list('/dogs');
  }
  public getRequestHeaders() {
    const headers: Headers = new Headers();
    headers.append('Accept', 'application/json');
    return new RequestOptions({headers: headers});
  }
}
