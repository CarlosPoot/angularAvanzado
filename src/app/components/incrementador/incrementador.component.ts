import { Component, Input ,OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-incrementador',
    templateUrl: './incrementador.component.html',
    styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

    @Input("nombre") leyenda:string = "Leyenda";
    @Input()progreso:number = 50;
    @ViewChild('txtProgress') txtProgres:ElementRef;


    //enviar parametros al padre
    @Output() cambiarValor:EventEmitter<number> = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    actualizarValor( newValue ){
        console.log( newValue )
        if( newValue > 100 ){
            this.progreso = 100
            console.log(1);
        }else if( newValue < 0 ){
            this.progreso = 0
            console.log(2);
        }else{
            console.log(3);
            this.progreso = newValue
        }

        this.txtProgres.nativeElement.value = this.progreso;
        this.cambiarValor.emit( this.progreso );
    }


    agregarValor( valor:number ){
        if(  this.progreso + valor > 100 ){
            this.progreso = 100;
            return;
        }else if( this.progreso + valor < 0 ){
            this.progreso = 0;
            return
        }else{
            this.progreso += valor;
        }

        this.txtProgres.nativeElement.focus();
        this.cambiarValor.emit( this.progreso );
    }

}