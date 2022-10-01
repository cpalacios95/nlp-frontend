import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  forma: FormGroup;

  loginData ={
    "username": '',
    "password": ''
  }

  email:string;
  contrasenia:string;

  constructor(private snack: MatSnackBar, private login: LoginService, private router: Router) { 

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
 
    const {email} = this.forma.value;
 
    this.loginData.username= email;

    const {password} = this.forma.value;
 
    this.loginData.password= password;

    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log(data);
        this.login.loginUsr(data.token);
        this.login.getCurrentUser().subscribe(
          (usr:any)=>{
            this.login.setUsr(usr);

            if( this.login.getUserRol()== "Administrativo" ){
              this.router.navigate(['admin']);
            }else if( this.login.getUserRol()== "Estudiante" ){
              this.router.navigate(['student']);
            }else{
              this.router.navigate(['professor']);
            }
             
          }
        )  
      },(error)=>{
        this.snack.open('El usuario o clave ingresado es incorrecto. Por favor, verifícalo e inténtalo nuevamente. Puede recuperar sus datos desde la opción ¿Olvidaste tus datos?.','Aceptar',{
          duration:3000
        })
      }
    )
  }

  crearFormulario(  ){

    this.forma = new FormGroup({
      'email': new FormControl('', { validators: [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]}),
      'password': new FormControl('', { validators: [Validators.required, Validators.minLength(5)]})
    });
    
  }


  get correoNoValido(){
    return (this.forma.get('email').invalid && this.forma.get('email').touched);
  }

  get contraseniaNoValida(){
    return (this.forma.get('password').invalid && this.forma.get('password').touched);
  }

  contrasena(){
    this.router.navigate(['forgot-password'])
  }

}
