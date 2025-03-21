import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeftnavComponent } from './admin-leftnav.component';

describe('AdminLeftnavComponent', () => {
  let component: AdminLeftnavComponent;
  let fixture: ComponentFixture<AdminLeftnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLeftnavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLeftnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
