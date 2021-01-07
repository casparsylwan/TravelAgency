import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypageOfferComponent } from './mypage-offer.component';

describe('MypageOfferComponent', () => {
  let component: MypageOfferComponent;
  let fixture: ComponentFixture<MypageOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypageOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypageOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
