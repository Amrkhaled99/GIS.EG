import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit,OnDestroy {
  constructor( private render2:Renderer2,@Inject(DOCUMENT) private _document:Document){
    
  }
  ngOnDestroy(): void {
  }
 
  ngOnInit(): void {
 this.renderJsFile();
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
