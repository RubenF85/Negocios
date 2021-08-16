import {
    formCascadingQuestion,
  formDropDownQuestion,
  formShortTextQuestion,
  formStandardTextQuestion,
} from './form-interfaces';
import { entityTypes, IndustryGroup, sectors } from './form-lists';

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

const formQuestionBusinessSector: formDropDownQuestion = {
    inputType: 'dropDown',
    label: 'Business Sector',
    labelFor: 'sector',
    inputID: 'sector',
    inputName: 'sector',
    dropDownOptions: sectors,
  }

  const formQuestionBusinessIndustryGroups: formDropDownQuestion = {
    inputType: 'dropDown',
    label: 'Business Industry Group',
    labelFor: 'industry-group',
    inputID: 'industry-group',
    inputName: 'industry-group',
    dropDownOptions: IndustryGroup.CommunicationServices,
  }

export const formCascadeQuestionBusinessSector: formCascadingQuestion = {
  inputType: 'cascading',
  questionsList: [formQuestionBusinessSector, formQuestionBusinessIndustryGroups]
}
