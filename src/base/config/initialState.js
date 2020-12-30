export const UI_PAGE = "page";
export const UI_COMP = "comp";

export default {
  moduleAreas: {
    areas: []
  },
  favoriteAreas: [
    {
      "value": "TH",
      "label": "Test Metadata",
      "desc": "Test Metadata",
      "id": "testHarness",
      "type": "comp",
      "link": true
    },
    {
      "value":"CF",
      "label":"What-If Test",
      "desc":"What-If Test",
      "id":"whatifEmp",
      "type":"comp",
      "link":true
   },
    {
      "value":"CO",
      "label":"Companies",
      "desc":"Companies",
      "id":"company",
      "type":"comp",
      "link":true
    },
    {
      value: "CT",
      label: "Custom Tax Codes",
      desc: "Custom Tax Codes",
      id: "customTaxCodes",
      type: "comp",
      link: true
    },
    {
      value: "CP",
      label: "Custom Payments",
      desc: "Custom Payments",
      id: "customPayments",
      type: "comp",
      link: true
    },
    {
      "value": "CG",
      "label": "Custom Garnishments",
      "desc": "Custom Garnishments",
      "id": "customGarnishment",
      "type": "comp",
      "link": true
    },
    {
      "value":"EG",
      "label":"Employee Groups",
      "desc":"Employee Groups",
      "id":"employeeGroup",
      "type":"comp",
      "link":true
   },
   {
    "value":"GG",
    "label":"Garnishment Groups",
    "desc":"Garnishment Groups",
    "id":"garnishmentGroup",
    "type":"comp",
    "link":true
   },
   {
    "value": "TEDO",
    "label": "Tax Effective Date Overrides",
    "desc": "Tax Effective Date Overrides",
    "id": "taxEffectiveDateOverrides",
    "type": "comp",
    "link": true
   },
   {
    value: "CF",
    label: "Custom Formulas",
    desc: "Custom Formulas",
    id: "customFormulas",
    type: "comp",
    link: true
  },
  {
    value: "WS",
    label: "Worksites",
    desc: "Worksites",
    id: "worksites",
    type: "comp",
    link: false
  },
    {
      value: "UQ",
      label: "Reporting",
      desc: "Reporting",
      id: "userDataQueries",
      type: UI_PAGE,
      link: true
    }
  ],

  formData: { data: {}, isOpen: false, mode: "New", index: null },

  formFilterData: {
    companyCode: "",
    taxCode: "",
    startDate: "",
    riskClass: "",
    taxType: "",
    formNumber: 0,
    companyName: "",
    company: "",
    courtesy: false,
    fein: "",
    name: ""
  },
  formDeleteData: {
    companyCode: "",
    taxCode: ""
  },
  formSaveData: {
    companyCode: "",
    taxCode: "",
    formdata: {}
  },
  parentData:{}
};
