import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient) {}


  getFaqsRequest() {

  return this.http.get(`${environment.apiURL}faqs` );

   }

   getFaqAnswerByIDRequest(id: string) {

    return this.http.get(`${environment.apiURL}faqs/${id}` );
  
     }

}
