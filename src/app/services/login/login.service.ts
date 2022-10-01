import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../url.services';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  //obtener token
  public generateToken(loginData: object){
    return this.http.post(`${baserUrl}/generate-token`, loginData);
  }


  //inciar sesion y establecer el token en el localstorage
  public loginUsr(token: string){
    localStorage.setItem('token', token);
  }

  //verificamos si el ususario sigue loggiado
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if( tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }
    return true;
  }


  //cerramos sesion y eleminamos el token
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    localStorage.removeItem('usr');
    localStorage.removeItem('id');
    return true;
  }

  //obtenemos token del localStorage
  public getToken(){
    return localStorage.getItem('token');
  }

  //guardamos el usuario y el rol en el localStorage
  public setUsr(usr: any){
    localStorage.setItem('usr', usr.usrEmailDto);
    localStorage.setItem('rol', usr.rolIdDto.rolDescripcionDto);
    localStorage.setItem('id', usr.usrIdDto);
  }

  //obtenemos el usuario del localStorage
  public getUser(){
    return localStorage.getItem('usr');
  }

  //obtenemos el id del localStorage
  public getUserId(){
    return localStorage.getItem('id');
  }

  //obtenemos el rol del localstorage
  public getUserRol(){
    return localStorage.getItem('rol');
  }

  public getCurrentUser(){
    return this.http.get(`${baserUrl}/usuario-actual`)
  }


}
