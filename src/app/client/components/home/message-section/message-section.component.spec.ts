import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSectionComponent } from './message-section.component';

describe('MessageSectionComponent', () => {
  let component: MessageSectionComponent;
  let fixture: ComponentFixture<MessageSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageSectionComponent]
    });
    fixture = TestBed.createComponent(MessageSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
