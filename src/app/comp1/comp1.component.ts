import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServicetryService} from '../servicetry.service';
import {from, Observable, of} from 'rxjs';
import {Hero} from '../hero';

@Component({
    selector: 'app-comp1',
    templateUrl: './comp1.component.html',
    styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {


    /*loc = new Observable((observ) => {
        const {next, error} = observ;
        console.log(next);
    });

    constructor(public serv: ServicetryService) {
    }

    ngOnInit() {
        // this.loc.subscribe();
        const myObservable = from([1, 2, 3]);//of(1, 2, 3);

// Create observer object
        const myObserver = {
            next: x => console.log('Observer got a next value: ' + x),
            error: err => console.error('Observer got an error: ' + err),
            complete: () => console.log('Observer got a complete notification'),
        };

// Execute with the observer object
        myObservable.subscribe(x => {
            console.log('Observer got a next value: ' + x);
        });
    }*/

    // comp1val;
    //
    // constructor(public serv: ServicetryService) {
    //     this.comp1val = this.serv.isSidebarVisible;
    // }

    @Input() hero: Hero;
    @Output() changeh = new EventEmitter<Hero>();
    //
    ngOnInit() {
        console.log(this.hero.name);
    }

    // callChange() {
    //     this.serv.toggleSidebarVisibility(this.comp1val);
    // }
}
