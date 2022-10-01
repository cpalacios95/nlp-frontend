import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {

  forma: FormGroup;
  
  usr = {
    usrIdDto:1,
    usrNombresDto:"",
    usrApellidosDto:"",
    usrContraseniaDto:"",
    rolIdDto:{
      rolIdDto:1
    }
  }

  
  loginData ={
    "username": '',
    "password": ''
  }

  constructor(private snack: MatSnackBar, private login: LoginService, private router: Router, private route: ActivatedRoute, private usuarioService: UserService) { 

    this.crearFormulario();
    
    this.route.queryParams.subscribe((data:any)=>{
      let id:number= Number(data["usrIdDto"]);
      this.usr.usrIdDto = id
      this.usr.usrNombresDto = data["usrNombresDto"];
      this.usr.usrApellidosDto = data["usrApellidosDto"];
      this.loginData.username = data["usrEmailDto"];
      this.loginData.password = data["usrContraseniaDto"];
      this.usr.usrContraseniaDto = data["usrContraseniaDto"];
      this.usr.usrIdDto = data["usrIdDto"];
      this.usr.rolIdDto.rolIdDto= Number(data["rolIdDto"]);
      console.log(id);
      console.log(this.usr);

      login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        this.login.loginUsr(data.token);
      }
      )

    })

  }

  ngOnInit(): void {

  }

  onSubmit(){

    // if(this.forma.invalid){
    //   this.snack.open('Los campo con * son obligatorios !!','Aceptar',{
    //     duration:3000
    //   })
    //   return;
    // }
 
    const {password} = this.forma.value;
 
    // this.loginData.username= email;

    // const {password} = this.forma.value;
 
    this.usr.usrContraseniaDto = password;

    console.log(this.usr);

    // this.loginData.password= this.usr.usrContraseniaDto;
    // this.loginData.username= this.usr

    this.usuarioService.updateDatos(this.usr).subscribe(
      (data:any)=>{
        console.log(data);
        
        Swal.fire({
          title: 'Contraseña actualizada con exito',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Iniciar Sesión',
          allowOutsideClick: false
          
        }).then((result) => {
          if (result.isConfirmed) {
            this.login.logout();
            this.router.navigate(['login']);
          }
        })
        }
    )
  }

  crearFormulario(  ){

    this.forma = new FormGroup({
      'password': new FormControl('', { validators: [Validators.required]}),
      'password2': new FormControl('', { validators: [Validators.required, Validators.minLength(5)]})
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
