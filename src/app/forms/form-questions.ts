import {
  formDropDownQuestion,
  formShortTextQuestion,
  formStandardTextQuestion,
} from './form-interfaces';
import { entityTypes, sectors } from './form-lists';

export const formQuestionNameOfBusiness: formStandardTextQuestion = {
  inputType: 'standard-text',
  label: 'Name of Business',
  labelFor: 'businsess-name',
  inputID: 'businsess-name',
  inputName: 'businsess-name',
};

export const formQuestionBusinessEntityType: formDropDownQuestion = {
  inputType: 'dropDown',
  label: 'Business Entity Type',
  labelFor: 'entity-type',
  inputID: 'entity-type',
  inputName: 'entity-type',
  dropDownOptions: entityTypes,
};

export const formQuestionBusinessFoundingYear: formShortTextQuestion = {
  inputType: 'short-text',
  label: 'Business Founding Year',
  labelFor: 'founding-year',
  inputID: 'founding-year',
  inputName: 'founding-year',
};

export const formQuestionBusinessSector: formDropDownQuestion = {
  inputType: 'dropDown',
  label: 'Business Sector',
  labelFor: 'sector',
  inputID: 'sector',
  inputName: 'sector',
  dropDownOptions: sectors,
};
