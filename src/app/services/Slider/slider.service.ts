import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

    constructor(private http: HttpClient) {}
  
  
    getSlidersRequest() {
  
    return this.http.get(`${environment.apiURL}sliders` );
  
     }
  }
  