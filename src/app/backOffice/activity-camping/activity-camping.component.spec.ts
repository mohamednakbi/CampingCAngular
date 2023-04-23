import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCampingComponent } from './activity-camping.component';

describe('ActivityCampingComponent', () => {
  let component: ActivityCampingComponent;
  let fixture: ComponentFixture<ActivityCampingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityCampingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
