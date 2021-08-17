import { Component, OnInit } from '@angular/core';
import { formTemplateObject } from '../form-interfaces';
import { formEstimatesBusinessBasics } from '../forms';

@Component({
  selector: 'app-form-assembler',
  templateUrl: './form-assembler.component.html',
  styleUrls: ['./form-assembler.component.css'],
})
export class FormBuilderComponent implements OnInit {
  formContent!: formTemplateObject;
  workFlowStep = 0;

  nextForm() {
    this.workFlowStep++;
    this.getForm(this.workFlowStep);
  }

  getForm(formNumber: number) {
    switch (formNumber) {
      case 1: {
        this.formContent = formEstimatesBusinessBasics;
        break;
      }
      case 2: {
        this.formContent = { header: 'Financial Details', questions: [] };
        break;
      }
    }
  }

  ngOnInit() {
    this.nextForm();
  }
}
