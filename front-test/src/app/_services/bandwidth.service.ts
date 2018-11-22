import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class BandwidthService {

    constructor(private http: HttpClient) {
    }

    getBandwidthData(unixTimestamp) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
        });

        return this.http.post(`${environment.API_URL}/bandwidth`, {
            'session_token': localStorage.getItem('token'), // '41150e73c8d46',
            'from': unixTimestamp.from, // unix timestamp 1542236400 == 15nov
            'to': unixTimestamp.to, // unix timestamp 1542409200 == 17nov
        }, {headers});
    }

    getAudienceData() {

    }
}
