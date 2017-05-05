import { Component } from '@angular/core';
import { clickedStateTrigger, numberEnteredStateTrigger } from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        clickedStateTrigger,
        numberEnteredStateTrigger
    ]
})
export class AppComponent {
    clickInfo = 'default';
    numberEntered;

    toggleState() {
        this.clickInfo = (this.clickInfo === 'default') ? 'clicked' : 'default';
    }
}
