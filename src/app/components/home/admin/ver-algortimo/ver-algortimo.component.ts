import { AlgoritmoService } from './../../../../services/algoritmo/algoritmo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-algortimo',
  templateUrl: './ver-algortimo.component.html',
  styleUrls: ['./ver-algortimo.component.css']
})
export class VerAlgortimoComponent implements OnInit {

  algoritmo={
    "titulo": "",
    "descripcion":""
  }
  
  constructor(private alg: AlgoritmoService) { }

  ngOnInit(): void {

    this.alg.getAlgoritmo().subscribe((data:any)=>{
      this.algoritmo.titulo= data.algTituloDto 
      this.algoritmo.descripcion= data.algDescripcionDto
    })

  }


}
