import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFrontComponent } from './activity-front.component';

describe('ActivityFrontComponent', () => {
  let component: ActivityFrontComponent;
  let fixture: ComponentFixture<ActivityFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
