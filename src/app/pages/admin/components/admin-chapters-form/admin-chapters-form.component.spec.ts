import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChaptersFormComponent } from './admin-chapters-form.component';

describe('AdminChaptersFormComponent', () => {
  let component: AdminChaptersFormComponent;
  let fixture: ComponentFixture<AdminChaptersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminChaptersFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminChaptersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
