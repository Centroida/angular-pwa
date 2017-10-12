/**
 * Copyright (c) 2017 Centroida.Ai All rights reserved.
 */

import {Component, OnDestroy} from '@angular/core';
import {MatDatepickerInputEvent} from "@angular/material";
import {NasaService} from "../../services/nasa.service";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'app-picture-of-the-day',
    templateUrl: './picture-of-the-day.component.html',
    styleUrls: ['./picture-of-the-day.component.scss']
})
export class PictureOfTheDayComponent implements OnDestroy {

    public hasError: any;
    public loading: boolean;
    public picOfTheDay: any;
    public dateOverRange: string;
    public maxDate: Date = new Date(Date.now());
    private subscriptionList: Subscription[] = [];

    constructor(private _nasaService: NasaService) {
        this.dateOverRange = "";
    }

    // TODO refactor
    public onSelectDate(date: MatDatepickerInputEvent<any>) {
        this.loading = true;
        const selectedDate = new Date(date.value);
        const year = selectedDate.getFullYear();
        const month = selectedDate.getMonth() + 1;
        const day = selectedDate.getDate();
        const formattedDate = year + '-' + month + '-' + day;

        this._nasaService.getImageOfTheDay(formattedDate).subscribe(
            (res) => {
                // TODO add an interface for the response
                this.picOfTheDay = res;
                this.dateOverRange = "";
                this.loading = false;
                this.hasError = false;
            },
            (err) => {
                if (err.json().code === 400) {
                    this.dateOverRange = err.json().msg;
                } else {
                    this.dateOverRange = "";
                    this.hasError = true;
                }
                this.loading = false;
            });
    }

    public ngOnDestroy() {
        this.subscriptionList.forEach((sub: Subscription) => {
            sub.unsubscribe();
        });
    }

}
