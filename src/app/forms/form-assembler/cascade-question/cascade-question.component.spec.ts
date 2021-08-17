import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CascadeQuestionComponent } from './cascade-question.component';

describe('CascadeQuestionComponent', () => {
  let component: CascadeQuestionComponent;
  let fixture: ComponentFixture<CascadeQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CascadeQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CascadeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
