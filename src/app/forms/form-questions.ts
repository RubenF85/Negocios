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
  tag: 'businsess-name',
};

export const formQuestionBusinessEntityType: formDropDownQuestion = {
  inputType: 'dropDown',
  label: 'Business Entity Type',
  tag: 'entity-type',
  dropDownOptions: entityTypes,
};

export const formQuestionBusinessFoundingYear: formShortTextQuestion = {
  inputType: 'short-text',
  label: 'Business Founding Year',
  tag: 'founding-year',
};

const formQuestionBusinessSector: formDropDownQuestion = {
    inputType: 'dropDown',
    label: 'Business Sector',
    tag: 'sector',
    dropDownOptions: sectors,
  }

  const formQuestionBusinessIndustryGroups: formDropDownQuestion = {
    inputType: 'dropDown',
    label: 'Business Industry Group',
    tag: 'industry-group',
    dropDownOptions: IndustryGroup.CommunicationServices,
  }

export const formCascadeQuestionBusinessSector: formCascadingQuestion = {
  inputType: 'cascading',
  questionsList: [formQuestionBusinessSector, formQuestionBusinessIndustryGroups]
}
