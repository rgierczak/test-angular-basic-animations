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
        ]),
        trigger('numberEnteredState', [
            state('unselected', style({
                border: '1px solid black',
                padding: '5px',
                backgroundColor: 'white'
            })),
            state('selected', style({
                border: '2px solid blue',
                padding: '4px',
                backgroundColor: 'lightblue'
            })),
            transition('unselected => selected', [
                style({
                    border: '2px solid #000000',
                    padding: '4px'
                }),
                animate(300),
                style({
                    backgroundColor: '#ff0000'
                }),
                animate(300)
            ])
        ])
    ]
})
export class AppComponent {
    clickInfo = 'default';
    numberEntered;

    toggleState() {
        this.clickInfo = (this.clickInfo === 'default') ? 'clicked' : 'default';
    }
}
