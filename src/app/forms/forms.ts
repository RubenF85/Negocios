import { formTemplateObject } from './form-interfaces';
import {
  formCascadeQuestionBusinessSector,
  formQuestionBusinessEntityType,
  formQuestionBusinessFoundingYear,
  formQuestionNameOfBusiness,
} from './form-questions';

export const formEstimatesBusinessBasics: formTemplateObject = {
  header: 'Basic Business Details',
  questions: [
    formQuestionNameOfBusiness,
    formQuestionBusinessEntityType,
    formQuestionBusinessFoundingYear,
    formCascadeQuestionBusinessSector,
  ],
};
