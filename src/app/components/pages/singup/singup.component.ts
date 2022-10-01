import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SingupService } from 'src/app/services/singup/singup.service';
import { UserService } from 'src/app/services/user/user.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  forma: FormGroup;
  valor= 2;
  usuarioDto = {
    usrNombresDto:"",
    usrApellidosDto:"",
    usrEmailDto:"",
    usrContraseniaDto:"",
    rolIdDto:{
      rolIdDto:2
    }
  };

  constructor( private usuarioService: UserService, private fb: FormBuilder, private snack: MatSnackBar, private singup: SingupService, private router: Router ) { 
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  onSubmit(){

    if(this.forma.invalid){
      this.snack.open('Los campo con * son obligatorios !!','Aceptar',{
        duration:3000
      })
      return;
    }

    const {nombre} = this.forma.value;

    this.usuarioDto.usrNombresDto = nombre;

    const {apellido} = this.forma.value;

    this.usuarioDto.usrApellidosDto = apellido;

    const {email} = this.forma.value;

    this.usuarioDto.usrEmailDto = email;

    const {contrasenia} = this.forma.value;

    this.usuarioDto.usrContraseniaDto = contrasenia;

    this.usuarioDto.rolIdDto.rolIdDto = this.valor;

    // console.log(this.usuarioDto);



    this.singup.singup(this.usuarioDto).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire({
          title: 'Registro con existo',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Iniciar Sesión',
          allowOutsideClick: false
          
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['login']);
          }
        })
      }
    )

  }

  crearFormulario(  ){

    this.forma = this.fb.group({
      nombre  : ['', [ Validators.required, Validators.minLength(3) ]  ],
      apellido: ['', [Validators.required, Validators.minLength(3) ] ],
      email  : ['', [ Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      contrasenia   : ['', Validators.required ],
      contrasenia2   : ['', Validators.required ],
    },{
      validators: this.usuarioService.passIguales('contrasenia','contrasenia2')
    });

    
  }

  rol(value:number){
    this.valor= value;
  }
  
  get nombreNoValido(){
    return (this.forma.get('nombre').invalid && this.forma.get('nombre').touched);
  }

  get apellidoNoValido(){
    return (this.forma.get('apellido').invalid && this.forma.get('apellido').touched);
  }

  get correoNoValido(){
    return (this.forma.get('email').invalid && this.forma.get('email').touched);
  }

  get passNoValido(){
    return (this.forma.get('contrasenia').invalid && this.forma.get('contrasenia').touched);
  }

  get pass2NoValido() {
    const pass1 = this.forma.get('contrasenia').value;
    const pass2 = this.forma.get('contrasenia2').value;

    return ( pass1 === pass2 ) ? false : true;
  }

}
