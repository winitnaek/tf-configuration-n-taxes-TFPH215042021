import {
  customPayments,
  customTaxCodes,
  allBSIPlans,
  populateV3States,
  experienceRates,
  supplementalMethods,
  customFormulas,
  customTaxFormulas,
  companies,
  worksites,
  worksiteCompanies,
  selectSamplePage
} from "../../app/metadata/metaData";

import {
  GET_CUSTOM_PAYMENTS_LIST,
  GET_CUSTOM_TAX_CODES,
  GET_ALL_BSI_PLANS,
  GET_ALL_POPULATED_V3_STATES,
  GET_EXPERIENCE_RATES,
  GET_SUPPLEMENTAL_INFO_FOR_TAX,
  GET_RECENT_USAGE,
  GET_CUSTOM_FORMULAS,
  GET_CUSTOM_TAX_FORMULAS,
  GET_COMPANIES,
  GET_WORKSITES,
  GET_WORKSITES_LOCATIONS,
  GET_ALL_TAXCODES_AUTOCOMPLETE,
  GET_ALL_TAXTYPES_AUTOCOMPLETE,
  GET_ALL_COMPCODE_AUTOCOMPLETE,
  GET_ALL_RISKCLASS_AUTOCOMPLETE,
  GET_ALL_AUTHORITY_CODE_AUTOCOMPLETE,
  GET_PLACE_CODE_AUTOCOMPLETE,
  GET_SCHOOL_DISTRICT_AUTOCOMPLETE,
  GET_GARNISMENT_FORMULA_AUTOCOMPLETE,
  GET_GARNISMENT_GROUP_CODE_AUTOCOMPLETE,
  GET_CUSTOM_GARNISMENT_FORMULA_AUTOCOMPLETE,
  GET_COUNTY_AUTOCOMPLETE,
  GET_GROUP_AUTOCOMPLETE,
  GET_USER_TAX_CODE_AUTOCOMPLETE_MOCKDATA,
  GET_GROUP_CODE_AUTOCOMPLETE,
  GET_TAX_CODE_UDQ_AUTOCOMPLETE_MOCKDATA,
  GET_TYPEOF_DATA_AUTOCOMPLETE_MOCKDATA,
  GET_USER_TAX_AUTOCOMPLETE_MOCKDATA,
  GET_PAYMENT_CODE_AUTOCOMPLETE_MOCKDATA,
  GET_TAX_CODE_RECIPROCATE_AUTOCOMPLETE_MOCKDATA,
  GET_TAX_CODE_OVERRIDDEN_AUTOCOMPLETE_MOCKDATA,
  GET_NON_RESIDENCE_TAX_TYPE_AUTOCOMPLETE_MOCKDATA,
  GET_RESIDENCE_TAX_TYPE_AUTOCOMPLETE_MOCKDATA,
  GET_CALCULATION_METHOD_AUTOCOMPLETE_MOCKDATA,
  GET_WAGE_REPORTING_METHOD_AUTOCOMPLETE_MOCKDATA,
  DELTE_CUSTOM_PAYMENT,
  DELETE_CUSTOM_TAX_CODES,
  SAVE_CUSTOM_PAYMENT,
  SAVE_CUSTOM_TAX_CODES,
  SAVE_CUSTOM_FORMULAS,
  SAVE_WORKSITES_LOCATIONS,
  SAVE_WORKSITES
} from "../constants/ServiceUrls";

export const UI_PAGE = "page";
export const UI_COMP = "comp";
export const UI_TEST = "uitest";

