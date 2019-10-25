import { Component, OnInit } from '@angular/core';
import { Router, ChildActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

    titulo:string;

    constructor( private _router:Router, private tituloPgina:Title, private meta:Meta ) {

        this.getDataRputer().subscribe( data => {
            this.titulo = data.titulo;
            this.tituloPgina.setTitle( this.titulo );

            let defTag:MetaDefinition = {
                name: "description",
                content: this.titulo
            }
            this.meta.addTag( defTag );
        })

    }

    ngOnInit() {
        this.getDataRputer();
    }


    getDataRputer(){
        return this._router.events.pipe(
            filter(  data => data instanceof ChildActivationEnd ),
            filter(  (data:ChildActivationEnd) => data.snapshot.firstChild.firstChild == null ),
            map(  (data:ChildActivationEnd) =>  data.snapshot.firstChild.data )
        )
    }


}