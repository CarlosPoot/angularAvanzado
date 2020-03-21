import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { URL_SERVICIOS } from '../../config/config';
import { Usuario } from '../../modelos/usuario.model';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

    usuario:Usuario;
    token:string;

    constructor(  private _http:HttpClient, private router:Router ) { this.cargarStorage() }

    crearUsuario( usuario:Usuario ){

        let url = URL_SERVICIOS + "usuario";
        return this._http.post(  url,  usuario  ).pipe(
            map(  (res:any) =>{
                Swal.fire( "Usuario creado", usuario.correo , "success" )
                return res.usuario;
            })
        )
    }

    loginGoogle( token:string ){
        let url = URL_SERVICIOS + "login/google";
        return this._http.post( url , { token } ).pipe( 
            map( (data:any) => this.guardarStorege( data.id, data.token, data.usuario ) )
        );
    }

    iniciarSesion(  usuario:Usuario, recordar:boolean = false ){

        if( recordar ){
            localStorage.setItem("email", usuario.correo );
        }else{
            localStorage.removeItem("email");
        }

        let url = URL_SERVICIOS + "login";
        return this._http.post( url, usuario ).pipe(
            map( (data:any) => {
                localStorage.setItem( "id", data.id );
                localStorage.setItem( "token", data.token );
                localStorage.setItem( "usuario", JSON.stringify(data.usuario) );
                return true;
            })
        );

    }

    guardarStorege( id:string, token:string, usuario:Usuario ){

        localStorage.setItem("id", id );
        localStorage.setItem("token", token );
        localStorage.setItem("usuario", JSON.stringify( usuario ));

        this.usuario = usuario;
        this.token = token;
    }

    cargarStorage(){
        if( localStorage.getItem("token") ){
            this.token = localStorage.getItem("token");
            if( localStorage.getItem("usuario") ){
                this.usuario = JSON.parse(localStorage.getItem("usuario"));
            }else{
                this.usuario = null; 
            }
        }else{
            this.token = "";
            this.usuario = null;
        }
    }

    estaLogueado(){
        return ( this.token.length > 5 ) ? true :false;
    }

    logout(){
        this.usuario = null;
        this.token = "";
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        this.router.navigateByUrl("/login");
    }

}