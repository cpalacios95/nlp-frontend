import { MatSnackBar } from '@angular/material/snack-bar';
import { ComentarioService } from './../../../../services/comentario/comentario.service';
import { LoginService } from './../../../../services/login/login.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-resumen-profesor',
  templateUrl: './ver-resumen-profesor.component.html',
  styleUrls: ['./ver-resumen-profesor.component.css']
})
export class VerResumenProfesorComponent implements OnInit {

  coment=0;
  cal = 0;

  
  // contenido:string;
  // usrId: number;
  // resId:number;

  ComentarioDto={
    'contenido':'',
    'usrId':0,
    'resId':0
  }

  comente=0;

  valor2= 0;

  resumen={
    "id":"",
    "titulo":"",
    "contenido":"",
    "analisis":"",
    "autor":{
      "idAutor":"",
      "nombre": "",
      "apellido": ""
    }
  }

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

  tamanio: number;

  calificacion2={
    "valor":"",
    "fecha":"",
    "nombre":"",
    "apellido":"",
    "hora":""
  }

  calificacion = {
    "calDescripcionDto":"",
    "calValorDto":"",
    "usrId":0,
    "resId":1
  }

  constructor(private route: ActivatedRoute, private login: LoginService, private comentario: ComentarioService, private snack: MatSnackBar) {

    this.route.queryParams.subscribe((data:any)=>{
      this.resumen=data;
    })


    this.comentario.getComentarios(parseInt(this.resumen.id)).subscribe(
      (data:any)=>{

        // console.log(data.length);

        this.tamanio = data.length;


        this.valores = data;

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
    
   }

  ngOnInit(): void {
  }

  Comentario(){
    this.coment=1;
  }

  Comentar(data:any){
    this.ComentarioDto.contenido= data;
    this.ComentarioDto.usrId= parseInt(this.login.getUserId());
    this.ComentarioDto.resId= parseInt(this.resumen.id);
    console.log(this.ComentarioDto);
    this.comentario.nuevoComentario(this.ComentarioDto).subscribe(
      (data:any)=>{
        this.snack.open('Comentario realizado','Aceptar',{
          duration:3000
        })
      }
    )
  }
  Comentar2(data:any){
    this.comente=1;
    this.ComentarioDto.contenido= data;
    this.ComentarioDto.usrId= parseInt(this.login.getUserId());
    this.ComentarioDto.resId= parseInt(this.resumen.id);
    console.log(this.ComentarioDto);
    this.comentario.nuevoComentario(this.ComentarioDto).subscribe(
      (data:any)=>{
        this.snack.open('Comentario realizado','Aceptar',{
          duration:3000
        })
      }
    )
  }

  Calificar(){
    this.cal = 1;
  }

  Com(){
    this.coment = 1;
  }

  Cali(valor:number){
    if(valor == 1){
      this.calificacion.calDescripcionDto = "";
      this.calificacion.calValorDto= "Aprobado";
      this.calificacion.resId = parseInt (this.resumen.id);
      this.calificacion.usrId = parseInt (this.login.getUserId());
    }
    if(valor==2){
      this.calificacion.calDescripcionDto = "";
      this.calificacion.calValorDto= "Aprobado con modificaciones";
      this.calificacion.resId = parseInt (this.resumen.id);
      this.calificacion.usrId = parseInt (this.login.getUserId());
    }
    if(valor==3){
      this.calificacion.calDescripcionDto = "";
      this.calificacion.calValorDto= "Rechazado";
      this.calificacion.resId = parseInt (this.resumen.id);
      this.calificacion.usrId = parseInt (this.login.getUserId());
    }
    // console.log(this.calificacion);

    this.comentario.calificar(this.calificacion).subscribe(
      (data:any) => {
        this.snack.open('Calificacion registrada','Aceptar',{
          duration:3000
        })
        this.comentario.getCalificacion(this.resumen.id).subscribe(
          (data:any) =>{
            // console.log("object");
            // console.log(data);
            // let algo = data.slice(-1).cal_valor;
            
            // console.log(data.slice(-1)[0]);
            if(data.length !=0){
              this.valor2 = 1;
    
              this.calificacion2.valor = data.slice(-1)[0].cal_valor;
              this.calificacion2.hora = data.slice(-1)[0].calHora;
              this.calificacion2.fecha = data.slice(-1)[0].calFechaCreacion;
              this.calificacion2.nombre = data.slice(-1)[0].usrId.usrNombres;
              this.calificacion2.apellido = data.slice(-1)[0].usrId.usrApellidos;
    
              // console.log(this.calificacion);
            }
          }
        )
      }
    )

  }
}
