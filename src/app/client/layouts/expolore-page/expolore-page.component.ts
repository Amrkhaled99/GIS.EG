import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Country } from 'src/app/interfaces/country';
import { University } from 'src/app/interfaces/university';
import { UniversityService } from 'src/app/services/university.service';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, debounceTime, delay, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { Faculty } from 'src/app/interfaces/faculty';
import { Router } from '@angular/router';
import { City } from 'src/app/interfaces/city';
import { Place } from 'src/app/interfaces/place';

@Component({
  selector: 'app-expolore-page',
  templateUrl: './expolore-page.component.html',
  styleUrls: ['./expolore-page.component.css']
})
export class ExpolorePageComponent implements OnInit {

  selectedCountryIds: number[] = [];
  selectedFacultyIds: number[] = [];
  countrySelectedList: string[] = []; 
  facultySelectedList: string[] = []; 


  selectedCountries$ = new BehaviorSubject<number[]>([]);
  selectedfaculties$ = new BehaviorSubject<number[]>([]);


  places: Place[] = [];
  faculties: Faculty[] = [];
  countries:Country[]=[];
  cities: City[] = [];

  placesEgypt:Place[] = [
  {
      longitude: 31.2357,
      latitude: 30.0444,
      code: 1001,
      city: 101, 
    cityName:"Cairo",
      name: "General Hospital"
  },
  {
      longitude: 29.9871,
      latitude: 31.2497,
      code: 2002,
      city: 101, 
    cityName:"Cairo",
      name: "Nile Market"
  },
  {
      longitude: 30.0478,
      latitude: 31.2336,
      code: 3003,
      city: 101, 
    cityName:"Cairo",
      name: "Pharaoh Bank"
  },
  {
      longitude: 31.2001,
      latitude: 29.8942,
      code: 4004,
      city: 101, 
    cityName:"Cairo",
      name: "Pyramid Textiles"
  },
  {
      longitude: 30.9747,
      latitude: 29.3439,
      code: 5005,
      city: 101, 
    cityName:"Cairo",
      name: "Al-Azhar Mosque"
  },
  {
      longitude: 31.2156,
      latitude: 30.0333,
      code: 6006,
      city: 101, 
    cityName:"Cairo",
      name: "Sunrise Hospital"
  },
  {
      longitude: 29.9561,
      latitude: 31.2216,
      code: 7007,
      city: 101, 
    cityName:"Cairo",

      name: "Delta Mart"
  },
  {
      longitude: 30.0595,
      latitude: 31.2089,
      code: 8008,
      city: 101, 
    cityName:"Cairo",
      name: "Sphinx Bank"
  },
  {
      longitude: 31.1991,
      latitude: 29.8947,
      code: 9009,
      city: 101, 
    cityName:"Cairo",
      name: "Nile Garments"
  },
  {
      longitude: 30.9732,
      latitude: 29.3451,
      code: 1010,
      city: 101, 
    cityName:"Cairo",
      name: "Omar Ibn El-Khattab Mosque"
  }
];

  searchTerm: any ;
  selectedCountry="";
  isChecked=false;
  btnChecked:any;

   egyptCities = [
    { name: "Cairo", code: 1000 },
    { name: "Alexandria", code: 2000 },
    { name: "Luxor", code: 3000 },
    { name: "Aswan", code: 4000 },
    { name: "Giza", code: 5000 },
    { name: "Hurghada", code: 6000 },
    { name: "Sharm El Sheikh", code: 7000 },
    { name: "Port Said", code: 8000 },
    { name: "Suez", code: 9000 },
    { name: "Mansoura", code: 1001 } // Just to demonstrate, repeating numbers to keep length
];

egyCategories=[
  { name: "Hospitals", code:101 },
  { name: "Shops", code: 202 },
  { name: "Banks", code: 303 },
  { name: "Factories", code: 404 },
  { name: "Mosques", code: 505 },
];



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


