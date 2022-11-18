import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() botonSalir: boolean;
  @Input() botonLogin: boolean;
  @Input() botonSingup: boolean;
  @Input() botonLogout: boolean;
  @Input() botonUsuario:string;

  constructor(private router: Router, private loging: LoginService) { 


  }

  ngOnInit(): void {
  }



  iniciarSesion(){
    this.router.navigate(['login']);
  }

  registrarse(){
    this.router.navigate(['singup']);
  }

  cerrarSesion(){
    this.loging.logout();
    this.router.navigate(['login']);
  }
}
