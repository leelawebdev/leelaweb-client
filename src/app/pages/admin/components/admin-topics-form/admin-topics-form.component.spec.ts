import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTopicsFormComponent } from './admin-topics-form.component';

describe('AdminTopicsFormComponent', () => {
  let component: AdminTopicsFormComponent;
  let fixture: ComponentFixture<AdminTopicsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTopicsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTopicsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
