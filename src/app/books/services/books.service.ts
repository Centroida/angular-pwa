/**
 * Copyright (c) 2017 Centroida.Ai All rights reserved.
 */

import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Book} from "./models";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BooksService {

    constructor(private http: Http) {
    }

    // TODO use an api with https otherwise the service worker wont work.
    public getBooks(): Observable<Book[]> {
        return this.http
            .get(`http://milenabooks.azurewebsites.net/api/Books`,
                this.getRequestHeaders())
            .map((res: Response) => res.json())
            .catch(err => Observable.throw(err));
    }

    public getRequestHeaders() {
        const headers: Headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        return new RequestOptions({headers: headers});
    }

}
