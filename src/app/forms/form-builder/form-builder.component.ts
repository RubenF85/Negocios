import { Component, OnInit } from '@angular/core';
import { formTemplateObject } from '../form-objects';
import { formContentEstimatesBusinessBasics } from '../form-objects';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})

export class FormBuilderComponent implements OnInit {
  formContent: formTemplateObject = {header: 'Test', questions: []};
  workFlowStep = 0;

  nextForm() {
    this.workFlowStep++;
    console.log(this.workFlowStep)
    this.getForm(this.workFlowStep);
  }

  getForm(formNumber: number) {
    switch (formNumber) {
      case 1: {
        this.formContent = formContentEstimatesBusinessBasics;
        break;
      }
      case 2: {
        this.formContent = {header: 'Financial Details', questions: []}
        break;
      }
    }
  }

  ngOnInit() {
    this.nextForm();  }
}
