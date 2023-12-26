import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAreaSectionComponent } from './blog-area-section.component';

describe('BlogAreaSectionComponent', () => {
  let component: BlogAreaSectionComponent;
  let fixture: ComponentFixture<BlogAreaSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogAreaSectionComponent]
    });
    fixture = TestBed.createComponent(BlogAreaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
