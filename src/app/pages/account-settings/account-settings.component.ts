import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
    selector: 'app-account-settings',
    templateUrl: './account-settings.component.html',
    styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

    constructor( public _ajustes:SettingsService ) {}

    ngOnInit() {
        this._ajustes.cambiarCheck();
    }

    cambiarTema(tema: string, link: any) {
        console.log(tema);
        this._ajustes.aplicarTema( tema );
    }
}