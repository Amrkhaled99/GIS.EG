import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/interfaces/category';
import { City } from 'src/app/interfaces/city';
import { Place } from 'src/app/interfaces/place';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  placesEgypt:Place[] = [
    {
        longitude: 31.2357,
        latitude: 30.0444,
        code: 1001,
        city: 1010, 
      cityName:"Cairo",
        name: "General Hospital"
    },
    {
        longitude: 29.9871,
        latitude: 31.2497,
        code: 2002,
        city: 1010, 
      cityName:"Cairo",
        name: "Nile Market"
    },
    {
        longitude: 30.0478,
        latitude: 31.2336,
        code: 3003,
        city: 1010, 
      cityName:"Cairo",
        name: "Pharaoh Bank"
    },
    {
        longitude: 31.2001,
        latitude: 29.8942,
        code: 4004,
        city: 1010, 
      cityName:"Cairo",
        name: "Pyramid Textiles"
    },
    {
        longitude: 30.9747,
        latitude: 29.3439,
        code: 5005,
        city: 1010, 
      cityName:"Cairo",
        name: "Al-Azhar Mosque"
    },
    {
        longitude: 31.2156,
        latitude: 30.0333,
        code: 1001,
        city: 1010, 
      cityName:"Cairo",
        name: "Sunrise Hospital"
    },
    {
        longitude: 29.9561,
        latitude: 31.2216,
        code: 2002,
        city: 102,
      cityName:"Alex",
  
        name: "Delta Mart"
    },
    {
        longitude: 30.0595,
        latitude: 31.2089,
        code: 3003,
        city: 1010, 
      cityName:"Cairo",
        name: "Sphinx Bank"
    },
    {
        longitude: 31.1991,
        latitude: 29.8947,
        code: 4004,
        city: 1010, 
      cityName:"Cairo",
        name: "Nile Garments"
    },
    {
        longitude: 30.9732,
        latitude: 29.3451,
        code: 5005,
        city: 1010, 
        cityName:"Cairo",
        name: "Omar Ibn El-Khattab Mosque"
    }
  ];
  
     egyptCities:City[] = [
      { name: "Cairo", code: 1010 },
      { name: "Alexandria", code: 102 },
      { name: "Luxor", code: 103 },
      { name: "Aswan", code: 104 },
      { name: "Giza", code: 105 },
      { name: "Hurghada", code: 106 },
      { name: "Sharm El Sheikh", code: 107 },
      { name: "Port Said", code: 108 },
      { name: "Suez", code: 109 },
      { name: "Mansoura", code: 110 } // Just to demonstrate, repeating numbers to keep length
  ];
  
  egyCategories:Category[]=[
    { name: "Hospitals", code:1001 },
    { name: "Shops", code: 2002 },
    { name: "Banks", code: 3003 },
    { name: "Factories", code: 4004 },
    { name: "Mosques", code: 5005 },
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



   ApplySearch(Parameter: string):Observable<any> {
    return this.http.get(`${environment.apiURL}universities?name=${Parameter}`);
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
  
}

