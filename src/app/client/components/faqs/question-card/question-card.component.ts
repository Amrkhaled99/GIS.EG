import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Faq } from 'src/app/interfaces/faq';
import { FaqService } from 'src/app/services/faqs/faq.service';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent {
  @Input() faqs: Faq[] = [];
  // faqs: any[] = []; // Initialize with your FAQ data
  showModal: boolean = false;
  selectedFaq: any = {};
  faqId:any;
  faq :Faq= {} as Faq;

  constructor(
    private faqService: FaqService,
    private router: Router
    ){
  }


  
  getFaq(faqId:any) {

  ( this.faqService.getFaqAnswerByIDRequest(faqId)).subscribe({
    next: (res:any) => this.faq=res,
    error: (err:any) =>  {
           this.navigateToserverError();
    },
    complete: () => { 
    }

  })  
}

  sendFaqID(id: number) {
   this.getFaq(id)
  }


  navigateToserverError() {
   //this.router.navigate(['/serverError']);
  }
}
