import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from '../url.services';

@Injectable({
  providedIn: 'root'
})
export class AlgoritmoService {

  constructor(private http: HttpClient) { }


  getAlgoritmo(){

    return this.http.get(`${baserUrl}/algoritmo`);
  }

}
