import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Models/Marca';
import { Modelo } from 'src/app/Models/Modelos';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-editar-modelo',
  templateUrl: './editar-modelo.component.html',
  styleUrls: ['./editar-modelo.component.css']
})
export class EditarModeloComponent {


  constructor(
    private router: Router,
    private servicio: ServiceService
  ) {}

  //modelos: Modelo[] = [];
  listaMarcas: Marcas[] = [];
  modelo: Modelo = new Modelo();
  
  
  ngOnInit(){

    this.servicio.listarMetodos().subscribe(data=>{
      this.listaMarcas=data;
    });
 
    this.buscar();

  }


  buscar(){

    let id = localStorage.getItem("idModelo");
    this.modelo.idModelo = Number(id);


    this.servicio.obtenerModelo(this.modelo).subscribe(data => { 
      this.modelo = data; 
    });
  }

  editar(){
    this.servicio.editarModelo(this.modelo).subscribe(data =>{
      this.router.navigate(["listarModelo"]);
    })
  }

}
