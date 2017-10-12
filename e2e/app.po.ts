/**
 * Copyright (c) 2017 Centroida.Ai All rights reserved.
 */

import {browser, element, by} from 'protractor';

export class PwaPage {
    public navigateTo() {
        return browser.get('/');
    }

    public getParagraphText() {
        return element(by.css('app-root h1')).getText();
    }
}
