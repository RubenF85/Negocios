import { formTemplateObject } from './form-interfaces';
import {
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
  ],
};
