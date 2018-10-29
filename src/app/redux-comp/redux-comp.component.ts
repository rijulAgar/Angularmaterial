import {Component, OnInit} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from '../store';
import {ITodo} from '../todo';

@Component({
    selector: 'app-redux-comp',
    templateUrl: './redux-comp.component.html',
    styleUrls: ['./redux-comp.component.css']
})
export class ReduxCompComponent implements OnInit {
    @select() todos;
    model: ITodo = {
        id: 0,
        description: '',
        responsible: '',
        priority: 'low',
        isCompleted: false
    };

    constructor(private ngRedux: NgRedux<IAppState>) {
    }

    ngOnInit() {
        // this.ngRedux.dispatch({type: 'ad'});
        // console.log(this.ngRedux.getState());

    }

    submit() {
        console.log(this.ngRedux.dispatch({type: 'ADD_TODO', todo: this.model}));
    }

}
