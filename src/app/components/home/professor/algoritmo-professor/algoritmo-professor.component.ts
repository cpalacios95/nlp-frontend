import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-algoritmo-professor',
  templateUrl: './algoritmo-professor.component.html',
  styleUrls: ['./algoritmo-professor.component.css']
})
export class AlgoritmoProfessorComponent implements OnInit {

  algoritmos = {
    "titulo": "Estructura retorica: Introducción, Métodos, Resultados y Discusión de Swales",
    "descripcion": "La estructura básica de un artículo original se conoce con el acrónimo IMRD, que son las siglas de los cuatro apartados del artículo: ...."
  }


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ver(){
    this.router.navigate(['professor/ver-algoritmo']);
  }

}
