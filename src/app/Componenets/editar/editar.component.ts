import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Models/Marca';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  constructor(private router:Router, private servicio:ServiceService){}

  marca:Marcas = new Marcas();

  ngOnInit(){
    this.buscar();
  }

  buscar(){
    let id = localStorage.getItem("idMarca");
    this.marca.idMarca = Number(id);
    this.servicio.buscarMarca(this.marca).subscribe(data => {
      if (data === "Error: La marca con el ID especificado no existe.") {
        alert(data);
      }else{
        this.marca = JSON.parse(data);
      }
    });
  }

  editar(){
    this.servicio.editarMarca(this.marca).subscribe(data => { 
      if (data === "Error: La marca con el ID especificado no existe.") { 
        alert(data); 
      } else { 
        this.router.navigate(["listarMarca"]); 
      } 
    });
  }


}
