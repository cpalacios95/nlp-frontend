import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, NavigationExtras } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  forma: FormGroup;
  usrEmailDto: string;
  usr ={
    email:"",
    codigo:""
  }

  usrDto = {
    usrIdDto:"",
    usrNombresDto:"",
    usrApellidosDto:"",
    usrEmailDto:"",
    usrContraseniaDto:"",
    usrFechaCreacionDto:"",
    rolIdDto:{
      rolIdDto:'',
      rolDescripcionDto:''
    }
  };

  constructor(private snack: MatSnackBar, private usrService: UserService, private router:Router) { 
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
 
    this.usrEmailDto= email;

    console.log(this.usrEmailDto);
    console.log(typeof(this.usrEmailDto));

    this.usrService.sendEmail(this.usrEmailDto).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire({
          title: `Ingrese el código de verificación que enviamos a ${this.usrEmailDto}` ,
          input: 'text',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Aceptar',
          showLoaderOnConfirm: true,
          preConfirm: (login) => {
    
            this.usr.email=this.usrEmailDto;
            this.usr.codigo=login;

            this.usrService.updatePass(this.usr).subscribe(
            (data:any)=>{
              this.usrDto=data;
              let navigationExtras: NavigationExtras = {
                queryParams:{
                  "usrIdDto": this.usrDto.usrIdDto,
                  "usrNombresDto": this.usrDto.usrNombresDto,
                  "usrApellidosDto": this.usrDto.usrApellidosDto,
                  "usrEmailDto":this.usrDto.usrEmailDto,
                  "usrContraseniaDto":this.usrDto.usrContraseniaDto,
                  "usrFechaCreacionDto":this.usrDto.usrFechaCreacionDto,
                  "rolIdDto": this.usrDto.rolIdDto.rolIdDto,
                }
              }
              console.log(navigationExtras);
              this.router.navigate(['new-password'], navigationExtras );
            }
            )
          }
        })
      }
    )

  }
  
  get correoNoValido(){
    return (this.forma.get('email').invalid && this.forma.get('email').touched);
  }

  crearFormulario(  ){

    this.forma = new FormGroup({
      'email': new FormControl('', { validators: [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]})
    });
    
  }

}
