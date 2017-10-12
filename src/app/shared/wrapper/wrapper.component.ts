import {Component} from '@angular/core';

@Component({
    selector: 'app-wrapper',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent {

    public isOver(): boolean {
        return window.matchMedia(`(max-width: 960px)`).matches;
    }

}
