import { ResumenService } from './../../../../services/resumen/resumen.service';
import { LoginService } from './../../../../services/login/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-resumen',
  templateUrl: './nuevo-resumen.component.html',
  styleUrls: ['./nuevo-resumen.component.css']
})
export class NuevoResumenComponent implements OnInit {

  forma:FormGroup

  resumenDto = {
    "resTituloDto":"",
    "resContenidoDto":"",
    "usrIdDto":0
  }
  


  constructor(private login: LoginService, private resumen: ResumenService, private router: Router) { 

    this.crearFormulario();

  }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.forma = new FormGroup({
      'titulo': new FormControl('', { validators: [Validators.required]}),
      'resumen': new FormControl('', { validators: [Validators.required]})
    });
  }

  onSubmit(){
    // this.resumen = this.forma.value.resumen;
    // this.titulo = this.forma.value.titulo

    // console.log(this.resumen);
    // console.log(this.titulo);

    this.resumenDto.resTituloDto = this.forma.value.titulo;
    this.resumenDto.resContenidoDto = this.forma.value.resumen;
    this.resumenDto.usrIdDto = parseInt(this.login.getUserId());

    // console.log(this.resumenDto);
    // console.log(typeof this.resumenDto.resContenidoDto);
    // console.log(typeof this.resumenDto.resTituloDto);
    // console.log(typeof this.resumenDto.usrIdDto);
    
    this.resumen.setResumen(this.resumenDto).subscribe(
      (data:any) =>{
        console.log(data);
        Swal.fire({
          title: 'Resumen guardado con éxito',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Aceptar',
          allowOutsideClick: false
          
        }).then((result) => {
          if (result.isConfirmed) {
            this.login.logout();
            this.router.navigate(['student']);
          }
        })
      }
    )
  }

  Analizar(){
    console.log("object");
  }

}
