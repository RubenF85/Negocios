// Form Interfaces
export interface formTemplateObject {
    header: string;
    questions: Array<any>;
  }

// Questions Interfaces
export interface formQuestionMinimumContent {
    label: string,
    labelFor: string,
    inputID: string,
    inputName: string,
}

export interface formStandardTextQuestion extends formQuestionMinimumContent {
    inputType: 'standard-text'
}

export interface formShortTextQuestion extends formQuestionMinimumContent {
    inputType: 'short-text'
}

export interface formDropDownQuestion extends formQuestionMinimumContent {
    inputType: 'dropDown'
    dropDownOptions : Array<string>
}

export interface formCascadingQuestion {
    inputType: 'cascading'
    questionsList : Array<any>
}




