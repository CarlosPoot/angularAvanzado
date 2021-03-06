
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './login/register.component';

const appRutas:Routes = [
    { path:'login', component:LoginComponent },
    { path:'register', component:RegisterComponent },
    { path:"**", component:NopagefoundComponent }// cualquier ruta que no este definida anteriormente
]

// primera forma de impotar las rutas
// export const MIS_RUTAS = RouterModule.forRoot( appRutas, { useHash: true} );

// segunda forma de exportar rutas
@NgModule({
    imports:[ RouterModule.forRoot( appRutas, { useHash:true} ) ],
    exports:[ RouterModule ]
})
export class MisRutasModule{}