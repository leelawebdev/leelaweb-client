import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTopicsComponent } from './admin-topics.component';

describe('AdminTopicsComponent', () => {
  let component: AdminTopicsComponent;
  let fixture: ComponentFixture<AdminTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTopicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
