import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private http:HttpClient) { }
  private API_GALLERY='http://localhost:3000/images';
   getGallery():Observable <any>{
      return this.http.get(this.API_GALLERY)
    }
      getProductosID(id:any):Observable <any>{
    return this.http.get(`${this.API_GALLERY}/${id}`)
  }
}
