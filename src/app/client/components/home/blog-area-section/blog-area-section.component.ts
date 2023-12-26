import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/interfaces/blog';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-area-section',
  templateUrl: './blog-area-section.component.html',
  styleUrls: ['./blog-area-section.component.css']
})
export class BlogAreaSectionComponent {
  blogs: Blog[] = [];

  constructor(
    private blogService: BlogService
    ,private router: Router
        ){}


    
    ngOnInit(): void  {   
      this.getBlogs()
    }
    

   getBlogs() {
    this.blogService.getTopBlogsRequest().subscribe(
      (res) => {
        this.blogs = res["data"].slice(0, 3);
      },
      (error) => {
 
             this.navigateToserverError();
      }
    );
    
  }
 
  onClickAnchor(id: any,slug:any) {

    const url = `/blogs/${slug}?id=${id}`;
    const newTab = window.open(url, '_blank');
    if (newTab !== null) {
      newTab.focus();
    }
  
  }
  
  

navigateToserverError() {
 //this.router.navigate(['/serverError']);
}



}
