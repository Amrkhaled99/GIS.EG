import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog';
import { DataService } from 'src/app/services/DataService/data.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  receivedId: number|any;
  @Input() blogs: Blog[] = [];
  @Input()
  page!: number;
  @Input()
  itemsPerPage!: number;
  @Input()
  allBlogs!: number;



constructor( private dataService: DataService,private router: Router ){

}
ngOnInit(): void {}


onClickAnchor(id: any,slug:any) {

  const url = `/blogs/${slug}?id=${id}`;
  const newTab = window.open(url, '_blank');
  if (newTab !== null) {
    newTab.focus();
  }

}




}
