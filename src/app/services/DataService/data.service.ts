import { CookieService } from 'ngx-cookie-service';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private myParameter: any;


  constructor(private cookies:CookieService) {} 

  setParameter(data: any) {
    this.myParameter = data;
    this.cookies.set("cardID",data);
    // sessionStorage.setItem('cardID',  this.myParameter);

  }

  // getParameter() {
  //   return this.myParameter;
  //   sessionStorage.setItem('cardID', data);

  // }

  getParameter() {
    // if(this.myParameter!=0){
    //   // return sessionStorage.getItem('cardID');
    //   // console.log("myParameter:",this.getParameter)
    //   // console.log("session:",sessionStorage.getItem('cardID'))

    // }
    // else{
    //   return this.myParameter;
    // }

    return this.cookies.get("cardID");

  }
}
