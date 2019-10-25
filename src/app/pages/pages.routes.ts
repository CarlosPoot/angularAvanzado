import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { NgModule } from '@angular/core';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';


const RUTAS_HJS:Routes = [
    {   path:'', component: PagesComponent,
        children: [
            { path:'dashboard', component: DashboardComponent, data:{ titulo: "Dashboard"} },
            { path:'progress', component:ProgressComponent , data: { titulo: "Progreso"} },
            { path:'graficas1', component:Graficas1Component, data: { titulo:"Graficas"} },
            { path:'promesas', component:PromesasComponent, data:{ titulo: "Promesas"} },
            { path:'account-settings', component:AccountSettingsComponent, data:{ titulo: "Configuración" }},
            { path:"" , redirectTo:"dashboard", pathMatch:"full" }, // ruta vacia
        ]
     }
];

@NgModule({
    imports:[
        RouterModule.forChild( RUTAS_HJS )
    ],
    exports:[
        RouterModule
    ]
})
export class RutasHijas{}