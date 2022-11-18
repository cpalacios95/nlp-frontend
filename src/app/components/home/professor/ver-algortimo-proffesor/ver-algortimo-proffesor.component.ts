import { Component, OnInit } from '@angular/core';
import { AlgoritmoService } from 'src/app/services/algoritmo/algoritmo.service';

@Component({
  selector: 'app-ver-algortimo-proffesor',
  templateUrl: './ver-algortimo-proffesor.component.html',
  styleUrls: ['./ver-algortimo-proffesor.component.css']
})
export class VerAlgortimoProffesorComponent implements OnInit {

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
