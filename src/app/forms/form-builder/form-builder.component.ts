import { Component } from '@angular/core';
import { formContentEstimatesBusinessBasics } from '../form-objects';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css'],
})
export class FormBuilderComponent {
  formContent = formContentEstimatesBusinessBasics
}
