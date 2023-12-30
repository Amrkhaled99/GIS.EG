import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { CountryService } from 'src/app/services/country/country.service';
// import Swiper from 'swiper';
import { UniversityService } from 'src/app/services/university.service';
import { University } from 'src/app/interfaces/university';
import { Router } from '@angular/router';
import { PlaceService } from 'src/app/services/Place/place.service';
import { Place } from '../../../../interfaces/place';
import { City } from 'src/app/interfaces/city';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.css']
})
export class CategorySectionComponent implements OnInit {
  cities: City[] = [];

  constructor(private countryService: CountryService,
    private placeService: PlaceService, 
    private router: Router,
    private elementRef: ElementRef) {

    
  }

  ngOnInit(): void {
    
    this.getCities();
  }


      

  async getCities() {

    this.cities=this.placeService.egyptCities;
  }

  navigateToserverError() {
    //this.router.navigate(['/serverError']);
  }

  
  
}
