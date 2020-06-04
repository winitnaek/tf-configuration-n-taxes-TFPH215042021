export const UI_PAGE = "page";
export const UI_COMP = "comp";

export default {
  moduleAreas: {
    areas: []
  },
  favoriteAreas: [
    {
      value: "TH",
      label: "Test Metadata",
      desc: "Test Metadata",
      id: "testHarness",
      type: "comp",
      link: true
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
      value: "SS",
      label: "Select Sample Page",
      desc: "Select Sample Page",
      id: "selectSamplePage",
      type: "comp",
      link: false
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
  }
};
