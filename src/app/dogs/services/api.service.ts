import { ApiResponse } from './../models/api-response.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url = "https://dog.ceo/api/breeds/list/all"
  imgUrl = "https://dog.ceo/api/breed//images/random"

  getBreeds(){
    return this.http.get<ApiResponse>(this.url);
  }

  getImg(breed: string){
    return this.http.get<ApiResponse>(`https://dog.ceo/api/breed/${breed}/images/random`)
  }
}
