import { DOCUMENT } from '@angular/common';
import { Component, Renderer2, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Faq } from 'src/app/interfaces/faq';
import { FaqService } from 'src/app/services/faqs/faq.service';

@Component({
  selector: 'app-faqs-page',
  templateUrl: './faqs-page.component.html',
  styleUrls: ['./faqs-page.component.css']
})
export class FaqsPageComponent implements OnInit{
  faqs: Faq[] = [];

  constructor(
    private render2:Renderer2,@Inject(DOCUMENT) private _document:Document,
    private faqService: FaqService,
    private router: Router ){
    
  }
 
  ngOnInit(): void {
  this.renderJsFile();
   this.getFaqs();
 
 }



 async getFaqs() {

  (await this.faqService.getFaqsRequest()).subscribe({
    next: (res:any) => this.faqs=res["data"],
    error: (err:any) =>  {
       this.navigateToserverError();
    },
    complete: () => { 
    }

  })  
}


navigateToserverError() {
 //this.router.navigate(['/serverError']);
}


openModel() {
  const modelDiv = document.getElementById('myModal');
  if(modelDiv!= null) {
    modelDiv.style.display = 'block';
  } 
}

CloseModel() {
  const modelDiv = document.getElementById('myModal');
  if(modelDiv!= null) {
    modelDiv.style.display = 'none';
  } 
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



