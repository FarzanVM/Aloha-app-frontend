import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverbubbleComponent } from './receiverbubble.component';

describe('ReceiverbubbleComponent', () => {
  let component: ReceiverbubbleComponent;
  let fixture: ComponentFixture<ReceiverbubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiverbubbleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiverbubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
