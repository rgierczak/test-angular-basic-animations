import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('clickedState', [
            state('default', style({
                backgroundColor: 'orange',
                width: '100px',
                height: '100px'
            })),
            state('clicked', style({
                backgroundColor: 'blue',
                width: '300px',
                height: '50px'
            })),
            transition('default => clicked', animate('1s 500ms ease-in')),
            // transition('clicked => default', animate('300ms ease-out'))
            transition('clicked => default', animate(300))
        ])
    ]
})
export class AppComponent {
    clickInfo = 'default';

    toggleState() {
        this.clickInfo = (this.clickInfo === 'default') ? 'clicked' : 'default';
    }
}
