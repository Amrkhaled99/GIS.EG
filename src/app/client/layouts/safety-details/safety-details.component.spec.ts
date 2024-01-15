import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyDetailsComponent } from './safety-details.component';

describe('SafetyDetailsComponent', () => {
  let component: SafetyDetailsComponent;
  let fixture: ComponentFixture<SafetyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SafetyDetailsComponent]
    });
    fixture = TestBed.createComponent(SafetyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
