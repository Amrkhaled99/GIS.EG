import { Component, Input } from '@angular/core';
import { Slider } from 'src/app/interfaces/slider';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.css']
})
export class MainSliderComponent {
  @Input() sliders:Slider[]=[];
  

  constructor(){

  }
}
