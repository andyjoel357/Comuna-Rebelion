import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor(private http :HttpClient) { }
  private API_CAROUSEL ='http://localhost:3000/carousel'
  
  getCarouselImages():Observable <any>{
    return this.http.get(this.API_CAROUSEL)
  }
}
