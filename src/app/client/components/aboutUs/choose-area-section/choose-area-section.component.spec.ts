import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseAreaSectionComponent } from './choose-area-section.component';

describe('ChooseAreaSectionComponent', () => {
  let component: ChooseAreaSectionComponent;
  let fixture: ComponentFixture<ChooseAreaSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseAreaSectionComponent]
    });
    fixture = TestBed.createComponent(ChooseAreaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
