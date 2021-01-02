import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypagesComponent } from './mypages.component';

describe('MypagesComponent', () => {
  let component: MypagesComponent;
  let fixture: ComponentFixture<MypagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
