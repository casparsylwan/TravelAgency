import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCompletationComponent } from './order-completation.component';

describe('OrderCompletationComponent', () => {
  let component: OrderCompletationComponent;
  let fixture: ComponentFixture<OrderCompletationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderCompletationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCompletationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
