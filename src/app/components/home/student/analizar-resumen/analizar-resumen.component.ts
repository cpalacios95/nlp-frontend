import { ResumenService } from 'src/app/services/resumen/resumen.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlgoritmoService } from './../../../../services/algoritmo/algoritmo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-analizar-resumen',
  templateUrl: './analizar-resumen.component.html',
  styleUrls: ['./analizar-resumen.component.css']
})
export class AnalizarResumenComponent implements OnInit {

  resumen={
    "id":"",
    "titulo":"",
    "contenido":"",
    "autor":{
      "idAutor":"",
      "nombre": "",
      "apellido": ""
    }
  }

  valor: number;

  resultadoAnalisis="";

  algoritmo={
    "titulo": "",
    "descripcion":""
  }

  constructor(private route: ActivatedRoute, private algortimoService: AlgoritmoService, private router: Router, private resumenService: ResumenService) {

    this.route.queryParams.subscribe((data:any)=>{
      this.resumen=data;
  })

    this.valor=0;

   }

  ngOnInit(): void {

    this.algortimoService.getAlgoritmo().subscribe((data:any)=>{
      this.algoritmo.titulo= data.algTituloDto 
      this.algoritmo.descripcion= data.algDescripcionDto
    })

  }


  Analizar(){


    Swal.fire({
      title:'Espere un segundo, analizado...',
      position: 'center',
      timer: 2000,
      didOpen:()=>{
        Swal.showLoading();
        this.resumenService.analizarResumen(parseInt(this.resumen.id)).subscribe(
          (data:any)=>{
            this.resultadoAnalisis= data;
          }
        )
      }
    })

    this.valor=1;
  }

  
  verResumenes(){

    this.router.navigate(['student/mis-resumenes'])

  }
}
