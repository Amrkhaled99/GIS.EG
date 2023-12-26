import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesAreaSectionComponent } from './features-area-section.component';

describe('FeaturesAreaSectionComponent', () => {
  let component: FeaturesAreaSectionComponent;
  let fixture: ComponentFixture<FeaturesAreaSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturesAreaSectionComponent]
    });
    fixture = TestBed.createComponent(FeaturesAreaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
