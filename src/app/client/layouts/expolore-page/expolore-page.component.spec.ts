import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpolorePageComponent } from './expolore-page.component';

describe('ExpolorePageComponent', () => {
  let component: ExpolorePageComponent;
  let fixture: ComponentFixture<ExpolorePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpolorePageComponent]
    });
    fixture = TestBed.createComponent(ExpolorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
