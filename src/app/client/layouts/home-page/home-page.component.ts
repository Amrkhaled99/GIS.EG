import { Component,Renderer2,Inject, OnInit, AfterViewInit, HostListener, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Slider } from '../../../interfaces/slider';
import { SliderService } from '../../../services/Slider/slider.service';
import { ReviewService } from '../../../services/Review/review.service';
import { Review } from 'src/app/interfaces/review';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
   sliders: Slider[] = [];
   isPageRefreshed: boolean = false;

   isLoaded:boolean=false;

   isTestimonialActive = true; // Set it to true by default or based on your condition

   // Add a HostListener to track window resize events
   @HostListener('window:resize', ['$event'])
   onResize(event: any): void {
     // Update the isTestimonialActive variable based on the screen width
     this.isTestimonialActive = window.innerWidth >= 1400; // Adjust the threshold as needed
   }


  reviews: Review[] = [];
  // reviews: any = {};

 // Your Swiper configuration
 swiperConfig: any = {
  slidesPerView: 'auto',
  spaceBetween: 20,
  breakpoints: {
    992: {
      slidesPerView: 'auto',
      spaceBetween: 20
    }
  }
};


  groupedReviews:Review[][]=[];
  tReview:any=[1,2,2,3,3];

   constructor( 
    private router: Router,
    private reviewService:ReviewService,
    private sliderService:SliderService,
    private render2:Renderer2,
    @Inject(DOCUMENT) private _document:Document){
    
      
   this.reviewService.getReviewsRequest().subscribe((res: Review[]) => {
    this.reviews = res;
    this.isLoaded=true;
  });




   

   }
 
  
   ngOnInit(): void {
 this.renderJsFile();

 this.router.events.subscribe((event) => {
   if (event instanceof NavigationStart) {
  if(  this.isPageRefreshed = window.performance.navigation.type === 1){
      
    }
  }
});
  }


  



  getReviews() {
    this.reviewService.getReviewsRequest().subscribe((res: Review[]) => {
      this.reviews = res;
      this.isLoaded=true;
    });
  }
  async getSliders() {

    (await this.sliderService.getSlidersRequest()).subscribe({
      next: (res:any) => this.sliders=res["data"],
      error: (err:any) =>  {},
      complete: () => {   

      }
 
    })  
  }



  chunkArray(array:any, size:number) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }


  
  renderJsFile(){
    
    const s=this.render2.createElement('script');
    s.type='text/javascript';
    s.src="/assets/js/main.js";
    this.render2.appendChild(this._document.body,s);
    
  }



  }