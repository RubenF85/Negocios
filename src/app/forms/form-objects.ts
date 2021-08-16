// Form Interfaces

export interface formTemplateObject {
    header: string,
    questions: Array<any>
}

export interface formQuestionObject {
    label: string,
    labelFor: string,
    inputType: string,
    inputID: string,
    inputName: string,
    dropDownOptions? : Array<any>
}

// Form Questions
export const formQuestionNameOfBusiness: formQuestionObject = {
    label: 'Name of Business',
    labelFor: 'businsess-name',
    inputType: 'standard-text',
    inputID: 'businsess-name',
    inputName: 'businsess-name',
}

export const formQuestionBusinessEntityType: formQuestionObject = {
    label: 'Business Entity Type',
    labelFor: 'entity-type',
    inputType: 'dropDown',
    inputID: 'entity-type',
    inputName: 'entity-type',
    dropDownOptions: [
      ' -Please select- ',
      'Sole Proprietorship',
      'Partnership',
      'Public Company',
      'Private Company',
      'Personal Liability Company (Inc)',
    ],
}

export const formQuestionBusinessFoundingYear: formQuestionObject = {
    label: 'Business Founding Year',
    labelFor: 'founding-year',
    inputType: 'small-text',
    inputID: 'founding-year',
    inputName: 'founding-year',
}

// Forms
export const formContentEstimatesBusinessBasics: formTemplateObject = {
  header: 'Basic Business Details',
  questions: [
    formQuestionNameOfBusiness,
    formQuestionBusinessEntityType,
    formQuestionBusinessFoundingYear
  ],
};


