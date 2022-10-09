import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  GetAllProducts(){
    return this.http.get<product[]>('https://api.npoint.io/830a2004ec3dd7ff2773');
    }
}
