import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile-professor',
  templateUrl: './profile-professor.component.html',
  styleUrls: ['./profile-professor.component.css']
})
export class ProfileProfessorComponent implements OnInit {

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

  constructor(private usrService: UserService, private loginService: LoginService) {

    this.id= this.loginService.getUserId();
    this.getValues();
  }

  ngOnInit(): void {
  }

  getValues(){

    this.usrService.getValues(Number(this.id)).subscribe(
      (data:any)=>{
        this.usr=data;
        console.log(this.usr);
      }
    )
  }
}
