import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/interfaces/blog';
import { DataService } from 'src/app/services/DataService/data.service';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  receivedId: number|any;
  blogs: Blog[] = [];
  BlogId:any;
  blog :Blog= {} as Blog;
  constructor(
     private blogService:BlogService
   , private router: Router 
    ,private dataService: DataService
    ,private render2:Renderer2
    ,private route: ActivatedRoute
    ,@Inject(DOCUMENT) private _document:Document){

     
    }


  ngOnInit(): void {
  this.renderJsFile();
    this.route.queryParams.subscribe(params => {
      this.BlogId= params['id']; 
    });

    
  

    this.renderPage();
    this.getBlog();
    this.getBlogs();


  }
    

  renderPage(){
    
    
    
    
  }

  
   getBlogs() {

     this.blogService.getTopBlogsRequest().subscribe({
      next: (res:any) => {
        this.blogs=res["data"].slice(-3);
      
    } })  
  }


  getBlog() {
  
    this.blogService.getBlogByID2(this.BlogId).subscribe({
      next: (res:any) => {
        this.blog=res;
      
    } })  
  
    } 
  
  

 
    onClickAnchor(id: any,slug:any) {

      const url = `/blogs/${slug}?id=${id}`;
      const newTab = window.open(url, '_blank');
      if (newTab !== null) {
        newTab.focus();
      }
    
    }
    
    
    
 
    renderJsFile(){
      const s=this.render2.createElement('script');
      s.type='text/javascript';
      s.src="/assets/js/main.js";
      this.render2.appendChild(this._document.body,s);
    }
  


 
    
}
