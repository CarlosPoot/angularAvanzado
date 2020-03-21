import {Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../modelos/usuario.model';
import { Router } from '@angular/router';

declare function initFuncion();

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

    forma:FormGroup;

    constructor(
        public _usuarioService:UsuarioService,
        private _router:Router
    ) {}

    ngOnInit() {
        initFuncion();
        this.forma = new FormGroup({
            "nombre": new FormControl( null, [Validators.required]),
            correo: new FormControl( null, [Validators.required, Validators.email] ),
            password1: new FormControl( null, [Validators.required] ),
            password2: new FormControl( null, [Validators.required] ),
            condiciones: new FormControl( null ),
        } , { validators: this.sonIguales(  "password1" , "password2"  ) } );

    }


    sonIguales( valor1:string, valor2:string ){
        return ( group:FormGroup )=>{
            let pass1 = group.controls[valor1].value;
            let pass2 = group.controls[valor2].value;

            if(  pass1 == pass2 ){
                return null;
            }

            return {
                sonIguales:true
            }
        }
    }

    registrarUsuario(){
        
        if( !this.forma.valid ){
            console.log( this.forma )
            return;
        }

        if(  !this.forma.value.condiciones  ){
            Swal.fire({
                title: 'Importante',
                text: 'Debe aceptar las condiciones',
                icon: 'warning'
            })
        }

        let usuario = new Usuario(
            this.forma.value.nombre,
            this.forma.value.correo,
            this.forma.value.password1
        )

        this._usuarioService.crearUsuario(  usuario ).subscribe( (respuesta)=> this._router.navigateByUrl("/login") );
    }

}