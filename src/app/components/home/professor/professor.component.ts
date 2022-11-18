import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  usuario;

  constructor(private loging: LoginService) {
    let correo = this.loging.getUser();
    let indice = correo.indexOf("@");
    this.usuario= correo.substring(0, indice);
   }

  ngOnInit(): void {
  }

}
