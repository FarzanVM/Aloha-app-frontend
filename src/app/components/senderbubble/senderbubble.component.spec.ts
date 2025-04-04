import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderbubbleComponent } from './senderbubble.component';

describe('SenderbubbleComponent', () => {
  let component: SenderbubbleComponent;
  let fixture: ComponentFixture<SenderbubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenderbubbleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderbubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
