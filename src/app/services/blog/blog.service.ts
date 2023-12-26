import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {}


    // getBlogsRequest(page:number) {
    // return this.http.get(`${environment.apiURL}blogs?${environment.page}`+page );
    //  }
  
    
    getBlogsRequest(page:number):Observable<any>  {
      return this.http.get(`${environment.apiURL}blogs?${environment.page}`+page );
       }
    
     
      getTopBlogsRequest():Observable<any> {
      return this.http.get(`${environment.apiURL}blogs` );
       }
    
       ApplySearch(Parameter: string):Observable<any> {
        return this.http.get(`${environment.apiURL}blogs?title=${Parameter}`);
      }
    

     async getBlogByID(id: string) {
      return this.http.get(`${environment.apiURL}blogs/${id}`);
    }

     getBlogByID2(id: string) {
      return this.http.get(`${environment.apiURL}blogs/${id}`);
    }
 

}
