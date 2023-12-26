import { DOCUMENT } from '@angular/common';
import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }


  constructor(
    @Inject(DOCUMENT) private _document:Document
    ,private render2:Renderer2,
){}

  
  renderJsFile(){
    
    const s=this.render2.createElement('script');
    s.type='text/javascript';
    s.src="/assets/js/main.js";
    this.render2.appendChild(this._document.body,s);
    
  }
  
 

}
