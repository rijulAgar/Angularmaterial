import {Component, OnInit} from '@angular/core';
import {ServicetryService} from '../servicetry.service';
import {Hero} from '../hero';

@Component({
    selector: 'app-comp2',
    templateUrl: './comp2.component.html',
    styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

    comp2val: String;
    hero: Hero = {
        id: 2,
        name:null
    };
    constructor(public serv: ServicetryService) {
        this.serv.sidebarVisibilityChange.subscribe(value => {
            this.comp2val = this.serv.isSidebarVisible;
        });

    }

    ngOnInit() {
        console.log(this.hero);
    }

}
