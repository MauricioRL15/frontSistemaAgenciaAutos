import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Models/Marca';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  constructor(private router:Router, private servicio:ServiceService){}

  listarMarcas:Marcas[];

  ngOnInit(){
    this.servicio.listarMetodos().subscribe(data =>{
      console.log(data);
      
      this.listarMarcas = data;
    })
  }

  abrirCompEditarEnviarId(marca:Marcas){
    localStorage.setItem("idMarca", marca.idMarca.toString());
    this.router.navigate(["editarMarca"]);
  }

  abrirCompEliminarEnviarId(marca:Marcas){
    localStorage.setItem("idMarca", marca.idMarca.toString());
    this.router.navigate(["eliminarMarca"]);
  }

  abrirComGuardarModelo(){
    this.router.navigate(['guardarModelo']);
  }

}
