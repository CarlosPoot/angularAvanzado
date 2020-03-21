import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../modelos/usuario.model';
import { Router } from '@angular/router';

declare function initFuncion();
declare const gapi:any;
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    recuerdame:boolean = false;
    correo:string;
    auth2:any;

    constructor( public _usuarioService:UsuarioService, public _router:Router  ) {}

    ngOnInit() {
        initFuncion();
        this.googleInit();
        this.correo = localStorage.getItem("email") || "";
        if( this.correo.length > 0 ){
            this.recuerdame = true;
        }
    }

    googleInit(){

        gapi.load('auth2', ()=>{

            this.auth2 = gapi.auth2.init({
                client_id:"10251813639-ibkm7iv233rc3nvn82kphnpihlcpr876.apps.googleusercontent.com",
                cookiepolicy: "single_host_origin",
                scope:"profile email"
            });

            this.attachSignin(  document.getElementById("btnGoogle") );

        });
    }

    attachSignin( element ){
        this.auth2.attachClickHandler(  element, {}, ( googleUser:any )=>{
            let token = googleUser.getAuthResponse().id_token;
            this._usuarioService.loginGoogle( token  )
            .subscribe( (respuesta:any)=> this._router.navigateByUrl("/dashboard") );

            console.log( "este es mi token", token ); 
        });
    }

    iniciarSesion( formulario:NgForm ) {

        console.log(formulario)

        if( !formulario.valid ){
            return;
        }

        let usuario = new Usuario( null, formulario.value.email, formulario.value.password );
        this._usuarioService.iniciarSesion(  usuario, formulario.value.recuerdame  ).subscribe( respuesta => this._router.navigateByUrl("/dashboard"))

    }

    
}
