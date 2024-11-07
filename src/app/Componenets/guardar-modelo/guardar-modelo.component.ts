import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Models/Marca';
import { ServiceService } from 'src/app/Services/service.service';
import { Modelo } from '../../Models/Modelos';

@Component({
  selector: 'app-guardar-modelo',
  templateUrl: './guardar-modelo.component.html',
  styleUrls: ['./guardar-modelo.component.css']
})
export class GuardarModeloComponent {

  constructor(private router:Router, private servicio:ServiceService){}

  listaMarcas : Marcas[];
  

  ngOnInit(){ 
    this.servicio.listarMetodos().subscribe(data => { 
      this.listaMarcas = data; 
    });
  }

  //Variable de tipo objeto
  modelo:Modelo=new Modelo();
  marcas:Marcas=new Marcas();

  guardarModelos(){
    //Formar nuestro Registros Json --- para guardar
    const registroData:Modelo={
      idModelo: this.modelo.idModelo,
      nombre: this.modelo.nombre,
      tipo: this.modelo.tipo,
      precio: this.modelo.precio,
      fechaLanzamiento:this.modelo.fechaLanzamiento,
      marca: {
            idMarca: this.marcas.idMarca,
            nombre:'',
            origen: '',
            eslogan: ''
        }
      }

      this.servicio.guardarModelo(registroData).subscribe(data=>{
        this.router.navigate(["listarModelo"]);
      });
    }

}
