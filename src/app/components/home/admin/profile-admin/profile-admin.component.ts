import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {

  id: string;
  usr = {
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

  constructor(private usrService: UserService, private loginService: LoginService, private router: Router) {

    this.id= this.loginService.getUserId();
    this.getValues();
  }

  ngOnInit(): void {
  }

  getValues(){

    this.usrService.getValues(Number(this.id)).subscribe(
      (data:any)=>{
        this.usr=data;
      }
    )
  }

  modificar( ){
    let navigationExtras: NavigationExtras = {
      queryParams:{
        "usrIdDto": this.id,
        "usrNombresDto": this.usr.usrNombresDto,
        "usrApellidosDto": this.usr.usrApellidosDto,
        "usrEmailDto":this.usr.usrEmailDto,
        "usrContraseniaDto":this.usr.usrContraseniaDto,
        "usrFechaCreacionDto":this.usr.usrFechaCreacionDto,
        "rolIdDto": this.usr.rolIdDto.rolIdDto,
      }
    }

    console.log(navigationExtras);
    this.router.navigate(['/admin/edit'], navigationExtras);
  }
}
