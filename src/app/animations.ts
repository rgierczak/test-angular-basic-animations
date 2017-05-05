import { trigger, state, style, transition, animate } from '@angular/animations';

export const clickedStateTrigger = trigger('clickedState', [
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
]);

export const numberEnteredStateTrigger = trigger('numberEnteredState', [
    state('unselected', style({
        border: '1px solid black',
        padding: '5px',
        backgroundColor: '#ffffff'
    })),
    state('selected', style({
        border: '2px solid blue',
        padding: '4px',
        backgroundColor: 'lightblue'
    })),
    transition('unselected => selected', [
        style({
            border: '2px solid #000000',
            padding: '4px',
            transform: 'scale(1)'
        }),
        animate('600ms 100ms ease-out', style({
            backgroundColor: '#ff0000',
            transform: 'scale(1.1)'
        })),
        animate(300)
    ])
]);
