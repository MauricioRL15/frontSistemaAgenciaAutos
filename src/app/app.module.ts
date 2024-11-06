import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Modulos de Angular
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Otros
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Componenets/listar/listar.component';
import { GuardarComponent } from './Componenets/guardar/guardar.component';
import { EditarComponent } from './Componenets/editar/editar.component';
import { EliminarComponent } from './Componenets/eliminar/eliminar.component';
import { HomeComponent } from './Componenets/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    GuardarComponent,
    EditarComponent,
    EliminarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
