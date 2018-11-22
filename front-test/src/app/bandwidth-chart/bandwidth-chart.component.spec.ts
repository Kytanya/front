import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BandwidthChartComponent} from './bandwidth-chart.component';

describe('BandwidthChartComponent', () => {
    let component: BandwidthChartComponent;
    let fixture: ComponentFixture<BandwidthChartComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BandwidthChartComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BandwidthChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
