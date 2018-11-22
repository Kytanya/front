import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MonitoringComponent} from './monitoring/monitoring.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'monitoring', component: MonitoringComponent},

    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
