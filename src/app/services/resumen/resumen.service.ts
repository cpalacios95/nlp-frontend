import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import baserUrl from '../url.services';

@Injectable({
  providedIn: 'root'
})
export class ResumenService {

  constructor(private http: HttpClient) { }


  setResumen(resumenDto: any){
    return this.http.post(`${baserUrl}/resumen`, resumenDto);
  }

  getResumenesSinRevision(){
    return this.http.get(`${baserUrl}/resumen/sin-revision`);
    
  }

  getResumenById(id: number){
    return this.http.get(`${baserUrl}/resumen/${id}`);
  }

  analizarResumen(id:number){
    return this.http.get(`${baserUrl}/resumen/analizar/${id}`, {responseType:'text'});
  }

}
