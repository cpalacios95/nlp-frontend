import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SingupService } from 'src/app/services/singup/singup.service';
import { UserService } from 'src/app/services/user/user.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-admin',
  templateUrl: './modificar-admin.component.html',
  styleUrls: ['./modificar-admin.component.css']
})
export class ModificarAdminComponent implements OnInit {

  forma: FormGroup;

  usr = {
    usrIdDto:"",
    usrNombresDto:"",
    usrApellidosDto:"",
    usrContraseniaDto:"",
    rolIdDto:{
      rolIdDto:""
    }
  };

  

  constructor(private route: ActivatedRoute, private usuarioService: UserService, private fb: FormBuilder, private snack: MatSnackBar, private singup: SingupService, private router: Router ) { 
    this.crearFormulario();
    
    this.route.queryParams.subscribe((data:any)=>{
      this.usr.usrIdDto = data["usrIdDto"];
      this.usr.usrNombresDto = data["usrNombresDto"];
      this.usr.usrApellidosDto = data["usrApellidosDto"];
      this.usr.usrContraseniaDto = data["usrContraseniaDto"];
      this.usr.usrIdDto = data["usrIdDto"];
      this.usr.rolIdDto.rolIdDto= data["rolIdDto"];
      console.log(this.usr);

    })
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

    if(nombre != ""){
      this.usr.usrNombresDto = nombre;
    }

    const {apellido} = this.forma.value;

    if(apellido !=""){
      this.usr.usrApellidosDto = apellido;
    }

    const {contrasenia} = this.forma.value;

    if(contrasenia !=""){
      this.usr.usrContraseniaDto = contrasenia;
    }

    console.log("Este se envia");
    console.log(this.usr);

    this.usuarioService.updateDatos(this.usr).subscribe(
      (data:any)=>{
        
      Swal.fire({
        title: 'Actualizacion con exito',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Volver',
        allowOutsideClick: false
      
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['/admin/profile']);
        }
      })
        }
    )

  }

  crearFormulario(  ){

    this.forma = this.fb.group({
      nombre  : ['', [ Validators.minLength(3) ]  ],
      apellido: ['', [ Validators.minLength(3) ] ],
      contrasenia   : ['', ],
      contrasenia2   : ['', ],
    },{
      validators: this.usuarioService.passIguales('contrasenia','contrasenia2')
    });

    
  }

  
  get nombreNoValido(){
    return (this.forma.get('nombre').invalid && this.forma.get('nombre').touched);
  }

  get apellidoNoValido(){
    return (this.forma.get('apellido').invalid && this.forma.get('apellido').touched);
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
