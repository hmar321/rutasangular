import { CineComponent } from "./components/cine/cine.component";
import { HomeComponent } from "./components/home/home.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { NumeroDobleComponent } from './components/numero-doble/numero-doble.component';
import { Error404Component } from "./components/error404/error404.component";
//NECESITAMOS LOS SIGUIENTES MODULOS PARA REALIZAR LA DECLARACION
//DE LA NAVEGACION
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from '@angular/core';

//DEFINIMOS UN ARRAY CON NUESTRAS RUTAS PARA LOS COMPONENTS
const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "cine", component: CineComponent },
    { path: "musica", component: MusicaComponent },
    { path: "doble", component: NumeroDobleComponent },
    { path: "doble/:numero", component: NumeroDobleComponent },
    { path: "**", component: Error404Component },
];

//DESDE ROUTING DEVEMOS EXPORTAR DOS CARACTERISTICAS PARA 
//IMPLEMENTARLAS DENTRO DEL MODULE
//EL PROVEEDOR DE RUTAS
export const appRoutingProvider: any[] = [];
//EL MODULO ROUTING INDICANDO EL ARRAY DE RUTAS DECLARADO
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);