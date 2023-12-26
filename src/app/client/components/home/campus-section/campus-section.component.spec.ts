import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusSectionComponent } from './campus-section.component';

describe('CampusSectionComponent', () => {
  let component: CampusSectionComponent;
  let fixture: ComponentFixture<CampusSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampusSectionComponent]
    });
    fixture = TestBed.createComponent(CampusSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
