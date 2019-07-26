import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { NgModule } from '@angular/core';


const RUTAS_HJS:Routes = [
    {   path:'', component: PagesComponent,
        children: [
            { path:'dashboard', component: DashboardComponent },
            { path:'progress', component:ProgressComponent },
            { path:'graficas1', component:Graficas1Component },
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