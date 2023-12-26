import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TostartCardComponent } from './tostart-card.component';

describe('TostartCardComponent', () => {
  let component: TostartCardComponent;
  let fixture: ComponentFixture<TostartCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TostartCardComponent]
    });
    fixture = TestBed.createComponent(TostartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
