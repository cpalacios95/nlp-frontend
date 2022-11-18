import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algoritmo',
  templateUrl: './algoritmo.component.html',
  styleUrls: ['./algoritmo.component.css']
})
export class AlgoritmoComponent implements OnInit {

  algoritmos = {
    "titulo": "Estructura retorica: Introducción, Métodos, Resultados y Discusión de Swales",
    "descripcion": "La estructura básica de un artículo original se conoce con el acrónimo IMRD, que son las siglas de los cuatro apartados del artículo: ...."
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ver(){
    this.router.navigate(['admin/ver-algoritmo']);
  }

}
