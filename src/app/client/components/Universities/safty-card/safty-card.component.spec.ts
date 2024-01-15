import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaftyCardComponent } from './safty-card.component';

describe('SaftyCardComponent', () => {
  let component: SaftyCardComponent;
  let fixture: ComponentFixture<SaftyCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaftyCardComponent]
    });
    fixture = TestBed.createComponent(SaftyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
