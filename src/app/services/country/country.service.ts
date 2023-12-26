import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) {}


  getCountriesRequest() {

  return this.http.get(`${environment.apiURL}countries` );

   }


   public getUnivCountriesRequest():Observable<any>{
    return this.http.get(`${environment.apiURL}countries` );
  }


}

