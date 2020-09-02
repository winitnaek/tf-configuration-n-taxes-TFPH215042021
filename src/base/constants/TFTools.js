import * as metaData from "../../app/metadata/metaData";
import tfScreens from "../../app/metadata/_screen_info";
import { metaDataApiMap, autoCompleteApiMap, deleteDataApiMap, saveDataApiMap, generateApiMap } from "./ApiMap";

export const UI_PAGE = "page";
export const UI_COMP = "comp";
export const UI_TEST = "uitest";

export const tftools = [
  ...tfScreens,
  {
    value: "SP",
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
    value: "CO",
    label: "Companies",
    desc: "Companies",
    id: "companies",
    type: UI_COMP,
    link: false
  }
];

export const metadatamap = Object.keys(metaDataApiMap).map(pageId => {
  const _metaData = metaData[pageId];
  if (
    _metaData &&
    _metaData.pgdef &&
    _metaData.pgdef.parentConfig &&
    typeof _metaData.pgdef.parentConfig === "string" &&
    _metaData.griddef
  ) {
    _metaData.pgdef.parentConfig = metaData[_metaData.pgdef.parentConfig];
  }
  return {
    id: pageId,
    metadata: _metaData,
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

export const generateDataMap = Object.keys(generateApiMap).map(pageId => ({
  id: pageId,
  url: generateApiMap[pageId],
  metadata: metaData[pageId]
}));

export const asyncselfldsmap = Object.keys(autoCompleteApiMap).map(fieldId => ({
  id: fieldId,
  url: autoCompleteApiMap[fieldId],
  param: [{ dataset: "", pattern: "" }]
}));
