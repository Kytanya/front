import {AfterViewInit, Component, Input} from '@angular/core';

@Component({
    selector: 'app-bandwidth-chart',
    templateUrl: './bandwidth-chart.component.html',
    styleUrls: ['./bandwidth-chart.component.css']
})
export class BandwidthChartComponent implements AfterViewInit {
    chartOptions = {
        responsive: true,
        scales: {
            yAxes: [{
                display: true,
                ticks: {
                    min: 0,
                }
            }]
        }
    };

    @Input() chartData: Array<any>;
    @Input() chartLabels: Array<any>;

    constructor() {
    }

    ngAfterViewInit() {
        /* Used to init chart */
        this.chartLabels = [...this.chartLabels];
    }
}
