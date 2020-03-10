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
        child: "customFormulas"

      },
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


