import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit,AfterViewInit , Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { University } from 'src/app/interfaces/university';
import { DataService } from 'src/app/services/DataService/data.service';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.css']
})
export class UniversityDetailsComponent  implements OnInit {
  


 
  universityId:any;
  university :University= {} as University;
  constructor( private universityService:UniversityService
    ,private dataService: DataService
    ,private render2:Renderer2,
    private route: ActivatedRoute
    ,@Inject(DOCUMENT) private _document:Document){
      
    }




  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.universityId= params['id']; 
    });

 this.renderJsFile();    this.getUniversity();



  }
  

  
  async getUniversity() {
    (await this.universityService.getUniversityByID( this.universityId )).subscribe({
      next: (res:any) => this.university=res,
      error: (err:any) =>  {},
      complete: () => {
      //  console.log(this.university)

      }

    })  
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
