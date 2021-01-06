import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupDestinationComponent } from './setup-destination.component';

describe('SetupDestinationComponent', () => {
  let component: SetupDestinationComponent;
  let fixture: ComponentFixture<SetupDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
