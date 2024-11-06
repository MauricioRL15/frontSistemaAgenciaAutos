import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Componenets/listar/listar.component';
import { GuardarComponent } from './Componenets/guardar/guardar.component';
import { EditarComponent } from './Componenets/editar/editar.component';
import { EliminarComponent } from './Componenets/eliminar/eliminar.component';
import { HomeComponent } from './Componenets/home/home.component';
import { ListarModeloComponent } from './Componenets/listar-modelo/listar-modelo.component';
import { EditarModeloComponent } from './Componenets/editar-modelo/editar-modelo.component';
import { GuardarModeloComponent } from './Componenets/guardar-modelo/guardar-modelo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path:'listarMarca', component:ListarComponent },
  { path:'guardarMarca', component:GuardarComponent },
  { path:'editarMarca',component:EditarComponent },
  { path:'eliminarMarca', component:EliminarComponent },
  { path: 'listarModelo', component:ListarModeloComponent },
  { path: 'guardarModelo', component:GuardarModeloComponent },
  { path: 'editarModelo', component:EditarModeloComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
