import { LoginService } from './../../../../services/login/login.service';
import { ComentarioService } from './../../../../services/comentario/comentario.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ver-un-resumen',
  templateUrl: './ver-un-resumen.component.html',
  styleUrls: ['./ver-un-resumen.component.css']
})
export class VerUnResumenComponent implements OnInit {

  resumen={
    "id":"",
    "titulo":"",
    "contenido":"",
    "analisis":"",
    "fecha":"",
    "autor":{
      "idAutor":"",
      "nombre": "",
      "apellido": ""
    }
  }

  coment = 0;

  valores = [{
    "comComentario":"",
    "comFechaCreacion":"",
    "comHora":"",
    "ComId":"",
    "usrId":{
      "usrId":0,
      "usrNombres":"",
      "usrApellidos":""
    }
  }]
  
  ComentarioDto={
    'contenido':'',
    'usrId':0,
    'resId':0
  }


  // comentario2 ={
  //   "contenido":"",
  //   "fecha":"",
  //   "tutor":"",
  //   "apellido":""
  // }

  valor2=0;

  calificacion={
    "valor":"",
    "fecha":"",
    "nombre":"",
    "apellido":"",
    "hora":""
  }

  tamanio: number;

  constructor(private route: ActivatedRoute, private router: Router, private comen: ComentarioService, private login: LoginService, private snack: MatSnackBar) { 

    this.route.queryParams.subscribe((data:any)=>{
        this.resumen=data;
        // console.log(this.resumen);
    })

    this.comen.getCalificacion(this.resumen.id).subscribe(
      (data:any) =>{
        // console.log(data);
        // let algo = data.slice(-1).cal_valor;
        
        // console.log(data.slice(-1)[0]);
        if(data.length !=0){
          this.valor2 = 1;

          this.calificacion.valor = data.slice(-1)[0].cal_valor;
          this.calificacion.hora = data.slice(-1)[0].calHora;
          this.calificacion.fecha = data.slice(-1)[0].calFechaCreacion;
          this.calificacion.nombre = data.slice(-1)[0].usrId.usrNombres;
          this.calificacion.apellido = data.slice(-1)[0].usrId.usrApellidos;

          // console.log(this.calificacion);
        }
      }
    )

    this.comen.getComentarios(parseInt(this.resumen.id)).subscribe(
      (data:any)=>{

        // console.log(data.length);

        this.tamanio = data.length;


        this.valores = data;
        console.log(this.valores);

        // console.log(this.valores);
        // this.comentario.contenido = data.contenido
        // this.comentario = data;
        // this.comentario2.contenido= data[0].comComentario;
        // this.comentario2.tutor = data[0].usrId.usrNombres;
        // this.comentario2.apellido = data[0].usrId.usrApellidos;
        // this.comentario2.fecha = data[0].comFechaCreacion;
        // console.log(data[0].comComentario);
        // console.log(this.comentario);

      }
    )
    // console.log("este");
    // console.log(typeof parseInt(this.resumen.id));
    // console.log("este");
    // this.resumen.analisis="";
  }

  ngOnInit(): void {
  }

  Analizar(data: any){
    let navigation: NavigationExtras = {
      queryParams:{
        "id": data.id,
        "titulo":data.titulo,
        "contenido":data.contenido,
        "autor":{
          "idAutor":data.idAutor,
          "nombre": data.nombre,
          "apellido": data.apellido
        }
      }
    }
    this.router.navigate(['student/analizar'], navigation);
  }

  Modificar(data:any){
    let navigation: NavigationExtras = {
      queryParams:{
        "id": data.id,
        "titulo":data.titulo,
        "contenido":data.contenido,
        "autor":{
          "idAutor":data.idAutor,
          "nombre": data.nombre,
          "apellido": data.apellido
        }
      }
    }
    this.router.navigate(['student/modificar'], navigation);
  }

  Com(){
    this.coment = 1;
  }

  Comentar(data:any){
    this.ComentarioDto.contenido= data;
    this.ComentarioDto.usrId= parseInt(this.login.getUserId());
    this.ComentarioDto.resId= parseInt(this.resumen.id);
    console.log(this.ComentarioDto);
    this.comen.nuevoComentario(this.ComentarioDto).subscribe(
      (data:any)=>{
        this.snack.open('Comentario realizado','Aceptar',{
          duration:3000
        })
      }
    )
    this.tamanio=1;
  }
}
