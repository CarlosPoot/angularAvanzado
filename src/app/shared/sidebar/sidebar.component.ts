import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/shared/sidebar.service'
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    constructor(private _sidebar: SidebarService, public usuarioService:UsuarioService) {}

    ngOnInit() {}

}