  constructor( 
    private router: Router,
    private univerService: UniversityService,
    private render2:Renderer2,
    @Inject(DOCUMENT) private _document:Document){
     
      this.searchForm.get('search')?.valueChanges.
      pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((v) => this.univerService.ApplySearch(v))
        
      ).subscribe(
        (v)=>{

          this.countrySelectedList=[];
          this.facultySelectedList=[];
          this.page=1;
          this.itemsPerPage=6;
          this.allUniversities=this.placesEgypt.length;

          // console.log("Filer:",v.data)
        }
      )

    
    
  }
 
  ngOnInit(): void {
         
 this.renderJsFile();
  
  
  this.getUniversities();
  this.getCountries();
  this.getFaculties();
  
  if(this. places.length!=0 ){
    this.dataAvailable=false;
  }
  


 }

  getFaculties() {
  this.univerService.getFacultiesCountriesRequest().subscribe({
    next: (res: any) => {
      this.faculties = res["data"];
    },
    error: (err: any) => {
      // Handle errors here
    },
    complete: () => {}
  });
}

 getCountries() {
  // this.univerService.getUniversitiesCountriesRequest().subscribe({
  //   next: (res: any) => {
  //     this.cities = res["data"];
  //   },
  //   error: (err: any) => {
  //     // Handle errors here
  //   },
  //   complete: () => {}
  // });
}

 getUniversities() {
  this.univerService.getUniversitiesRequest(this.page).subscribe({
    next: (res: any) => {
      this. places = res["data"];
      this.page=1;
      this.itemsPerPage=6;
      this.allUniversities=this.placesEgypt.length;
    },
    error: (err: any) => {
      // Handle errors here
    },
    complete: () => {
      this.dataAvailable = true;
    }
  });
}
 
 


//  async getFaculties() {

//   (await this.univerService.getFacultiesCountriesRequest()).subscribe({
//     next: (res:any) => {this.faculties=res["data"]},
//     error: (err:any) =>  {
//           // this.navigateToserverError();

//     },
//     complete: () => {}

//   })  
// }
 


//  async getCountries() {

//   (await this.univerService.getUniversitiesCountriesRequest()).subscribe({
//     next: (res:any) => {this.countries=res["data"]},
//     error: (err:any) =>  {
//           // this.navigateToserverError();

//     },
//     complete: () => {}

//   })  
// }

//  async getUniversities() {

//   (await this.univerService.getUniversitiesRequest(this.page)).subscribe({
//     next: (res:any) => {
//       this.universities=res["data"];   
//       this.itemsPerPage=res["meta"]["per_page"];
//       this.allUniversities=res["meta"]["total"];
//   },
//     error: (err:any) =>  {
//           // this.navigateToserverError();

//     },
//     complete: () =>{ this.dataAvailable=true; }


//   })  
// }




renderPage(event:number){
  this.page=event;
  this.getUniversities();

 }



onChange(e: any) {
  const countryId = Number(e.target.value);
  if (e.target.checked) {
    this.selectedCountryIds.push(countryId);
  } else {
    const index = this.selectedCountryIds.indexOf(countryId);
    if (index !== -1) {
      this.selectedCountryIds.splice(index, 1);
    }
  }
  this.selectedCountries$.next(this.selectedCountryIds);
  this.filterCountries()


}
//filterFaculties
onChangeFaculty(e: any) {
  const facultyId = Number(e.target.value);
  if (e.target.checked) {
    this.selectedFacultyIds.push(facultyId);
  } else {
    const index = this.selectedFacultyIds.indexOf(facultyId);
    if (index !== -1) {
      this.selectedFacultyIds.splice(index, 1);
    }
  }
  this.selectedfaculties$.next(this.selectedFacultyIds);
  this.filterFaculties()


}






async filterCountries() {

  (await this.univerService.ApplyCountryFilter(this.selectedCountryIds.join(','))).subscribe({
    next: (res:any) => {
      if (this.selectedCountryIds.length !== 0) {
              this.page=1;
              this.itemsPerPage=6;
              this.allUniversities=this.placesEgypt.length;
            } else {
            this.getUniversities()
            }
   
           },
    error: (err:any) =>  {
          // this.navigateToserverError();

    },
    complete: () =>{ 

    }


  })  
}


async filterFaculties() {

  (await this.univerService.ApplyFacultyFilter(this.selectedFacultyIds.join(','))).subscribe({
    next: (res:any) => {
      // console.log(this.selectedFacultyIds.length)
      if (this.selectedFacultyIds.length !== 0) {
           this.page=1;
           this.itemsPerPage=6;
           this.allUniversities=this.placesEgypt.length;
            } 
            else {
              this.getUniversities()
            }
   
           },
    error: (err:any) =>  {
          // this.navigateToserverError();

    },
    complete: () =>{ 

    }


  })  
}

// Helper function to introduce a delay
delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



navigateToserverError() {
 //this.router.navigate(['/serverError']);
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

