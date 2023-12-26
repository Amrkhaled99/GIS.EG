import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnaerAreaSectionComponent } from './partnaer-area-section.component';

describe('PartnaerAreaSectionComponent', () => {
  let component: PartnaerAreaSectionComponent;
  let fixture: ComponentFixture<PartnaerAreaSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartnaerAreaSectionComponent]
    });
    fixture = TestBed.createComponent(PartnaerAreaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
