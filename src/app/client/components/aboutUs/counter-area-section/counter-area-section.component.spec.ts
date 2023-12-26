import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAreaSectionComponent } from './counter-area-section.component';

describe('CounterAreaSectionComponent', () => {
  let component: CounterAreaSectionComponent;
  let fixture: ComponentFixture<CounterAreaSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterAreaSectionComponent]
    });
    fixture = TestBed.createComponent(CounterAreaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
