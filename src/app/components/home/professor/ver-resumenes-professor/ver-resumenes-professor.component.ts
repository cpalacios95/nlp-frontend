import { NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ResumenService } from 'src/app/services/resumen/resumen.service';

@Component({
  selector: 'app-ver-resumenes-professor',
  templateUrl: './ver-resumenes-professor.component.html',
  styleUrls: ['./ver-resumenes-professor.component.css']
})
export class VerResumenesProfessorComponent implements OnInit {

  resumes: any= [
    {
      "id":"",
      "titulo":"",
      "contenido":"",
      "autor":{
        "idAutor":"",
        "nombre": "",
        "apellido": ""
      }
    }
  ]

  constructor(private resumenS: ResumenService, private router: Router) { }

  ngOnInit(): void {

    this.resumenS.getResumenesSinRevision().subscribe(
      (data:any)=>{
        this.resumes = data;
        console.log(this.resumes);

      }
    )

  }

  Ver(data:any){
    let navigation: NavigationExtras = {
      queryParams:{
        "id": data.resId,
        "titulo":data.resTitulo,
        "contenido":data.resContenido,
        "analisis":data.resResultadoAnalisis,
        "autor":{
          "idAutor":data.usrId.usrId,
          "nombre": data.usrId.usrNombres,
          "apellido": data.usrId.usrApellidos
        }
      }
    }

    this.router.navigate(['professor/resumen'], navigation);
  }


}
