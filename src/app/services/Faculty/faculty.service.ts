import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient) {}


  getFacultiesRequest() {

  return this.http.get(`${environment.apiURL}faculties` );

   }

}
