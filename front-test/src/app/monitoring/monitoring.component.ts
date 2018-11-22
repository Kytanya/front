import {Component, OnInit} from '@angular/core';
import {BandwidthService} from '../_services/bandwidth.service';

@Component({
    selector: 'app-monitoring',
    templateUrl: './monitoring.component.html',
    styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {
    from: Date = new Date('2018-11-02');
    to: Date = new Date('2018-11-16');

    chartLabels: Array<any> = [
        this.from.getDate() + '/' + this.from.getMonth(),
        (this.from.getDate() + 1) + '/' + this.from.getMonth(),
        (this.from.getDate() + 2) + '/' + this.from.getMonth(),
        (this.from.getDate() + 3) + '/' + this.from.getMonth(),
        (this.from.getDate() + 4) + '/' + this.from.getMonth(),
        (this.from.getDate() + 5) + '/' + this.from.getMonth(),
        (this.from.getDate() + 6) + '/' + this.from.getMonth(),
        (this.from.getDate() + 7) + '/' + this.from.getMonth(),
        (this.from.getDate() + 8) + '/' + this.from.getMonth(),
        (this.from.getDate() + 9) + '/' + this.from.getMonth(),
        (this.from.getDate() + 10) + '/' + this.from.getMonth(),
        (this.from.getDate() + 11) + '/' + this.from.getMonth(),
        (this.from.getDate() + 12) + '/' + this.from.getMonth(),
        (this.from.getDate() + 13) + '/' + this.from.getMonth(),
        (this.from.getDate() + 14) + '/' + this.from.getMonth(),
        (this.from.getDate() + 15) + '/' + this.from.getMonth(),
        this.to.getDate() + '/' + this.to.getMonth()
    ];
    chartData: Array<any> = [];

    p2pData: Array<any> = [];
    cdnData: Array<any> = [];

    constructor(private bandwidthService: BandwidthService) {
    }

    ngOnInit() {
        this.bandwidthService.getBandwidthData(
            {'from': this.from.getTime(), 'to': this.to.getTime()}
        ).subscribe((data: any) => {
            data.p2p.forEach((p2pItem) => this.p2pData.push(p2pItem[1]));
            data.cdn.forEach((cdnItem) => this.cdnData.push(cdnItem[1]));

            this.chartData.push({data: this.cdnData, label: 'cdn data'});
            this.chartData.push({data: this.p2pData, label: 'p2p data'});
        });
    }
}
