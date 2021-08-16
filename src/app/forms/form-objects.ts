export const formContentEstimatesBusinessBasics = {
  header: 'Basic Business Details',
  questions: [
    {
      label: 'Name of Business',
      labelFor: 'businsess-name',
      inputType: 'standard-text',
      inputID: 'businsess-name',
      inputName: 'businsess-name',
    },
    {
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
    },
    {
      label: 'Business Founding Year',
      labelFor: 'founding-year',
      inputType: 'small-text',
      inputID: 'founding-year',
      inputName: 'founding-year',
    },
  ],
};
