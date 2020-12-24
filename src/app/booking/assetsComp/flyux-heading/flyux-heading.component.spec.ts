import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyuxHeadingComponent } from './flyux-heading.component';

describe('FlyuxHeadingComponent', () => {
  let component: FlyuxHeadingComponent;
  let fixture: ComponentFixture<FlyuxHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyuxHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyuxHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
