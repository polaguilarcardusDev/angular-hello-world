// Importaciones principales de Angular necesarias para la configuración de rutas
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importación de los componentes que se asociarán a las rutas
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoremComponent } from './lorem/lorem.component';

// Definición de las rutas de la aplicación
const routes: Routes = [
  { path: '', component: HelloWorldComponent }, // Ruta por defecto, se carga HelloWorldComponent
  { path: 'lorem', component: LoremComponent } // Ruta '/lorem', se carga LoremComponent
];

// Decorador NgModule que configura la ruta para la aplicación
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa las rutas configuradas para el enrutador principal de la aplicación
  exports: [RouterModule] // Exporta el RouterModule para que esté disponible en toda la aplicación
})

// Clase AppRoutingModule que gestiona el enrutamiento de la aplicación
export class AppRoutingModule { }
