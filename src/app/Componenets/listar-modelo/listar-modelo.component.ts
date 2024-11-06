import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Modelo } from 'src/app/Models/Modelos';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-listar-modelo',
  templateUrl: './listar-modelo.component.html',
  styleUrls: ['./listar-modelo.component.css']
})
export class ListarModeloComponent {

  constructor(private router:Router, private servicio:ServiceService){}

  listarModelos:Modelo[];

  ngOnInit(){
    this.servicio.listarModelos().subscribe(data =>{
      console.log(data);
      
      this.listarModelos = data;
    })
  }


}
