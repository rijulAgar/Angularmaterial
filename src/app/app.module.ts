import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule
} from '@angular/material';
import {NotificationComponent} from './notification/notification.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Comp1Component} from './comp1/comp1.component';
import {Comp2Component} from './comp2/comp2.component';
import {NgRedux, NgReduxModule} from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { ReduxCompComponent } from './redux-comp/redux-comp.component';
@NgModule({
    declarations: [
        AppComponent,
        NotificationComponent,
        Comp1Component,
        Comp2Component,
        ReduxCompComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        NgReduxModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatExpansionModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatChipsModule
    ],
    providers: [NotificationComponent],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule {
    constructor (ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}
