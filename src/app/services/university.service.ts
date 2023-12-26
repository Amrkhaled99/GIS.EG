import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  
  constructor(private http: HttpClient) {}


  // getUniversitiesRequest(page:any) {
  //   return this.http.get(`${environment.apiURL}universities?${environment.page}`+page );
  //  }

   // getUniversitiesCountriesRequest():Observable<any>  {

  //   return this.http.get(`${environment.apiURL}universities/countries` );
  
  //    }

  // getFacultiesCountriesRequest(){
  //   return this.http.get(`${environment.apiURL}universities/faculties` ); 
  // }

  getUniversitiesRequest(page:any):Observable<any>  {
    return this.http.get(`${environment.apiURL}universities?${environment.page}`+page );
   }

  getUniversitiesCountriesRequest():Observable<any>  {

    return this.http.get(`${environment.apiURL}universities/countries` );
  
    }

    getFacultiesCountriesRequest():Observable<any> {
     return this.http.get(`${environment.apiURL}universities/faculties` ); 
   }
 

 
   getAllUniversitiesRequest() {
  
    return this.http.get(`${environment.apiURL}universities?${environment.per_page}all` );

   }

   async getUniversityByID(id: string) {
    return this.http.get(`${environment.apiURL}universities/${id}`);
  }



   ApplySearch(Parameter: string):Observable<any> {
    return this.http.get(`${environment.apiURL}universities?name=${Parameter}`);
  }


 
  
  


  
  async ApplyCountryFilter(Parameter: any) {
  
    return this.http.get(`${environment.apiURL}universities?countries_ids=${Parameter}`);
  }

   
  async ApplyFacultyFilter(Parameter: any) {
  
    return this.http.get(`${environment.apiURL}universities?faculties_ids=${Parameter}`);
  }




}
