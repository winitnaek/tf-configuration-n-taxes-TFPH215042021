import * as metaData from "../../app/metadata/metaData";
import tfScreens from "../../app/metadata/_screen_info";
import { metaDataApiMap, autoCompleteApiMap, deleteDataApiMap, saveDataApiMap } from "./ApiMap";

export const UI_PAGE = "page";
export const UI_COMP = "comp";
export const UI_TEST = "uitest";

export const tftools = [
  ...tfScreens,
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
    value: "DF",
    label: "Date Field Doc",
    desc: "Date Field Doc",
    id: "dateFieldDoc",
    type: UI_PAGE,
    link: true
  },
  {
    value: "DF",
    label: "Sample Date Fields",
    desc: "Sample Date Fields",
    id: "sampleDateFields",
    type: UI_COMP,
    link: false
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

export const metadatamap = Object.keys(metaDataApiMap).map(pageId => {
  return {
    id: pageId,
    metadata: metaData[pageId],
    url: metaDataApiMap[pageId]
  };
});

export const deletedatamap = Object.keys(deleteDataApiMap).map(pageId => ({
  id: pageId,
  url: deleteDataApiMap[[pageId]]
}));

export const savedatamap = Object.keys(saveDataApiMap).map(pageId => ({
  id: pageId,
  url: saveDataApiMap[pageId],
  metadata: metaData[pageId]
}));

export const asyncselfldsmap = Object.keys(autoCompleteApiMap).map(fieldId => ({
  id: fieldId,
  url: autoCompleteApiMap[fieldId],
  param: [{ dataset: "", pattern: "" }]
}));
