export const UI_PAGE = "page";
export const UI_COMP = "comp";

export default {
  moduleAreas: {
    areas: []
  },
  favoriteAreas: [
   
      {
        value: "CT",
        label: "Custom Tax Codes",
        desc: "Custom Tax Codes",
        id: "customTaxCodes",
        type: "comp",
        link: true,
      },
      {
        value: "CP",
        label: "Custom Payments",
        desc: "Custom Payments",
        id: "customPayments",
        type: "comp",
        link: true,
      },
      {
        value: "CF",
        label: "Custom Formulas",
        desc: "Custom Formulas",
        id: "customFormulas",
        type: "comp",
        link: true,
        mode: "parent",
        parentDataId: "customTaxCodes",
        child: "customFormulas"

      },
      {
        value: "CO",
        label: "Companies",
        desc: "Companies",
        id: "companies",
        type: "comp",
        link: false
      },
      {
        value: "WS",
        label: "Worksites",
        desc: "Worksites",
        id: "worksites",
        type: "comp",
        mode: "parent",
        parentDataId: "companies",
        child: "worksites",
        link: false
      }
    ],

    formData: {  data: {},  isOpen: false, mode: "New", index: null },

    formFilterData: {
      companyCode:"",
      taxCode:"",
      startdate:"",
      riskClass:"",
      taxType:"",
      formNumber:0
    }
  
};


