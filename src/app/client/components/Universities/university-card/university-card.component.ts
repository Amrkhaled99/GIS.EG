import { Component, Input } from '@angular/core';
import { University } from 'src/app/interfaces/university';
import { DataService } from 'src/app/services/DataService/data.service';
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Place } from 'src/app/interfaces/place';


@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-university-card',
  templateUrl: './university-card.component.html',
  styleUrls: ['./university-card.component.css']
})
export class UniversityCardComponent {
  // subscription:Subscription;
  private sharedId: string|any;
  imageUrl:any;
  @Input() placesEgypt: Place[] = [];

  @Input()
  page!: number;
  @Input()
  itemsPerPage!: number;
  @Input()
  allUniversities!: number;

   constructor(private dataService: DataService,private router: Router ){
 
   }


onClickAnchor(id: any,slug:any) {

  
  const url = `/universities/${slug}?id=${id}`;
  const newTab = window.open(url, '_blank');
  if (newTab !== null) {
    newTab.focus();
  };

}




 
public onError(): void {
    this.imageUrl = "/assets/img/other/default-image.png";
}
}
