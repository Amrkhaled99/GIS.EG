import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { CountryService } from 'src/app/services/country/country.service';
// import Swiper from 'swiper';
import { UniversityService } from 'src/app/services/university.service';
import { University } from 'src/app/interfaces/university';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-section',
  templateUrl: './category-section.component.html',
  styleUrls: ['./category-section.component.css']
})
export class CategorySectionComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countryService: CountryService,
    private universityService: UniversityService, 
    private router: Router,
    private elementRef: ElementRef) {

    
  }

  ngOnInit(): void {
    
    this.getCountries();
  }


      

  async getCountries() {

    (await this.universityService.getUniversitiesCountriesRequest()).subscribe({
      next: (res:any) => {this.countries=res["data"]},
      error: (err:any) =>  {
             this.navigateToserverError();
      },
      complete: () => {}
  
    })  
  }

  navigateToserverError() {
    //this.router.navigate(['/serverError']);
  }

  
  
}
