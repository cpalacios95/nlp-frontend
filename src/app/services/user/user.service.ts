import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import baserUrl from '../url.services';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  passIguales( pass1Name: string, pass2Name: string ) {

    return ( formGroup: FormGroup ) => {

      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];

      if ( pass1Control.value === pass2Control.value ) {
        pass2Control.setErrors(null);
      } else {
        pass2Control.setErrors({ noEsIgual: true });
      }

    }

  }

  getValues(id:number){

    return this.http.get(`${baserUrl}/usuario/${id}`);
  }

  sendEmail(email:string){
    return this.http.post(`${baserUrl}/usuario/forgot-password`, email);
  }

  updateDatos(usr:any){
    return this.http.put(`${baserUrl}/usuario/${usr.usrIdDto}`, usr);
  }


  updatePass(usr:any){
    return this.http.post(`${baserUrl}/usuario/confirm-code`, usr);
  }

}
