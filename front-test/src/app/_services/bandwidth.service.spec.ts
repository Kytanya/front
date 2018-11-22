import {TestBed} from '@angular/core/testing';

import {BandwidthService} from './bandwidth.service';

describe('BandwidthService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: BandwidthService = TestBed.get(BandwidthService);
        expect(service).toBeTruthy();
    });
});
