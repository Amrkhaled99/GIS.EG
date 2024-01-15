import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { City } from 'src/app/interfaces/city';
import { Country } from 'src/app/interfaces/country';
import { Faculty } from 'src/app/interfaces/faculty';
import { Place } from 'src/app/interfaces/place';
import { PlaceService } from 'src/app/services/Place/place.service';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-places-page',
  templateUrl: './places-page.component.html',
  styleUrls: ['./places-page.component.css']
})
export class PlacesPageComponent implements OnInit {

  public searchResults: Array<any> = [];

  form: FormGroup | undefined;
  allUniversities: number =0;
  page :number|any =1;
  itemsPerPage:number|any ;
  dataAvailable:boolean|any ;


  // univerFilter: University[] = [];
   searchForm:FormGroup= new FormGroup({
    search:new FormControl('')
   })

   countryForm:FormGroup= new FormGroup({
    CountryFormName:new FormControl('')
   })


   facultyForm:FormGroup= new FormGroup({
    FacultyFormName:new FormControl('')
   })


  searchTerm: any ;
  selectedCountry="";
  isChecked=false;
  btnChecked:any;

  selectedCityIds: number[] = [];
  selectedCategoryIds: number[] = [];
  countrySelectedList: string[] = [];
  facultySelectedList: string[] = [];


  selectedCountries$ = new BehaviorSubject<number[]>([]);
  selectedfaculties$ = new BehaviorSubject<number[]>([]);


  places: Place[] = [];
  faculties: Faculty[] = [];
  categories:Category[]=[];
  cities: City[] = [];


  constructor(
    private router: Router,
    private placeService: PlaceService,
    private render2:Renderer2,
    @Inject(DOCUMENT) private _document:Document){

      this.searchForm.get('search')?.valueChanges.
      pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((v) => this.placeService.ApplySearch(v))

      ).subscribe(
        (v)=>{

          this.countrySelectedList=[];
          this.facultySelectedList=[];
          this.page=1;
          this.itemsPerPage=30;
          this.allUniversities=this.places.length;
          this.places=v;
        }
      )


    }

    ngOnInit(): void {

      this.renderJsFile();


       this.getPlaces();
       this.getCities();
       this.getCountries();

       if(this. places.length!=0 ){
         this.dataAvailable=false;
       }



      }

    delay(ms: number) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }





    navigateToserverError() {
     //this.router.navigate(['/serverError']);
    }




renderPage(event:number){
  this.page=event;
  this.getPlaces();

 }



onChange(e: any) {
  const countryId = Number(e.target.value);
  if (e.target.checked) {
    this.selectedCityIds.push(countryId);
  } else {
    const index = this.selectedCityIds.indexOf(countryId);
    if (index !== -1) {
      this.selectedCityIds.splice(index, 1);
    }
  }
  this.selectedCountries$.next(this.selectedCityIds);
  this.filterCities()


}


//filter Category
onChangeFaculty(e: any) {
  const facultyId = Number(e.target.value);
  if (e.target.checked) {
    this.selectedCategoryIds.push(facultyId);
  } else {
    const index = this.selectedCategoryIds.indexOf(facultyId);
    if (index !== -1) {
      this.selectedCategoryIds.splice(index, 1);
    }
  }
  this.selectedfaculties$.next(this.selectedCategoryIds);

  this.filterCategories()


}




async filterCities() {

  this.placeService.applyCitiesFilter({ codes: this.selectedCityIds.join(',') })
  .then(res => {


    if (this.selectedCityIds.length !== 0) {
      this.page=1;
      this.itemsPerPage=6;
      this.places=res;

    } else {
    this.getPlaces()
    }

  })
  .catch(error => {
    console.error(error);
  });


}


async filterCategories() {

  this.placeService.applyCategoryFilter({ codes: this.selectedCategoryIds.join(',') })
  .then(places => {

    if (this.selectedCategoryIds.length !== 0) {
      this.page=1;
      this.itemsPerPage=6;
      this.places=places;

    } else {
    this.getPlaces()
    }

  })
  .catch(error => {
    console.error(error);
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


  getPlaces() {
   this.places= this.placeService.getPlaceServiceRequest();
  }

  getCities() {
   this.cities= this.placeService.getCitiesRequest();
  }

   getCountries() {
    this.categories=this.placeService.getCategoriesRequest();

  }

}
