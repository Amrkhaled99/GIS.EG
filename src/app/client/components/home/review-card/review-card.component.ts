import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from 'src/app/interfaces/review';
import { Slider } from 'src/app/interfaces/slider';
import { PlaceService } from 'src/app/services/Place/place.service';
import { ReviewService } from 'src/app/services/Review/review.service';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.css']
})
export class ReviewCardComponent {

  reviews: Review[] = [];
  // checkReviews:boolean=false;
  
  constructor( 
    private placeService:PlaceService,
    private router: Router,
    private render2:Renderer2,
    @Inject(DOCUMENT) private _document:Document){
    
   }
  
   ngOnInit(): void {
  

   this.getReviews();
  }

  
  async getReviews() {
  
    
    this.reviews= this.placeService.reviews;
  }

  

  navigateToserverError() {
   //this.router.navigate(['/serverError']);
  }
  
}


