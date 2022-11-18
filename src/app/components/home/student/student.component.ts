import { LoginService } from './../../../services/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  usuario;

  constructor(private loging: LoginService) {
    let correo = this.loging.getUser();
    let indice = correo.indexOf("@");
    this.usuario= correo.substring(0, indice);
   }

  ngOnInit(): void {
  }

}
