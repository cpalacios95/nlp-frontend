import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../url.services';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  constructor(private http: HttpClient) { }

  public singup( usrDto:any ){
    return this.http.post(`${baserUrl}/usuario/singup`, usrDto);
  }

}
