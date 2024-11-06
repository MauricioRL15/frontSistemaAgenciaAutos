import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Marcas } from 'src/app/Models/Marca';
import { ServiceService } from 'src/app/Services/service.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {

  constructor(private router:Router, private servicio:ServiceService){}

  marca:Marcas = new Marcas();

  guardar(){
    this.servicio.guardarMarca(this.marca).subscribe(response => { 
      console.log(response); 
      // Aquí puedes manejar el mensaje del servidor 
      if (response === 'Ese ID ya existe' || response === 'El nombre ya Existe') { 
        // Muestra el mensaje de error de alguna manera, por ejemplo, con una alerta: 
        alert(response); 
      } else { 
        // Redirige a la página de listar si el guardado fue exitoso 
        this.router.navigate(["listarMarca"]); 
      } });
  }

}
