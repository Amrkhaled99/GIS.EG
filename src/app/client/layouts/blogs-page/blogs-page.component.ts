import { Component, OnInit, Inject, Renderer2  } from '@angular/core';
import { BlogService } from 'src/app/services/blog/blog.service';
import { Blog } from '../../../interfaces/blog';
import { DOCUMENT } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-blogs-page',
  templateUrl: './blogs-page.component.html',
  styleUrls: ['./blogs-page.component.css']
})
export class BlogsPageComponent implements OnInit{
  
  blogs: Blog[] = [];
  BlogSelectedList: string[] = []; // Initialize an empty array

  allBlogs: number =0;  
  page :number|any =1;  
  itemsPerPage:number|any;
  dataAvailable:boolean|any ;

  BlogSearchForm:FormGroup= new FormGroup({
    search:new FormControl('')
   })


  constructor(
  private router: Router,
    private blogService: BlogService,
    @Inject(DOCUMENT) private _document:Document,
    private render2:Renderer2){

      this.BlogSearchForm.get('search')?.valueChanges.
      pipe(
        debounceTime(2500),
        distinctUntilChanged(),
        switchMap((v) => this.blogService.ApplySearch(v))
      ).subscribe(
        (v)=>{
          this.page=1;
          this.itemsPerPage=v["meta"]["per_page"];
          this.blogs=v["meta"]["total"].length;

          this.BlogSelectedList=[];
              this.blogs=v?.data;
        }
      )

    }

  
    ngOnInit(): void  {   
   this.renderJsFile(); 
       this.getBlogs();
                
    // if(this.blogs.length!=0){
    //   this.dataAvailable=false;
    // }
    

    } 
  
  
    getBlogs() {
      this.blogService.getBlogsRequest(this.page).subscribe({
        next: (res: any) => {
         this.blogs=res["data"]
        this.itemsPerPage=res["meta"]["per_page"];
        this.allBlogs=res["meta"]["total"];
        },
        error: (err: any) => {
          // Handle errors here
        },
        complete: () => {
          this.dataAvailable = true;
        }
      });
    }
     

  // async getBlogs() {


  //   await this.blogService.getBlogsRequest(this.page).subscribe({
  //     next: (res:any) => {
  //       this.blogs=res["data"]
  //       this.itemsPerPage=res["meta"]["per_page"];
  //       this.allBlogs=res["meta"]["total"];
  //   },
  //     error: (err:any) =>  {
  //             this.navigateToserverError();
  //     },
  //     complete: () => { this.dataAvailable=true; }
 
  //   })  
  // }



   renderPage(event:number){
     this.page=event;
     this.getBlogs();

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
