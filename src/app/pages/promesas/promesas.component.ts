import { Component, OnInit, OnDestroy } from '@angular/core';

import {Subscription, Observable, Subscriber } from 'rxjs';

@Component({
    selector: 'app-promesas',
    templateUrl: './promesas.component.html',
    styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit, OnDestroy {

    ejemplo:Subscription;

    constructor() {}

    ngOnInit() {

        this.ejemplo = this.regresarObservable().subscribe( ( res )=>{

        })

    }

    ngOnDestroy(){
        this.ejemplo.unsubscribe();
    }

    regresarObservable():Observable<any>{

        return new Observable( ( observer:Subscriber<any> ) =>{
            setInterval(  () =>{
                console.log(1);
            }, 1000  )

        } );

    }

}