import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Models/Marca';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {

  constructor(private router:Router, private servicio:ServiceService){}

  m:Marcas = new Marcas();

  ngOnInit(){
    this.buscar();
  }

  buscar(){
    let id = localStorage.getItem("idMarca");
    this.m.idMarca = Number(id);
    this.servicio.buscarMarca(this.m).subscribe(data => {
      if (data === "Error: La marca con el ID especificado no existe.") {
        alert(data);
      }else{
        this.m = JSON.parse(data);
      }
    });
  }

  eliminar(){
    this.servicio.eliminarMarca(this.m).subscribe(data => { 
      if (data === "Error: La marca con el ID especificado no existe.") { 
        alert(data); 
      } else { 
        this.router.navigate(["listarMarca"]); 
      } 
    });
  }


}
