import {
  customPayments,
  customTaxCodes,
  allBSIPlans,
  populateV3States,
  experienceRates,
  supplementalMethods,
  customFormulas,
  customFormulasChild,
  companies,
  worksites
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
  GET_CUSTOM_FORMULAS_CHILD, 
  GET_COMPANIES,
  GET_WORKSITES
} from "../constants/ServiceUrls";
export const UI_PAGE = "page";
export const UI_COMP = "comp";
export const tftools = [
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
    mode: "parent",
    parentDataId: "customTaxCodes",
    child: "customFormulas",
    link: true
  },

  //  {
  //    value: "CF",
  //    label: "Custom Formulas ",
  //    desc: "Custom Formulas",
  //    id: "customFormulasChild",
  //    type: UI_COMP,
  //   link: true
  //  },
  {
    value: "UQ",
    label: "User Queries",
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
    mode: "parent",
    parentDataId: "companies",
    child: "worksites",
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
    url: GET_RECENT_USAGE,
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
  // {
  //   id: "customFormulasChild",
  //   metadata: customFormulasChild,
  //   url: GET_CUSTOM_FORMULAS_CHILD,
  //   rendererInput: ["dataset", "userId"]
  // },  
  {
    id: "companies",
    metadata: companies,
    url: GET_COMPANIES,
    rendererInput: ["dataset", "userId"]
  },
];