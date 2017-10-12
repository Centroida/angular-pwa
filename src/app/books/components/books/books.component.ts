/**
 * Copyright (c) 2017 Centroida.Ai All rights reserved.
 */

import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {BooksService} from "../../services/books.service";
import {Book} from "../../services/models";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-books',
    templateUrl: './books.component.html',
    styleUrls: ['./books.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class BooksComponent implements OnInit, OnDestroy {

    public books: Book[];
    public hasError: any;
    public loading: boolean;
    private subscriptionList: Subscription[] = [];

    public constructor(private _drinksService: BooksService) {
    }

    public ngOnInit() {
        this.loading = true;
        this.subscriptionList.push(
            this._drinksService.getBooks().subscribe(
                (res: Book[]) => {
                    this.books = res;
                    this.loading = false;
                    this.hasError = false;
                },
                () => {
                    this.hasError = true;
                    this.loading = false;
                }
            )
        );
    }

    public ngOnDestroy() {
        this.subscriptionList.forEach((sub: Subscription) => {
            sub.unsubscribe();
        });
    }
}
