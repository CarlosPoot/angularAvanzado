import { Injectable, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class SettingsService {

    ajustes:Ajustes ={
        urlTema : "assets/css/colors/default.css",
        tema : "default"
    }

    constructor(@Inject(DOCUMENT) private _document) {
        this.cargarAjustes();
    }

    cargarAjustes(){
        if(  localStorage.getItem("ajustes") ){
            this.ajustes = JSON.parse( localStorage.getItem("ajustes"))
        }
        this.aplicarTema(  this.ajustes.tema );
    }

    aplicarTema( tema:string ){
        this.ajustes.urlTema = `assets/css/colors/${ tema }.css`;
        this.ajustes.tema = tema;
        this._document.getElementById('tema').setAttribute('href', this.ajustes.urlTema )
        this.cambiarCheck();
        this.guardarAjustes();
        console.log(  "se aplico tema" );
    }   

    guardarAjustes(){
        localStorage.setItem( "ajustes", JSON.stringify(this.ajustes));
    }

    cambiarCheck() {
        let selectores: any = document.getElementsByClassName("selector");
        for (let item of selectores) {
            item.classList.remove("working");
        }

        for (let item of selectores) {
            if( item.getAttribute('data-theme') == this.ajustes.tema ){
                item.classList.add("working");
            }
        }
    }

}

interface Ajustes {
    urlTema:string,
    tema:string
}