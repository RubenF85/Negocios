import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBasicBusinessDetailsComponent } from './basic-business-details.component';

describe('EstimatesworkspaceComponent', () => {
  let component: FormBasicBusinessDetailsComponent;
  let fixture: ComponentFixture<FormBasicBusinessDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBasicBusinessDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBasicBusinessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
