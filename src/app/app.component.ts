import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontSistemaAgenciaAutos';

  constructor (private router:Router){}

  listarComGuardarMarca(){
    this.router.navigate(['listarMarca']);
  }
  abrirComGuardarMarca(){
    this.router.navigate(['guardarMarca']);
  }

  listarComGuardarModelo(){
    this.router.navigate(['listarModelo']);
  }

  abrirComGuardarModelo(){
    this.router.navigate(['guardarModelo']);
  }
}