export const tftools = [
  {
    value: "UQ",
    label: "Select Sample Page",
    desc: "Select Sample Page",
    id: "selectSamplePage",
    type: UI_COMP,
    link: true
  },
  {
    value: "TH",
    label: "Test Metadata",
    desc: "Test Metadata",
    id: "testHarness",
    type: UI_TEST,
    link: true
  },
  {
    value: "CP",
    label: "Custom Payments",
    desc: "Custom Payments",
    id: "customPayments",
    type: UI_COMP,
    link: true
  },
  {
    value: "CT",
    label: "Custom Tax Codes",
    desc: "Custom Tax Codes",
    id: "customTaxCodes",
    type: UI_COMP,
    link: true
  },
  {
    value: "CF",
    label: "Custom Formulas",
    desc: "Custom Formulas",
    id: "customFormulas",
    type: UI_COMP,
    link: true
  },
  {
    value: "CF",
    label: "Custom Formulas",
    desc: "Custom Formulas",
    id: "customTaxFormulas",
    type: UI_COMP,
    link: false
  },
  {
    value: "UQ",
    label: "User Data Queries",
    desc: "User Data Queries",
    id: "userDataQueries",
    type: UI_PAGE,
    link: true
  },
  {
    value: "UQ",
    label: "All BSI Plans",
    desc: "All BSI Plans",
    id: "allBSIPlans",
    type: UI_COMP,
    link: false
  },
  {
    value: "UQ",
    label: "Populate V3 States",
    desc: "Populate V3 States",
    id: "populateV3States",
    type: UI_COMP,
    link: false
  },
  {
    value: "UQ",
    label: "Experience Rates",
    desc: "Experience Rates",
    id: "experienceRates",
    type: UI_COMP,
    link: false
  },
  {
    value: "UQ",
    label: "Supplemental Methods",
    desc: "Supplemental Methods",
    id: "supplementalMethods",
    type: UI_COMP,
    link: false
  },
  {
    value: "CO",
    label: "Companies",
    desc: "Companies",
    id: "companies",
    type: UI_COMP,
    link: false
  },
  {
    value: "WS",
    label: "Worksites",
    desc: "Worksites",
    id: "worksites",
    type: UI_COMP,
    link: false
  },
  {
    value: "WC",
    label: "Worksites",
    desc: "Worksites",
    id: "worksiteCompanies",
    type: UI_COMP,
    link: false
  }
];
export const metadatamap = [
  {
    id: "customPayments",
    metadata: customPayments,
    url: GET_CUSTOM_PAYMENTS_LIST,
    rendererInput: ["dataset", "editMode"]
  },
  {
    id: "customTaxCodes",
    metadata: customTaxCodes,
    url: GET_CUSTOM_TAX_CODES,
    rendererInput: ["dataset", "editMode"]
  },
  {
    id: "allBSIPlans",
    metadata: allBSIPlans,
    url: GET_ALL_BSI_PLANS,
    rendererInput: ["autocomplete", "pat"]
  },
  {
    id: "populateV3States",
    metadata: populateV3States,
    url: GET_ALL_POPULATED_V3_STATES,
    rendererInput: ["dataset", "userId"]
  },
  {
    id: "experienceRates",
    metadata: experienceRates,
    url: GET_EXPERIENCE_RATES,
    rendererInput: ["dataset", "userId"]
  },
  {
    id: "supplementalMethods",
    metadata: supplementalMethods,
    url: GET_SUPPLEMENTAL_INFO_FOR_TAX,
    rendererInput: ["dataset", "userId"]
  },
  {
    id: "recentUsage",
    url: GET_RECENT_USAGE
  },
  {
    id: "customFormulas",
    metadata: customFormulas,
    url: GET_CUSTOM_FORMULAS,
    rendererInput: ["dataset", "userId"]
  },
  {
    id: "worksites",
    metadata: worksites,
    url: GET_WORKSITES,
    rendererInput: ["dataset", "userId"]
  },
  {
    id: "worksiteCompanies",
    metadata: worksiteCompanies,
    url: GET_WORKSITES_LOCATIONS,
    rendererInput: ["dataset", "userId"]
  },
  {
    id: "companies",
    metadata: companies,
    url: GET_COMPANIES,
    rendererInput: ["dataset", "userId"]
  },
  {
    id: "customTaxFormulas",
    metadata: customTaxFormulas,
    url: GET_CUSTOM_TAX_FORMULAS,
    rendererInput: ["dataset", "userId"]
  },
  {
    id: "selectSamplePage",
    metadata: selectSamplePage,
    url: GET_CUSTOM_TAX_FORMULAS,
    rendererInput: ["dataset", "userId"]
  }
];
export const deletedatamap = [
  {
    id: "customPayments",
    url: DELTE_CUSTOM_PAYMENT,
    rendererInput: ["dataset", "editMode"]
  },
  {
    id: "customTaxCodes",
    url: DELETE_CUSTOM_TAX_CODES,
    rendererInput: ["dataset", "editMode"]
  }
];
export const savedatamap = [
  {
    id: "customPayments",
    url: SAVE_CUSTOM_PAYMENT,
    rendererInput: ["dataset", "editMode"]
  },
  {
    id: "customTaxCodes",
    url: SAVE_CUSTOM_TAX_CODES,
    rendererInput: ["dataset", "userId", "editMode", "taxCode", "taxName"]
  },

  {
    id: "customFormulas",
    metadata: customFormulas,
    url: SAVE_CUSTOM_FORMULAS,
    rendererInput: ["dataset", "userId"]
  },
  {
    id: "worksites",
    metadata: worksites,
    url: SAVE_WORKSITES,
    rendererInput: ["dataset", "userId"]
  },
  {
    id: "worksiteCompanies",
    metadata: worksiteCompanies,
    url: SAVE_WORKSITES_LOCATIONS,
    rendererInput: ["dataset", "userId"]
  },
  {
    id: "customTaxFormulas",
    metadata: customTaxFormulas,
    url: SAVE_CUSTOM_FORMULAS,
    rendererInput: ["dataset", "userId"]
  }
];
export const asyncselfldsmap = [
  {
    id: "wageReportingMethod",
    url: GET_WAGE_REPORTING_METHOD_AUTOCOMPLETE_MOCKDATA,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "calculationMethod",
    url: GET_CALCULATION_METHOD_AUTOCOMPLETE_MOCKDATA,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "nonResidenceTaxType",
    url: GET_NON_RESIDENCE_TAX_TYPE_AUTOCOMPLETE_MOCKDATA,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "residenceTaxType",
    url: GET_RESIDENCE_TAX_TYPE_AUTOCOMPLETE_MOCKDATA,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "taxCodeReciprocate",
    url: GET_TAX_CODE_RECIPROCATE_AUTOCOMPLETE_MOCKDATA,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "userTaxCode",
    url: GET_USER_TAX_CODE_AUTOCOMPLETE_MOCKDATA,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "taxability",
    url: GET_ALL_TAXCODES_AUTOCOMPLETE,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "taxType",
    url: GET_ALL_TAXTYPES_AUTOCOMPLETE,
    param: [{ pattern: "" }]
  },
  {
    id: "companyCode",
    url: GET_ALL_COMPCODE_AUTOCOMPLETE,
    param: [{ pattern: "" }]
  },
  {
    id: "riskClass",
    url: GET_ALL_RISKCLASS_AUTOCOMPLETE,
    param: [{ pattern: "" }]
  },
  {
    id: "taxCode",
    url: GET_ALL_TAXCODES_AUTOCOMPLETE,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "authorityCode",
    url: GET_ALL_AUTHORITY_CODE_AUTOCOMPLETE,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "authorityCodeList",
    url: GET_ALL_AUTHORITY_CODE_AUTOCOMPLETE,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "placeCode",
    url: GET_PLACE_CODE_AUTOCOMPLETE,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "schoolDistrict",
    url: GET_SCHOOL_DISTRICT_AUTOCOMPLETE,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "garnishmentFormula",
    url: GET_GARNISMENT_FORMULA_AUTOCOMPLETE,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "garnishmentGroupCode",
    url: GET_GARNISMENT_GROUP_CODE_AUTOCOMPLETE,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "customGarnishmentFormula",
    url: GET_CUSTOM_GARNISMENT_FORMULA_AUTOCOMPLETE,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "county",
    url: GET_COUNTY_AUTOCOMPLETE,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "groupAsync",
    url: GET_GROUP_AUTOCOMPLETE,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "groupCode",
    url: GET_GROUP_CODE_AUTOCOMPLETE,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "taxCodeUdq",
    url: GET_TAX_CODE_UDQ_AUTOCOMPLETE_MOCKDATA,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "typeofData",
    url: GET_TYPEOF_DATA_AUTOCOMPLETE_MOCKDATA,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "userTax",
    url: GET_USER_TAX_AUTOCOMPLETE_MOCKDATA,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "paymentCode",
    url: GET_PAYMENT_CODE_AUTOCOMPLETE_MOCKDATA,
    param: [{ dataset: "", pattern: "" }]
  },
  {
    id: "taxCodeOverridden",
    url: GET_TAX_CODE_OVERRIDDEN_AUTOCOMPLETE_MOCKDATA,
    param: [{ dataset: "", pattern: "" }]
  }
];
