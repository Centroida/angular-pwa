/**
 * Copyright (c) 2017 Centroida.Ai All rights reserved.
 */

import {TestBed, inject} from '@angular/core/testing';
import {DrinksService} from './books.service';

describe('DrinksService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DrinksService]
        });
    });

    it('should ...', inject([DrinksService], (service: DrinksService) => {
        expect(service).toBeTruthy();
    }));
});
