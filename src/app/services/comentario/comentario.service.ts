import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../url.services';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private http: HttpClient) { }


  nuevoComentario(data:any){
    return this.http.post(`${baserUrl}/comentario`, data);
  }

  getComentarios(id:any){
    return this.http.get(`${baserUrl}/comentario/${id}`);
  }

  calificar(data:any){
    return this.http.post(`${baserUrl}/calificacion`, data);
  }

  getCalificacion(id: string){
    return this.http.get(`${baserUrl}/calificacion/${id}`);
  }
}
