import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideAdminComponent } from './side-admin.component';

describe('SideAdminComponent', () => {
  let component: SideAdminComponent;
  let fixture: ComponentFixture<SideAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
