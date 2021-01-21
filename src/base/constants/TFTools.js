import * as metaData from '../../app/metadata/metaData';
import tfScreens from '../../app/metadata/_screen_info';
import { metaDataApiMap, autoCompleteApiMap, deleteDataApiMap, saveDataApiMap, generateApiMap, viewPDFApiMap, saveAsAPIMap,deleteAllDataApiMap } from './ApiMap';

export const UI_PAGE = 'page';
export const UI_COMP = 'comp';
export const UI_TEST = 'uitest';
export const UI_EXTN = 'externallink';

export const tftools = [
  ...tfScreens,
  {
    value: 'TH',
    label: 'Test Metadata',
    desc: 'Test Metadata',
    id: 'testHarness',
    type: UI_TEST,
    link: true
  },
  {
    value: 'UQ',
    label: 'Reporting',
    desc: 'Reporting',
    id: 'userDataQueries',
    type: UI_PAGE,
    link: true
  },
  {
    value: 'UQ',
    label: 'U.S. QuickFormulas',
    desc: 'U.S. QuickFormulas',
    id: 'USQuickFormulas',
    type: UI_EXTN,
    link: false,
    href:"https://mybsiconnect.force.com/CustomLogin?startURL=%2Fpage_quickForms2%3Fd",
    section:'formulas'
  },
  {
    value: 'UQ',
    label: 'U.S. Pension QuickFormulas',
    desc: 'U.S. Pension QuickFormulas',
    id: 'USPensionQuickFormulas',
    type: UI_EXTN,
    link: false,
    href:"https://mybsiconnect.force.com/CustomLogin?startURL=%2Fpage_quickForms2%3Fdirect%3Dwspenqf%252Fversion%252F10",
    section:'formulas'
  },
  {
    value: 'UQ',
    label: 'U.S. WageAttachment QuickFormulas',
    desc: 'U.S. WageAttachment QuickFormulas',
    id: 'USWageAttachmentQuickFormulas',
    type: UI_EXTN,
    link: false,
    href:"https://mybsiconnect.force.com/CustomLogin?startURL=%2Fpage_quickForms2%3Fdirect%3Dwswagqf%252Fversion%252F10",
    section:'formulas'
  },
 {
    value: 'CO',
    label: 'Companies',
    desc: 'Companies',
    id: 'companies',
    type: UI_COMP,
    link: false,
    
  },
  {
    value: 'MS',
    label: 'Messages to Suppress',
    desc: 'Messages to Suppress',
    id: 'messageToSuppress',
    type: 'page',
    link: true
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
