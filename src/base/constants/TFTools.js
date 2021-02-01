import * as metaData from '../../app/metadata/metaData';
import tfScreens from '../../app/metadata/_screen_info';
import { metaDataApiMap, autoCompleteApiMap, deleteDataApiMap, saveDataApiMap, generateApiMap, viewPDFApiMap, saveAsAPIMap,deleteAllDataApiMap,viewCalcPDFApiMap } from './ApiMap';

export const UI_PAGE = 'page';
export const UI_COMP = 'comp';
export const UI_TEST = 'uitest';
export const UI_EXTN = 'externallink';

export const tftools = [
  ...tfScreens,
  {
    value: 'UQ',
    label: 'U.S. QuickFormulas',
    desc: 'U.S. QuickFormulas',
    id: 'USQuickFormulas',
    type: UI_EXTN,
    link: false,
    href:"https://mybsiconnect.force.com/CustomLogin?startURL=%2Fpage_quickForms2%3Fd",
    section:'formulas'
  }
];

export const metadatamap = Object.keys(metaDataApiMap).map(pageId => {
  const _metaData = metaData[pageId];
  if (
    _metaData &&
    _metaData.pgdef &&
    _metaData.pgdef.parentConfig &&
    typeof _metaData.pgdef.parentConfig === 'string' &&
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

export const deletealldatamap = Object.keys(deleteAllDataApiMap).map(pageId => ({
  id: pageId,
  url: deleteAllDataApiMap[[pageId]]
}));

export const savedatamap = Object.keys(saveDataApiMap).map(pageId => ({
  id: pageId,
  url: saveDataApiMap[pageId],
  metadata: metaData[pageId]
}));


export const saveAsdatamap = Object.keys(saveAsAPIMap).map(pageId => ({
  id: pageId,
  url: saveAsAPIMap[pageId],
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
  param: [{ dataset: '', pattern: '' }]
}));

export const viewPDFMap = Object.keys(viewPDFApiMap).map(pageId => ({
  id: pageId,
  url: viewPDFApiMap[pageId]
}));
export const viewCalcPDFMap = Object.keys(viewCalcPDFApiMap).map(pageId => ({
  id: pageId,
  url: viewCalcPDFApiMap[pageId]
}));