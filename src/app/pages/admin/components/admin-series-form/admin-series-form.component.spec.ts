import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSeriesFormComponent } from './admin-series-form.component';

describe('AdminSeriesFormComponent', () => {
  let component: AdminSeriesFormComponent;
  let fixture: ComponentFixture<AdminSeriesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSeriesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSeriesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
