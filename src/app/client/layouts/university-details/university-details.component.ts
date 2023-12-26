import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit,AfterViewInit , Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from 'src/app/interfaces/place';
import { University } from 'src/app/interfaces/university';
import { DataService } from 'src/app/services/DataService/data.service';
import { PlaceService } from 'src/app/services/Place/place.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.css']
})
export class UniversityDetailsComponent  implements OnInit {
  
    // Example usage
    lastUpdate:string="";
    

  placeId:any;
  place :Place= {} as Place;
  constructor( private placeService:PlaceService
    ,private dataService: DataService
    ,private render2:Renderer2,
    private route: ActivatedRoute
    ,@Inject(DOCUMENT) private _document:Document
    ,private sanitizer: DomSanitizer
    ){

      this.lastUpdate=this.getCurrentFormattedDate();
      
    }






  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.placeId= params['id']; 
      console.log(this.placeId);
    });

 this.renderJsFile();    this.getPlace();



  }
  

  getMapUrl(): SafeResourceUrl {
    const mapUrl = `https://maps.google.com/maps?q=${this.place.latitude},${this.place.longitude}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(mapUrl);
  }

   getCurrentFormattedDate(): string {
    const currentDate = new Date();
  
    let formattedDate = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric' }).format(currentDate);
  
    return formattedDate;
  }
  

  
  async getPlace() {
    this.placeService. getPlaceByID(this.placeId )
    .then(place => {
      if (place) {
        this.place=place;
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });

    
  }
 
  renderJsFile(){
    const s=this.render2.createElement('script');
    s.type='text/javascript';
    s.src="/assets/js/main.js";
    this.render2.appendChild(this._document.body,s);
  }

  backToHome() {

    const url = `/`;
    window.open(url, '_self');
  }
  


}
