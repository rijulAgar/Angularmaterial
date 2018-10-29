import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {NotificationComponent} from './notification/notification.component';
// import {AuthGuard} from './auth/auth-guard.service';

const appRoutes: Routes = [
    {path: '', component: NotificationComponent},
    // {path: '', component: PanelComponent, canActivate: [AuthGuard], runGuardsAndResolvers: 'always'},
    // {path: 'login', component: LoginComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)// ,, {onSameUrlNavigation: 'reload'} {enableTracing: true}
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
