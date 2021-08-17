// Form Interfaces
export interface formTemplateObject {
    header: string;
    questions: Array<any>;
  }

// Questions Interfaces
export interface formQuestionMinimumContent {
    label: string,
    tag: string, /*One field for For ID and Name*/
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




