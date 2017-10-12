/**
 * Copyright (c) 2017 Centroida.Ai All rights reserved.
 */

import {Injectable} from '@angular/core';
import {RequestOptions, Headers, Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NasaService {

    constructor(private http: Http) {
    }

    public getImageOfTheDay(date: string): Observable<any> {
        return this.http
            .get(`https://api.nasa.gov/planetary/apod?api_key=rTwZovLn60smJqOHYzWlg1vOMBr58dWXHKtAnaIo&date=${date}`,
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
