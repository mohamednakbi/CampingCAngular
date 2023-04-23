import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailActivityComponent } from './detail-activity.component';

describe('DetailActivityComponent', () => {
  let component: DetailActivityComponent;
  let fixture: ComponentFixture<DetailActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
