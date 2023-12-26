import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.css']
})
export class ServerErrorComponent implements OnInit {
  
  constructor( 
    private render2:Renderer2,
    @Inject(DOCUMENT) private _document:Document){
  }
  ngOnInit(): void {
    this.renderJsFile()
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
