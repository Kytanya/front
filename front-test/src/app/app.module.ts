import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChartsModule} from 'ng2-charts';
import {BandwidthChartComponent} from './bandwidth-chart/bandwidth-chart.component';
import {HttpClientModule} from '@angular/common/http';
import {MonitoringComponent} from './monitoring/monitoring.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        BandwidthChartComponent,
        LoginComponent,
        MonitoringComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        ChartsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
