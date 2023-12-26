import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) {
    
  }
  
  
  getReviewsRequest():Observable<any>{

  return this.http.get(`${environment.apiURL}testimonials` );

   }
}
