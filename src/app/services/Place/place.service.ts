import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { City } from 'src/app/interfaces/city';
import { Place } from 'src/app/interfaces/place';
import { Review } from 'src/app/interfaces/review';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  placesEgypt:Place[] = [
    {
        longitude:31.3185753719682,
        latitude:29.99681925,
        code: 1001,
        city: 1010, 
      cityName:"Cairo",
        name: "General Hospital",
        isMostVisited:true,
    },
    {
        longitude: 29.9871,
        latitude: 31.2497,
        code: 2002,
        city: 1010, 
      cityName:"Cairo",
        name: "Nile Market",
        isMostVisited:true
    },
    {
        longitude: 30.0478,
        latitude: 31.2336,
        code: 3003,
        city: 1010, 
      cityName:"Cairo",
        name: "Pharaoh Bank",
        isMostVisited:true
    },
    {
        longitude: 31.2001,
        latitude: 29.8942,
        code: 4004,
        city: 1010, 
      cityName:"Cairo",
        name: "Pyramid Textiles",
        isMostVisited:false
    },
    {
        longitude: 30.9747,
        latitude: 29.3439,
        code: 5005,
        city: 1010, 
      cityName:"Cairo",
        name: "Al-Azhar Mosque",
        isMostVisited:false
    },
    {
        longitude: 31.2156,
        latitude: 30.0333,
        code: 1001,
        city: 1010, 
      cityName:"Cairo",
        name: "Sunrise Hospital",
        isMostVisited:false
    },
    {
        longitude: 29.9561,
        latitude: 31.2216,
        code: 2002,
        city: 102,
      cityName:"Alex",
        name: "Delta Mart" ,
        isMostVisited:false
    },
    {
        longitude: 30.0595,
        latitude: 31.2089,
        code: 3003,
        city: 1010, 
      cityName:"Cairo",
        name: "Sphinx Bank",
        isMostVisited:false
    },
    {
        longitude: 31.1991,
        latitude: 29.8947,
        code: 4004,
        city: 1010, 
      cityName:"Cairo",
        name: "Nile Garments",
        isMostVisited:false
    },
    {
        longitude: 30.9732,
        latitude: 29.3451,
        code: 5005,
        city: 1010, 
        cityName:"Cairo",
        name: "Omar Ibn El-Khattab Mosque",
        isMostVisited:false,
    }
  ];
  
     egyptCities:City[] = [
      { name: "Cairo", code: 1010 ,imageUrl:"assets/img/cities/cairo.png"},
      { name: "Alexandria", code: 102,imageUrl:"assets/img/cities/alex.png"},
      { name: "Luxor", code: 103 ,imageUrl:"assets/img/cities/luxor.png"},
      { name: "Aswan", code: 104,imageUrl:"assets/img/cities/aswan.png"},
      { name: "Giza", code: 105 ,imageUrl:"assets/img/cities/giza.png"},
      { name: "Damietta", code: 106 ,imageUrl:"assets/img/cities/damietta.png"},
      { name: "Sohag", code: 107,imageUrl:"assets/img/cities/suhaj.png"},
      { name: "Port Said", code: 108 ,imageUrl:"assets/img/cities/port_said.png"},
      { name: "Suez", code: 109 ,imageUrl:"assets/img/cities/suez.png"},
      { name: "Mansoura", code: 110 ,imageUrl:"assets/img/cities/daqahliya.png"}, // Just to demonstrate, repeating numbers to keep length
  ];
  
  egyCategories:Category[]=[
    { name: "Hospitals", code:1001 },
    { name: "Shops", code: 2002 },
    { name: "Banks", code: 3003 },
    { name: "Factories", code: 4004 },
    { name: "Mosques", code: 5005 },
  ];
  

  
 reviews: Review[] = [
  {
    id: 1,
    created_at: "2022-12-15",
    updated_at: "2022-12-16",
    student_name: "Ahmed Kareem",
    comment_title: "Great Experience!",
    comment: "The website is fantastic! Easy to navigate and incredibly useful.",
    stars: 5,
    avatar: "",
  },
  {
    id: 2,
    created_at: "2022-11-20",
    updated_at: "2022-11-25",
    student_name: "Nour Omar",
    comment_title: "Impressive Design",
    comment: "Love the design and the well-curated content. A must-visit!",
    stars: 5,
    avatar: "",
  },
  {
    id: 3,
    created_at: "2022-10-05",
    updated_at: "2022-10-08",
    student_name: "Aya Hossam",
    comment_title: "Efficient and Effective",
    comment: "Saves time with its clear recommendations. Highly recommended!",
    stars: 5,
    avatar: "",
  },
  {
    id: 4,
    created_at: "2022-09-12",
    updated_at: "2022-09-15",
    student_name: "Youssef Mahmoud",
    comment_title: "Smooth Browsing",
    comment: "Excellent site for discovering online gems. Seamless experience!",
    stars: 5,
    avatar: "",
  },
  // Add more comments with varying properties and older dates
];

  constructor(private http: HttpClient) {}


  getPlacesRequest()  {
    return this.placesEgypt;
   }

  getCategoriesRequest(){

    return this.egyCategories;
  
    }

    getCitiesRequest() {
     return this.egyptCities; 
   }
 


 
   getAllUniversitiesRequest() {
  
    return this.http.get(`${environment.apiURL}universities?${environment.per_page}all` );

   }

   async getUniversityByID(id: string) {
    return this.http.get(`${environment.apiURL}universities/${id}`);
  }

  
  async  getPlaceByID(id: string): Promise<Place | undefined> {
    const parsedId: number = parseInt(id, 10); // Parse the ID to a number if needed
    // Find the place with the matching code
    const place: Place | undefined = this.placesEgypt.find(place => place.code === parsedId);

    return place;
  }
  



  //  ApplySearch(Parameter: string):Observable<any> {
  //   return this.http.get(`${environment.apiURL}universities?name=${Parameter}`);
  // }

  ApplySearch(searchTerm: string): Observable<Place[]> {
    // Filtering places based on the provided search term
    const filteredPlaces = this.placesEgypt.filter(place =>
      place.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return of(filteredPlaces);
  }

 
   
  
    


  
  async ApplyCountryFilter(Parameter: any) {
  
    return this.http.get(`${environment.apiURL}universities?countries_ids=${Parameter}`);
  }


  async applyCitiesFilter(parameter: { codes: string }): Promise<Place[]> {
    try {
      const citiesCodes: number[] = parameter.codes.split(',').map(code => parseInt(code.trim(), 10));
      const filteredPlacesCities: Place[] = this.placesEgypt.filter(place => citiesCodes.includes(place.city));
      return filteredPlacesCities;
    } catch (error) {
      console.error("Error applying city filter:", error);
      return []; 
    }
  }
   

  async applyCategoryFilter(parameter: { codes: string }): Promise<Place[]> {
    try {
      const codesArray: number[] = parameter.codes.split(',').map(code => parseInt(code.trim(), 10));
      const filteredPlacesCategories: Place[] = this.placesEgypt.filter(place => codesArray.includes(place.code));
      return filteredPlacesCategories;
    } catch (error) {
      console.error("Error applying category filter:", error);
      return []; // Return empty array or handle the error as needed
    }
  }


  getTopPlacesRequest(){
   
    const topPlaces: Place[] =   this.placesEgypt.filter(place => place.isMostVisited==true);
   
     return  topPlaces.slice(0, 3);

     }
  
  
}

