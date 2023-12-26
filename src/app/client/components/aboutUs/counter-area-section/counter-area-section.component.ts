import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-counter-area-section',
  templateUrl: './counter-area-section.component.html',
  styleUrls: ['./counter-area-section.component.css']
})
export class CounterAreaSectionComponent {

  constructor( private render2:Renderer2,@Inject(DOCUMENT) private _document:Document){
    
  }
 
  ngOnInit(): void {
  
  
  
  
 }
}
