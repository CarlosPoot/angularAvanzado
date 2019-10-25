import { Component, OnInit } from '@angular/core';

declare function initFuncion();

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        initFuncion();

    }

    iniciarSesion() {

    }

}

