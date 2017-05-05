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

    toggleClickState() {
        this.clickInfo = (this.clickInfo === 'default') ? 'clicked' : 'default';
    }

    setNumberState(index) {
        return Number(this.numberEntered) === index ? 'selected' : 'unselected';
    }
}
