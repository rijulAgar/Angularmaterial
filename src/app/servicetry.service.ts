import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ServicetryService {

    isSidebarVisible: String = 'sdf';
    sidebarVisibilityChange: Subject<String> = new Subject<String>();

    constructor()  {
        this.sidebarVisibilityChange.subscribe((value) => {
            this.isSidebarVisible = value;
        });
    }

    toggleSidebarVisibility(val) {
        this.sidebarVisibilityChange.next(val);
        console.log(val);
    }
}
