import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marcas } from '../Models/Marca';
import { Modelo } from '../Models/Modelos';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  url = 'http://localhost:9000/MarcasWs/'
  urlModelo = 'http://localhost:9000/ModelosWs/'

  listarMetodos(){
    return this.http.get<Marcas[]>(this.url + "listar");
  }

  guardarMarca(marca: Marcas) { 
    return this.http.post(this.url + "guardar", marca, { responseType: 'text' }); 
  }

  buscarMarca(marca: Marcas){
    return this.http.post(this.url + "buscar", marca, { responseType: 'text' }); 
    //return this.http.get<Marcas[]>(this.url + "buscar");
  }

  editarMarca(marca:Marcas){
    return this.http.post(this.url + "editar", marca, { responseType: 'text' }); 
  }

  eliminarMarca( marca:Marcas ){
    return this.http.post(this.url + "eliminar", marca, { responseType: 'text' }); 
  }

  // MODELOS

  listarModelos(){
    return this.http.get<Modelo[]>(this.urlModelo + "listar");
  }

}
