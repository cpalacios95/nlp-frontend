import { NavigationExtras, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { Component, OnInit } from '@angular/core';
import { ResumenService } from 'src/app/services/resumen/resumen.service';

@Component({
  selector: 'app-ver-mis-resumenes',
  templateUrl: './ver-mis-resumenes.component.html',
  styleUrls: ['./ver-mis-resumenes.component.css']
})
export class VerMisResumenesComponent implements OnInit {

  resumes: any= [
    {
      "id":"",
      "titulo":"",
      "contenido":"",
      "hora":"",
      "autor":{
        "idAutor":"",
        "nombre": "",
        "apellido": ""
      }
    }
  ]


  constructor(private resumenS: ResumenService, private login: LoginService, private router: Router) { }

  ngOnInit(): void {

    this.resumenS.getResumenById(parseInt(this.login.getUserId())).subscribe(
      (data:any)=>{
        this.resumes = data;
        console.log(this.resumes);

      }
    )

  }

  verResumen(data : any){


    let navigation: NavigationExtras = {
      queryParams:{
        "id": data.resId,
        "titulo":data.resTitulo,
        "contenido":data.resContenido,
        "analisis":data.resResultadoAnalisis,
        "hora":data.resHora,
        "autor":{
          "idAutor":data.usrId.usrId,
          "nombre": data.usrId.usrNombres,
          "apellido": data.usrId.usrApellidos
        }
      }
    }
    console.log(navigation);
    this.router.navigate(['student/resumen'], navigation);
  }
}
