import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from './_services/authentication.service';
import {User} from './_models/user';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    currentUser: User;

    constructor(private router: Router, private authenticationService: AuthenticationService) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngAfterViewInit() {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout().pipe(first())
            .subscribe(
                () => {
                    this.router.navigate(['/login']);
                },
                (error) => {
                    console.log(error);
                });
        // this.router.navigate(['/login']);
    }
}
