import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/interfaces/blog';
import { Place } from 'src/app/interfaces/place';
import { PlaceService } from 'src/app/services/Place/place.service';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-area-section',
  templateUrl: './blog-area-section.component.html',
  styleUrls: ['./blog-area-section.component.css']
})
export class BlogAreaSectionComponent {
  places: Place[] = [];
  lastUpdate:string="";

  constructor(
    private placeService: PlaceService
    ,private router: Router
        ){

          this.lastUpdate=this.getCurrentFormattedDate();

        }


    
    ngOnInit(): void  {   
      this.getPlaces()
    }
    

   getPlaces() {
    this.places=this.placeService.getTopPlacesRequest();
    
  }
 
  onClickAnchor(id: any,slug:any) {

    const url = `/services/${slug}?id=${id}`;
    const newTab = window.open(url, '_blank');
    if (newTab !== null) {
      newTab.focus();
    }
  
  }
  

  
  getCurrentFormattedDate(): string {
    const currentDate = new Date();
  
    let formattedDate = new Intl.DateTimeFormat('en-US', { day: 'numeric', month: 'short', year: 'numeric' }).format(currentDate);
  
    return formattedDate;
  }
  

  
  

navigateToserverError() {
 //this.router.navigate(['/serverError']);
}



}
