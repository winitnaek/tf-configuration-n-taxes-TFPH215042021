import moment from "moment";
import {
  metadatamap,
  tftools,
  deletedatamap,
  savedatamap,
  asyncselfldsmap,
  generateDataMap,
  viewPDFMap,
  saveAsdatamap,
  deletealldatamap,
  viewCalcPDFMap,
  viewPDFMapButtonBar,
  updatedatamap,
} from "../constants/TFTools";
import mockDataMapper from "../../app/metadata/_mockDataMap";
import mockAutoCompleteMap from "../../app/metadata/_mockAutoCompleteMap";
import * as metaData from "../../app/metadata/_metaData";
import {
  setParentData,
} from '../../app/actions/parentDataActions';
import {setFilterFormData} from '../../app/actions/filterFormActions';
import {
  generateUrl
} from "bsiuilib";
import * as CellsRenderer from "../../app/metadata/cellsrenderer";
import store from "../../tf-configuration-n-taxes";
import {garnishmentFormulaOverrides,buildGarnishmentFormulaOverridesDelete,getGarnFormulaOverdTaxTypeInput,buildGarnishmentFormulaOverridesSaveInput,generateGarnishmentFormulaOverridePDF} from './gfOverridesUtil';
import {buildCustomTaxFormulasSaveInput} from './cfFormulaUtil';
import {optionalRateOverrideGridInput,buildOptionalRateOverrideDelete,getOrOverrideTaxTypeInput,getOrOverrideFormulaInput,buildOptionalRateOverrideSaveInput} from './orOverridesUtil';
import {customGarnishmentTaxFormulasGridInput,getUsrTaxInput,buildCustomGarnishmentTaxFormulasDelete,buildCustomGarnishmentTaxFormulasSaveInput,buildCustomGarnishmentTaxFormulasViewPDF} from './cgFormulasUtil';
import {customPaymentTaxExceptionsGridInput,buildCustomPaymentTaxExceptionsDelete,buildCustomPaymentTaxExceptionsSaveInput} from './cpExceptionsUtil';
import {whatIfGarnishmentsGridInput, getGformInput,getUsrTxTypInput,buildWhatIfTaxesDelete,whatifTaxesGridInput,buildWhatifEmpDeleteAll,buildWhatifDeductionBenefitsDeleteAll,buildWhatifEmpDelete,buildWhatIfTaxesSaveInput,generateWhatifEmpPDFInput,calculateTaxesPDFInput,wageDetailsGridInput,generatewageDetailsPDF,generatewhatifTaxesPDF,generateWhatIfGarnishmentPDF} from './tfWhatIfUtil';
import {buildPensionWhatIfTestSaveInput,generatePensionWhatIfTaxesPDF,buildPensionWhatIfTestDelete,buildPensionWhatIfTaxesSaveInput,generatePensionWhatIfCalculateTaxesPDF,buildPensionWhatIfTestTaxesDelete,generatePensionWhatIfTestPDF} from './pwiTestUtil';
import {buildCustomNexusCompanyDataSaveInput} from './cnDataUtil';
import {disposableOverrideGridInput,garnishTypeInput,buildDisposableOverrideDelete,buildDisposableOverrideSaveInput,viewDisposableOverrideGridInput} from './dsOverridesUtil';
import {buildCustomTaxPaymentOverrideDelete,buildCustomTaxPaymentOverrideSaveInput,getTaxTypesPymtOvrdInput} from './ctpOverridesUtil'
import {generateTaxLocatorPDF,buildWhatIfLocationsDeleteAllInput} from './tLocatorUtil';
import {mapTaxTypeGridInput,buildMapTaxTypeSaveInput,buildMapTaxTypeUpdate,buildMapTaxTypeDelete,mapTaxTypesParentGridInput,createDefaultTTLinkInput} from './mappingtools/mapTaxTypesUtil';
import {mapTaxCodeGridInput,buildMapTaxCodeSaveInput,buildTaxCodeUsageDelete,createDefaultLinkInput,createDefaultAuthorityLinkInput,mapTaxCodesParentGridInput,buildMapTaxCodeUpdate} from './mappingtools/mapTaxCodesUtil';
import {mapPaymentCodeGridInput,buildMapPaymentCodeSaveInput,buildPaymentCodeUsageDelete,mapPaymentCodesParentGridInput,createDefaultPCLinkInput,createMapPCLinkInput} from './mappingtools/mapPaymentCodesUtil'
import {getPlansInput} from './ptOverrideUtil';
/**
 * buildModuleAreaLinks
 * @param {*} apps
 */
export function buildModuleAreaLinks(apps) {
  let premTFtools = [];
  apps.forEach(function (app) {
    if (app.id == "73b9a516-c0ca-43c0-b0ae-190e08d77bcc") {
      app.accessIds.forEach(function (access) {
        if (access.id == "162ebe14-8d87-44e1-a786-c9365c9d5cd8" && access.visible == true) {
          premTFtools = tftools.filter(tftool => {
            if (app.permissions.hasOwnProperty(tftool.value) && tftool.link == true) return tftool;
          });
        }
      });
    }
  });
  return premTFtools;
}
/**
 * setPerms
 * @param {*} perm
 */
export function setPerms(perm) {
  let appperm = {
    VIEW: perm[0] == 1 ? true : false,
    SAVE: perm[1] == 1 ? true : false,
    DELETE: perm[2] == 1 ? true : false,
    RUN: perm[3] == 1 ? true : false,
    AUDIT: perm[4] == 1 ? true : false
  };
  return appperm;
}
/**
 * openHelp
 * @param {*} pageid
 */
export function openHelp(pageid) {
  window.open("/help/" + pageid, "_blank");
}
export function getMetaData(pageid) {
  return metaData[pageid];
}

export const cellbeginedit = (row, datafield) => {
  let _id = document.querySelector("div[role='grid']").id;
  const rowdata = $(`#${_id}`).jqxGrid("getrowdata", row);
  if (datafield === "audit") {
    return rowdata.isAuditable;
  }
  return true;
};
export const cellendeditcheck = (row,datafield,value,defaultvalue) => {
  let _id = document.querySelector("div[role='grid']").id;
  const rowdata = $(`#${_id}`).jqxGrid("getrowdata", row);
  const rows = $(`#${_id}`).jqxGrid("getrows");
  let keepid ='';
  if (datafield === "preferred") {
    console.log(value);
    if (rowdata.preferred === true) {
      $(`#${_id}`).jqxGrid('setcellvalue', row, "preferred", false);
  } else if (rowdata.preferred === false) {
      $(`#${_id}`).jqxGrid('setcellvalue', row, "preferred", true);
      keepid=row;
  }
  if(rows && rows.length >=0){
    for(i=0; rows.length -1;i++){
      if(rows[i]['preferred']==true && keepid != (i+1)){
        $(`#${_id}`).jqxGrid('setcellvalue', row, "preferred", false);
      }
    }
  }
  }
};
export const cellendeditchecke = (event) => {
}
/**
 * compMetaData
 * @param {*} pageid
 */
export function compMetaData(pageid, key) {
  if (key !== undefined && metaData[pageid] instanceof Array && metaData[pageid][key]) {
    const {
      formFilterData
    } = store.getState();
    const metaDataCopy = JSON.parse(JSON.stringify(metaData[pageid][key])); // Copy medata
    let gridMetaData = checkForStaticRender(metaDataCopy);
    // for first table to have back button to parent we check for key === 0
    if (typeof gridMetaData.pgdef.parentConfig === "string") {
      gridMetaData.pgdef.parentConfig = metaData[gridMetaData.pgdef.parentConfig];
    }
    if (gridMetaData.pgdef.caption) {
      gridMetaData.pgdef.caption = setTemplateData(gridMetaData.pgdef.caption, formFilterData);
    }
    return gridMetaData;
  } else {
    if (metaData[pageid]) {
      let metadata = checkForStaticRender(metaData[pageid]);
      if (pageid === "permissions") {
        metadata.griddef.columns.forEach(column => {
          column.cellbeginedit = cellbeginedit;
        });
      }else if(pageid === "mapTaxType"){
        metadata.griddef.columns.forEach(column => {
          if(column.datafield==='preferred'){
            //column.cellendedit = cellendeditchecke;
          }
        });
      }
      return metadata;
    }
    let metadataMap = metadatamap.find(metadatam => {
      if (pageid == metadatam.id) return metadatam;
    });
    let metadata = checkForStaticRender(metadataMap.metadata);

    return metadata;
  }
}

export const formatFieldData = (fieldData, pageId, userId) => {
  if (fieldData) {
    fieldData.forEach(field => {
      const state = store.getState();
      if (field.id === "permissionFor" && pageId === "permissions") {
        if (state.formData && state.formData.data && state.formData.data.permissionFor) {
          field.value = state.formData.data.permissionFor;
        } else {
          field.value = userId;
        }
      }

      if (field.value === "new Date()") {
        field.value = moment().format("MM/DD/yyyy");
      }

      // retain form values of date filter in the field values of messageViwer
      // if ((field.id === "startdate" || field.id === "enddate") && pageId === "messageViewer"){
      //   if (state.formData && state.formData.data && state.formData.data[field.id]) {
      //     field.value = state.formData.data[field.id];
      //   }
      // }
    });
  }

  return fieldData;
};

export function decorateData(griddata, pageid) {
  if (pageid == "taxabilityForAuthority") {
    let state = store.getState();
    let filterData = state.formFilterData;
    console.log(state);
    griddata.forEach(function (value) {
      value.authorityCode = filterData.authorityCodeNoall;
    });
    return griddata;
  } else {
    return griddata;
  }
}
export function checkForStaticRender(metadata) {
  metadata.griddef.columns.forEach(function (value) {
    if (value.rendererStaticInput && CellsRenderer[value.rendererStaticInput]) {
      value.cellsrenderer = CellsRenderer[value.rendererStaticInput];
    }
  });
  return metadata;
}
/**
 * compPermissions
 * @param {*} pid
 */
export function compPermissions(pid) {
  let perms = getAllRights();
  if (perms.hasOwnProperty(pid)) {
    return setPerms(perms[pid]);
  }
}
/**
 * compURL
 * @param {*} pageid
 */
export function compURL(pageid) {
  let metadataMap = metadatamap.find(metadatam => {
    if (pageid == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(metadataMap.url);
  //return url;
  return dataURL(pageid);
}
/*export function compURL(pageid,...params) {
  let metadataMap = metadatamap.find(metadatam => {
    if (pageid == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(metadataMap.url);
  console.log('buildGetRecsUrl >>>');
  var arr = [];
  arr.push('VINIT'); 
  let dataset ='Vinit123'
  console.log(format(url,dataset));
  return url;
};*/

/**
 * dataURL
 */
function dataURL(pageid) {
  let gridDataUrl;
  switch (pageid) {
    case "allBSIPlans":
      gridDataUrl = "./ALL_BSI_PLANS_MOCKDATA.json";
      break;
    case "customPayments":
      gridDataUrl = "./CUSTOM_PAYMENTS_MOCKDATA.json";
      break;
    case "customTaxCodes":
      gridDataUrl = "./CUSTOM_TAX_PAYMENT_MOCKDATA.json";
      break;
    case "populateV3States":
      gridDataUrl = "./POPULATE_V3_STATES_MOCKDATA.json";
      break;
    case "experienceRates":
      gridDataUrl = "./EXPERIENCE_RATES_MOCKDATA.json";
      break;
    case "supplementalMethods":
      gridDataUrl = "./SUPPLEMENTAL_METHODS_MOCKDATA.json";
    case "customForumulas":
      gridDataUrl = "./CUSTOM_FORMULAS_MOCKDATA.json";
    case "worksites":
      gridDataUrl = "./COMPANIES_MOCKDATA.json";
    case "whatifEmp":
      gridDataUrl = "./_whatifEmp_MockData.json";
    case "whatifTaxes":
      gridDataUrl = "./_whatifTaxes_MockData.json";
    case "whatifGarnishment":
      gridDataUrl = "./_whatifGarnishment_MockData.json";
    default:
      break;
  }
  return gridDataUrl;
}

/**
 * format
 * @param {*} fmt
 * @param  {...any} args
 */
export function format(fmt, ...args) {
  if (!fmt.match(/^(?:(?:(?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{[0-9]+\}))+$/)) {
    throw new Error("invalid format string.");
  }
  return fmt.replace(/((?:[^{}]|(?:\{\{)|(?:\}\}))+)|(?:\{([0-9]+)\})/g, (m, str, index) => {
    if (str) {
      return str.replace(/(?:{{)|(?:}})/g, m => m[0]);
    } else {
      if (index >= args.length) {
        throw new Error("argument index is out of range in format");
      }
      return args[index];
    }
  });
}
/**
 * buildGridInputForPage
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 */
export function buildGridInputForPage(pageid, filterData, stDate, enDate, state) {
  const parentInfo = state.parentInfo;
  const mapUsgeValue = localStorage.getItem('mapUsage')
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    companyCode: (getCompanyCode(filterData) || parentInfo.companyCode || parentInfo.company || "").trim(),
    companyName: filterData.companyName || parentInfo.companyName,
    taxCode: getTaxCode(filterData) || parentInfo.taxCode,
    taxName: filterData.name || parentInfo.name,
    startdate: stDate,
    endDate: enDate,
    riskClass: filterData.riskClass,
    taxType: getTaxType(filterData),
    formNumber: getFormNum(filterData),
    courtesy: filterData.courtesy,
    authCode: getAuthCode(filterData),
    garnishmentGroupCode: filterData.garnishmentGroupCode,
    groupCode: getGroupcode(filterData) || mapUsgeValue || parentInfo.id,
    exemptStat: filterData.exemptionStatus,
    customTaxCode: filterData.customTaxCode === "ALL" ? "" : filterData.customTaxCode,
    pmtUsrCode: getPmtUsrCode(filterData),
    formula: filterData.formula,
    usrtax: filterData.userTax,
    runId: filterData.runid,
    messageType: filterData.messageType,
    empCode: filterData.empCode || parentInfo.empCode,
    checkDate: filterData.checkDate || parentInfo.checkDate,
    checkdate: filterData.checkDate || parentInfo.checkDate,
    empName: filterData.empName || parentInfo.empName,
    regPen: filterData.regPen || parentInfo.regPen,
    taxN: filterData.taxN,
    employee: filterData.employeeCode || parentInfo.employeeCode,
    empGroup: parentInfo.id || mapUsgeValue
  };
  return input;
}
/**
 * deductionBenefitsGridInput
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 */
function deductionBenefitsGridInput(pageid, filterData, stDate, enDate,state) {
  let parentInfo = state.parentInfo;
  if(parentInfo){
    store.dispatch(setFilterFormData(state.parentInfo));
  }
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    empcode: filterData.empcode ? filterData.empcode :parentInfo.empcode,
    chkdt: filterData.chkdt?filterData.chkdt:parentInfo.chkdt,
    usrauth: filterData.usrauth?filterData.usrauth:parentInfo.usrauth,
    usrtxtyp: filterData.usrtxtyp?filterData.usrtxtyp:parentInfo.usrtxtyp,
    gform: filterData.gform?filterData.gform:parentInfo.gform,
    caseid: filterData.caseid?filterData.caseid:parentInfo.caseid,
    docket: filterData.docket?filterData.docket:parentInfo.docket,
    regpen: "R"
  };
  return input;
}

/**
 * 
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 */
function whatIfEmployeeGridInput(pageid, filterData, stDate, enDate) {
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
  };
  return input;
}

/**
 * buildMapLinkDataInput
 * @param {*} pageid
 */
export function buildMapLinkDataInput(pageid, formFilterData) {
  if (pageid === "createDefault" || pageid === "createMap") {
    return createDefaultLinkInput(pageid);
  } else if (pageid === "createDefaultAuthority" || pageid === "createMapAuthority") {
    return createDefaultAuthorityLinkInput(pageid, formFilterData);
  } else if (pageid === "createDefaultTT") {
    return createDefaultTTLinkInput(pageid);
  } else if (pageid === "createDefaultPC") {
    return createDefaultPCLinkInput(pageid);
  } else if (pageid === "createMapPC") {
    return createMapPCLinkInput(pageid, formFilterData);
  }
}

/**
 * buildGridDataInput
 * @param {*} pageid
 * @param {*} store
 */
export function buildGridDataInput(pageid, store) {
  let state = store.getState();
  let filterData = state.formFilterData;
  console.log(state);
  let stDate = getStartDate(filterData);
  let enDate = getEndDate(filterData);
  let input;
  if (pageid === 'whatifEmp') {
    input = whatIfEmployeeGridInput(pageid, filterData, stDate, enDate);
  } else if (pageid === 'whatifTaxes') {
    input = whatifTaxesGridInput(pageid, filterData, stDate, enDate);
  } else if (pageid === 'whatifGarnishment') {
    input = whatIfGarnishmentsGridInput(pageid, filterData, stDate, enDate);
  } else if (pageid === 'whatifDeductionBenefits') {
    input = deductionBenefitsGridInput(pageid, filterData, stDate, enDate, state);
  } else if (pageid === 'paymentOverrides') {
    input = paymentOverridesGridInput(pageid, filterData, stDate, enDate);
  } else if (pageid === 'paymentOverride') {
    input = paymentOverrideGridInput(pageid, filterData, stDate, enDate, state);
  } else if (pageid === 'unemploymentCompanyOverrides') {
    input = unemploymentCompanyOverridesGridInput(pageid, filterData, stDate, enDate, state);
  } else if (pageid === 'garnishmentFormulaOverrides') {
    input = garnishmentFormulaOverrides(pageid, filterData, stDate, enDate, state);
  } else if (pageid === 'optionalRateOverride') {
    input = optionalRateOverrideGridInput(pageid, filterData, stDate, enDate, state);
  } else if (pageid === "customGarnishmentTaxFormulas") {
    return customGarnishmentTaxFormulasGridInput(pageid, filterData, stDate, enDate, state);
  } else if (pageid === "customPaymentTaxExceptions") {
    return customPaymentTaxExceptionsGridInput(pageid, filterData, stDate, enDate, state);
  } else if (pageid === 'wageDetails') {
    input = wageDetailsGridInput(pageid, filterData, stDate, enDate);
  } else if (pageid === "disposableOverride") {
    return disposableOverrideGridInput(pageid, filterData, stDate, enDate, state);
  } else if (pageid === "viewDisposableOverride") {
    return viewDisposableOverrideGridInput(pageid, filterData, stDate, enDate, state);
  } else if (pageid === "mapTaxCode") {
    return mapTaxCodeGridInput(pageid, filterData, stDate, enDate, state);
  } else if (pageid === "mapTaxCodes") {
    return mapTaxCodesParentGridInput(pageid, filterData, stDate, enDate, state);
  } else if (pageid === "mapPaymentCode") {
    return mapPaymentCodeGridInput(pageid, filterData, stDate, enDate, state);
  } else if (pageid === "mapPaymentCodes") {
    return mapPaymentCodesParentGridInput(pageid, filterData, stDate, enDate, state);
  } else if(pageid === "pensionWhatIfTest"){
    return {
      pageId: pageid,
      dataset: appDataset(),
    }
  }else if (pageid === "mapTaxType") {
    return mapTaxTypeGridInput(pageid, filterData, stDate, enDate, state);
  }else if (pageid === "mapTaxTypes") {
    return mapTaxTypesParentGridInput(pageid, filterData, stDate, enDate, state);
  } else {
    if (state.parentData) { //Reset Parent Data
      let parentData = {};
      store.dispatch(setParentData(parentData))
    }
    input = buildGridInputForPage(pageid, filterData, stDate, enDate, state);
  }
  return input;
}
/**
 * paymentOverridesGridInput
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 */
function paymentOverridesGridInput(pageid, filterData, stDate, enDate) {
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
  };
  return input;
}
/**
 * paymentOverrideGridInput
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 */
function paymentOverrideGridInput(pageid, filterData, stDate, enDate, state) {
  console.log(state);
  const mapUsage = localStorage.getItem('mapUsage');
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    groupCode: filterData.id || state.formFilterData.groupCode || mapUsage || state.parentInfo.id
  };
  return input;
}
/**
 * unemploymentCompanyOverridesGridInput
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */
function unemploymentCompanyOverridesGridInput(pageid, filterData, stDate, enDate, state) {
  console.log(state);
  const mapUsage = localStorage.getItem('mapUsage');
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    companyCode: filterData.company || state.parentData.company || mapUsage
  };
  return input;
}
export function buildMaritalStatusInput(pageid, store, formdata) {
  let state = store.getState();
  console.log(formdata);
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    startdate: getFrmStartDate(formdata),
    allDates: formdata.allDates && formdata.allDates === true ? true : false
  };
  return input;
}

export function buildBatchTestInput(pageid, store, data) {
  let input = {      
    "dataset": appDataset(),
    "userID": appUserId(),
    "data": data.data,
    "fileName": data.fileName,
    "importToWhatIf": data.exportMode.includes(1),
    "extendedOut": data.exportMode.includes(2),
    "generateMnc": data.exportMode.includes(3)
    
}
  return input;
}
export function getTaxCode(filterData) {
  if (filterData && filterData.taxCode) {
    return filterData.taxCode;
  } else if (filterData && filterData.customTaxName) {
    return filterData.customTaxName;
  } else if (filterData && filterData.taxTypeALL) {
    return filterData.taxTypeALL;
  } else if (filterData && filterData.taxability) {
    return filterData.taxability;
  }
}
export function getAuthCode(filterData) {
  if (filterData && filterData.authorityCode) {
    return filterData.authorityCode;
  } else if (filterData && (filterData.bsiAuth || filterData.bsiauth)) {
    return filterData.bsiAuth || filterData.bsiauth;
  } else if (filterData && filterData.authorityCodegdw) {
    return filterData.authorityCodegdw;
  } else if (filterData && filterData.authorityCodegp) {
    return filterData.authorityCodegp;
  } else if (filterData && filterData.authorityCodeNoall) {
    return filterData.authorityCodeNoall;
  }
}
export function getFrmEndDate(filterData) {
  if (filterData && (filterData.startDate || filterData.startdate)) {
    let dt = filterData.endDate ? filterData.endDate : filterData.rescind;
    let newdt = "";
    if (dt.indexOf("/") > 0) {
      return dt;
    } else if (dt.indexOf("-") > 0) {
      let spldt = dt.split("-");
      let newdt = spldt[1] + "/" + spldt[2] + "/" + spldt[0];
      return newdt;
    }
  } else {
    return "";
  }
}
export function getEndDate(filterData) {
  if (filterData && filterData.includeAllDates) {
    return "ALL";
  } else if (filterData && (filterData.endDate || filterData.enddate)) {
    const date = filterData.endDate || filterData.enddate;
    let enDate = date;

    if (date.indexOf("-") !== -1) {
      const dt = date.split("-");
      enDate = dt[1] + "/" + dt[2] + "/" + dt[0];
    }

    return enDate;
  } else {
    return "";
  }
}
export function getFrmEffDate(filterData) {
  if (filterData && filterData.effecDate) {
    let dt = filterData.effecDate;
    if (dt.indexOf("/") > 0) {
      return dt;
    } else if (dt.indexOf("-") > 0) {
      let spldt = dt.split("-");
      let newdt = spldt[1] + "/" + spldt[2] + "/" + spldt[0];
      return newdt;
    }
  } else {
    return "";
  }
}
export function getFrmStartDate(filterData) {
  if (filterData && (filterData.startDate || filterData.startdate)) {
    let dt = filterData.startDate ? filterData.startDate : filterData.startdate;
    let newdt = "";
    if (dt.indexOf("/") > 0) {
      return dt;
    } else if (dt.indexOf("-") > 0) {
      let spldt = dt.split("-");
      let newdt = spldt[1] + "/" + spldt[2] + "/" + spldt[0];
      return newdt;
    }
  } else {
    return "";
  }
}
export function getStartDate(filterData) {
  if (filterData && filterData.includeAllDates) {
    return "ALL";
  } else if (filterData && (filterData.startDate || filterData.startdate)) {
    const date = filterData.startDate || filterData.startdate;
    let stDate = date;

    if (date.indexOf("-") !== -1) {
      const dt = date.split("-");
      stDate = dt[1] + "/" + dt[2] + "/" + dt[0];
    }

    return stDate;
  } else {
    return "";
  }
}
export function getFormNum(filterData) {
  if (filterData && filterData.formNumber) {
    return filterData.formNumber;
  } else if (filterData && filterData.formula) {
    return filterData.formula;
  }
}
export function getTaxType(filterData) {
  if (filterData && filterData.taxType) {
    return filterData.taxType;
  } else if (filterData && filterData.garnishParamTaxType) {
    return filterData.garnishParamTaxType;
  } else if (filterData && filterData.taxTypeALL) {
    return filterData.taxTypeALL;
  } else if (filterData && filterData.taxTypes) {
    return filterData.taxTypes;
  }
}
export function getCompanyCode(filterData) {
  if (filterData && filterData.company) {
    return filterData.company;
  } else if (filterData && filterData.companyCode) {
    return filterData.companyCode;
  } else if (filterData && filterData.location) {
    return filterData.location;
  } else if (filterData && filterData.cpycode) {
    return filterData.cpycode;
  }
}
export function getGroupcode(filterData) {
  if (filterData && filterData.groupCode) {
    return filterData.groupCode;
  } else if (filterData && filterData.employeeGroupCode) {
    return filterData.employeeGroupCode;
  } else if (filterData && filterData.garnishmentGroup) {
    return filterData.garnishmentGroup;
  }
}
export function getPmtUsrCode(filterData) {
  if (filterData && filterData.typeOfData) {
    return filterData.typeOfData;
  } else if (filterData && filterData.customTypeOfData) {
    return filterData.customTypeOfData;
  }
}

export function buildAutoCompSelInput(pageid, store, patten, formValues = {}) {
  let state = store.getState();
  const formData = state.formData.data || {};
  let input;
  if(pageid === "residentTaxTypelocal" || pageid === "residentTaxType" || pageid === "nonresidentTaxType" || pageid === "nonresidentTaxTypelocal") {
    input = {
        authCode: patten[0].authId || formValues.resAuth
    }

    return input;
  }

  if(pageid === "taxTypeUserTaxType") {
    input = {
      pageId: pageid, 
      dataset: appDataset(),
      userId: appUserId(),
      pattern: patten[0].bsiauth || patten,
      bsiauth: patten[0].bsiauth || patten,
    }

    return input;
  }

  if(pageid === "countyName") {
    input = {
      pageId: "counties", 
      dataset: appDataset(),
      userId: appUserId(),
      state: formValues.state || patten

    }
    return input;
  }

  if(pageid === "placeName") {
    input = {
      pageId: "placeCode", 
      dataset: appDataset(),
      userId: appUserId(),
      state: formValues.state,
      countyName: formValues.countyName,
      // countyName: formValues.countyName.substring(formValues.countyName.indexOf('(') + 1 , formValues.countyName.length - 1),
      pattern: patten 
    }
    return input;
  }

  if(pageid === "sdName") {
    input = {
      pageId: "schoolDistrict", 
      dataset: appDataset(),
      userId: appUserId(),
      state: formValues.state,
      pattern: patten 
    }
    return input;
  }

  if(pageid === "pensionFormula") {
    input = {
      pageId: pageid, 
      dataset: appDataset(),
      userId: appUserId(),
      authCode: formValues["usrauthcd"] && formValues["usrauthcd"].bsiauth || formData.bsiauth,
      taxType: patten
    }

    return input;
  }
  
  if (pageid === "formulaTitle") {
    input = {
      pageId: pageid,
      dataset: appDataset(),
      userId: appUserId(),
      pattern: patten,
      authCode: formValues.authority.id,
      taxType: formValues.taxType.id,
    }
    return input;
  }
  console.log(state);
  input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    pattern: patten,

  };
  let additionalFields = {}
  if (pageid === 'taxTypeUnemp' && formValues) {
    additionalFields = {
      startdate: formValues.startdate ? moment(formValues.startdate).format("MM/DD/YYYY") : moment().format("MM/DD/YYYY"),
      authCode: formValues['taxCodeUnEmp'].id
    }
    return Object.assign(input, additionalFields);
  } else if (pageid === 'formulaUnemp' && formValues) {
    additionalFields = {
      startdate: formValues.startdate ? moment(formValues.startdate).format("MM/DD/YYYY") : moment().format("MM/DD/YYYY"),
      authCode: formValues['taxCodeUnEmp'].id,
      taxType: formValues['taxTypeUnemp'].id
    }
    return Object.assign(input, additionalFields);
  }
  if (pageid === 'bsitaxtyp' && formValues) {
    additionalFields = {
      checkDate: formValues.startdate ? moment(formValues.startdate).format("MM/DD/YYYY") : moment().format("MM/DD/YYYY"),
      taxAuth: formValues['usrauthcd'].id
    }
    return Object.assign(input, additionalFields);
  } if (pageid === 'formulawhatif' && formValues) {
    additionalFields = {
      checkDate: formValues.startdate ? moment(formValues.startdate).format("MM/DD/YYYY") : moment().format("MM/DD/YYYY"),
      authCode: formValues['usrauthcd'].id,
      taxType: formValues['bsitaxtyp'].id
    }
    return Object.assign(input, additionalFields);
  }
  if(pageid === 'garnishmentType' && formValues){
    return getGarnFormulaOverdTaxTypeInput(input,formValues);
  }
  if(pageid === 'orOverrideTaxType' && formValues){
    return getOrOverrideTaxTypeInput(input,formValues);
  }
  if(pageid === 'orOverrideFormula' && formValues){
    return getOrOverrideFormulaInput(input,formValues);
  }
  if(pageid === 'usrTax'){
    return getUsrTaxInput(input,state);
  }
  if(pageid === 'usrtxtyp' && formValues){
    return getUsrTxTypInput(input,formValues);
  }
  if(pageid === 'taxTypesPymtOvrd' && formValues){
    return getTaxTypesPymtOvrdInput(input,formValues);
  }
  if(pageid === 'gform' && formValues){
    return getGformInput(input,formValues);
  }
  if(pageid === 'garnishType' && formValues){
    return garnishTypeInput(input,formValues);
  }
  if(pageid === 'formula' && formValues){
    input = {
      pageId: pageid,
      dataset: appDataset(),
      userId: appUserId(),
      pattern: patten,
      taxCode:  formValues['taxCode'].id,
      taxType:  formValues['taxType'].id,
      startdate:formValues.startdate ? moment(formValues.startdate).format("MM/DD/YYYY") : moment().format("MM/DD/YYYY"),
    }
    return input;
  }
  if(pageid === 'planId' && formValues){
    return getPlansInput(input,formValues);
  }
  // return Object.assign(input, formValues);
  return input;
}
export function buildUsageDataInput(pageid, store, formdata, mode) {
  let state = store.getState();
  console.log("formdata");
  console.log(formdata);
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    pmtUsrCode: getUsageUserCode(formdata),
    taxCode: getUsageTaxCode(formdata),
    companyCode: getUsageCompany(formdata),
    companyName: getUsageCompnanyName(formdata),
    usrtax: getUsageDataCode(formdata),
    groupCode: getUsageCode(formdata),
    groupName: formdata.groupName
  };
  return input;
}
export function getUsageCode(formdata) {
  if (formdata && formdata.id) {
    return formdata.company;
  } else if (formdata && formdata.code) {
    return formdata.code;
  }
}

export function getUsageCompany(formdata) {
  if (formdata && formdata.company) {
    return formdata.company;
  }
}
export function getUsageCompnanyName(formdata) {
  if (formdata && formdata.companyName) {
    return formdata.companyName;
  }
}
export function getUsageTaxCode(formdata) {
  if (formdata && formdata.taxCode) {
    return formdata.taxCode;
  }
}
export function getUsageUserCode(formdata) {
  if (formdata && formdata.userCode) {
    return formdata.userCode;
  }
}
export function getUsageDataCode(formdata) {
  if (formdata && formdata.code) {
    return formdata.code;
  }
}

export function buildWhatifWagDeleteInput(pageid, formdata, editMode, state) {
  const {
    formFilterData
  } = state;
  return {
    btxtwge: {
      id: {
        dataset: appDataset(),
        regpen: formFilterData.regpen,
        empcode: formFilterData.empCode,
        chkdt: formFilterData.chkdt,
        taxn: formFilterData.taxn,
        seqn: formdata.seqn
      }
    },
    bwapay: {
      name: formdata.wageCodedesc
    }

  }
}

export function buildwhatifLocationsDelete(pageid, formdata, editMode, state) {
  const {
    formFilterData
  } = state;
  const parentInfo = state.parentInfo;
  return {
    dataset: appDataset(),
    employee: parentInfo.employeeCode,
    checkdate: parentInfo.checkDate,
    locnnumbr: formdata.locnnumbr,
  }
}

export function buildReciprocalOverrideDelete(pageid, formdata, editMode, state) {
  const {
    formFilterData
  } = state;
  return {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    emplGroup: formFilterData.id,
    startDate: formdata.startDate,
    resTaxCode: formdata.resAuthDisplay.split('\n')[0],
    resAuth: formdata.resAuth,
    resFormula: 0, 
    resOvrFltr:"0",
    resTaxType:formdata.resTaxTypeDisplay.split('\n')[0],
    nonResTaxCode:  formdata.nonResAuthDisplay.split('\n')[0],
    nonResAuth: formdata.nonResAuth,
    nonResFormula:"0",
    nonResOvrFltr: "0",
    nonResTaxType: formdata.nonResTaxTypeDisplay.split('\n')[0],
  }
}
/**
 * buildWhatifGarnishmentDelete
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
function buildWhatifGarnishmentDelete(pageid, formdata, editMode, state) {
  let input = {
    btxtgrn: {
      id: {
        dataset: appDataset(),
        regpen: "R",
        empcode: formdata.empcode,
        chkdt: moment(formdata.chkdt).format("MM/DD/YYYY"),
        usrauth: formdata.usrauth,
        usrtxtyp: formdata.usrtxtyp,
        gform: formdata.gform,
        caseid: formdata.caseid,
        docket: formdata.docket,
      },
    },
  };
  return input;
}

/**
 * buildPaymentOverrideDelete
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
function buildPaymentOverrideDelete(pageid, formdata, editMode, state) {
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    code: state.formFilterData.id || state.parentInfo.id,
    authority: formdata.authTaxCode,
    taxCode: formdata.authTaxCode.substring(3, 11),
    taxType: formdata.taxType,
    payCode: formdata.planId,
    startDate: moment(formdata.startDate).format("MM/DD/YYYY")
  }
  return input;
}
/**
 * buildAddressOverridesDelete
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
function buildAddressOverridesDelete(pageid, formdata, editMode, state) {
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    bsiseqn: formdata.bsiseqn,
  };
  return input;
}
/**
 * buildEmploymentCompanyOverridesDelete
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
function buildEmploymentCompanyOverridesDelete(pageid, formdata, editMode, state) {
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    code: formdata.company,
    startDate: formdata.startDate,
    taxCode: formdata.taxCode,
    taxType: formdata.taxType,
    formula: formdata.formula
  };
  return input;
}
/**
 * buildWhatifDeductionBenefitsDelete
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
function buildWhatifDeductionBenefitsDelete(pageid, formdata, editMode, state) {
  let input = {
    id: {
      dataset: appDataset(),
      regpen: "R",
      empcode: formdata.empcode,
      chkdt: formdata.chkdt,
      usrauth: formdata.usrauth,
      usrtxtyp: formdata.usrtxtyp,
      gform: formdata.gform,
      caseid: formdata.caseid,
      docket: formdata.docket,
      wseqn: formdata.wseqn,
    },
    editMode: 2,
    amount: formdata.wamount,
    remncd: formdata.remncd,
    garnwagepriority: formdata.gwPriority,
  };
  return input;
}

function buildGroupOverrideDelete(pageid, formdata, mode, state) {
  const {
    formFilterData
  } = state;
  let parentInfo = state.parentInfo;
  return {
    btxover : {
      id : {
        dataset : appDataset(),
        userID : appUserId(),
        empgroup : parentInfo.id,
        taxcode : formdata.taxCode,
        taxtype : formdata.code,
        formula : formdata.formula,
        startdate : moment(formdata.startDate).format("YYYYMMDD"),
        resident : formdata.residency === 'N' ? false : true
      },
      btxtaxt : {
        taxtype : formdata.code,
      },
      btxtaxc : {
        id : null,
        btxauth : {
          bsiauth : formdata.taxCode,
        }   
       
      },
      rescind :  moment(formdata.endDate).format("YYYYMMDD"),
      overtype : formdata.overtype,
      amount : formdata.flatAmunt || 0,
      rate : formdata.rate || 0,
     
    },
    formulaTitle : formdata.formulaTitle,
    residency : formdata.residency
  }
}

export function buildDeleteInput(pageid, store, formdata, mode) {
  let state = store.getState();
  if (pageid === "wageDetails") {
    return buildWhatifWagDeleteInput(pageid, formdata, mode, state);
  } else if (pageid === "whatifDeductionBenefits") {
    return buildWhatifDeductionBenefitsDelete(pageid, formdata, mode, state);
  } else if (pageid === 'whatifGarnishment') {
    return buildWhatifGarnishmentDelete(pageid, formdata, mode, state);
  } else if (pageid === "whatifLocations") {
    return buildwhatifLocationsDelete(pageid, formdata, mode, state);
  } else if (pageid === 'whatifEmp') {
    return buildWhatifEmpDelete(pageid, formdata, mode, state);
  } else if (pageid === 'paymentOverride') {
    return buildPaymentOverrideDelete(pageid, formdata, mode, state);
  } else if (pageid === 'addressOverrides') {
    return buildAddressOverridesDelete(pageid, formdata, mode, state);
  } else if (pageid === 'unemploymentCompanyOverrides') {
    return buildEmploymentCompanyOverridesDelete(pageid, formdata, mode, state);
  } else if (pageid === "groupOverride") {
    return buildGroupOverrideDelete(pageid, formdata, mode, state);
  } else if (pageid === "reciprocalOverride") {
      return buildReciprocalOverrideDelete(pageid, formdata, mode, state);
  } else if (pageid === "whatifTaxes") {
    return buildWhatIfTaxesDelete(pageid, formdata, mode, state);
  } else if (pageid === "garnishmentFormulaOverrides") {
    return buildGarnishmentFormulaOverridesDelete(pageid, formdata, mode, state);
  } else if (pageid === "optionalRateOverride") {
    return buildOptionalRateOverrideDelete(pageid, formdata, mode, state);
  } else if (pageid === "customGarnishmentTaxFormulas") {
    return buildCustomGarnishmentTaxFormulasDelete(pageid, formdata, mode, state);
  }  else if (pageid === "pensionWhatIfTest") {
      return buildPensionWhatIfTestDelete(pageid, formdata, mode, state);
  } else if (pageid === "pensionWhatIfTaxes") {
    return buildPensionWhatIfTestTaxesDelete(pageid, formdata, mode, state);
  } else if (pageid === "customPaymentTaxExceptions") {
    return buildCustomPaymentTaxExceptionsDelete(pageid, formdata, mode, state);
  } else if (pageid === "disposableOverride") {
    return buildDisposableOverrideDelete(pageid, formdata, mode, state);
  } else if (pageid === "customTaxPaymentOverride") {
    return buildCustomTaxPaymentOverrideDelete(pageid, formdata, mode, state);
  } else if (pageid === "taxTypeUsage") {
    return buildMapTaxTypeDelete(pageid, formdata, mode, state);
  } else if (pageid === "taxCodeUsage") {
    return buildTaxCodeUsageDelete(pageid, formdata, mode, state);
  } else if (pageid === "paymentCodeUsage") {
    return buildPaymentCodeUsageDelete(pageid, formdata, mode, state);
  } else {
    console.log("formdata");
    console.log(formdata);
    const {
      formFilterData
    } = state;
    let input = {
      pageId: pageid,
      dataset: appDataset(),
      userId: appUserId(),
      company:formdata.company,
      authority1:formdata.taxCode1,
      compCode: getCode(formdata, pageid),
      taxCode: formdata.taxCode,
      taxName: formdata.name,
      payCode: formdata.userCode,
      type: formdata.taxType,
      code: getCode(formdata, pageid),
      name: getName(formdata, pageid),
      startDate: getFrmStartDate(formdata),
      location: formdata.location,
      street1: formdata.street1,
      street2: formdata.street2,
      city: formdata.city,
      county: formdata.county,
      state: formdata.state,
      zip: formdata.zip,
      employee: formdata.employeeCode,
      checkdate: formdata.checkDate,
      runId: formFilterData.runid
    };
    return input;
  }
}

export function buildDeleteAllInput(pageid, store, formdata, mode) {
  let state = store.getState();
  if (pageid === 'whatifEmp') {
    return buildWhatifEmpDeleteAll(pageid, formdata, mode, state);
  }else if(pageid==='whatifDeductionBenefits'){
    return buildWhatifDeductionBenefitsDeleteAll(pageid, formdata, mode, state);
  }else if(pageid==='whatifLocations'){
    return buildWhatIfLocationsDeleteAllInput(pageid, formdata, mode, state);
  }else{
    return {
      dataset: appDataset(),
      pageId: pageid
    }
  }
}
export function buildUpdateInput(pageid, store, formdata, mode) {
  let state = store.getState();
  if (pageid === 'mapTaxType') {
    return buildMapTaxTypeUpdate(pageid, formdata, mode, state);
  }else if (pageid === 'mapTaxCode') {
    return buildMapTaxCodeUpdate(pageid, formdata, mode, state);
  }else{
    return {
      dataset: appDataset(),
    }
  }
}

export function buildPdfInput(pageid, store, formdata, mode, fromBar) {
  const state = store.getState();
  const filterData = state.formFilterData;
  if(pageid==='garnishmentFormulaOverrides'){
    return generateGarnishmentFormulaOverridePDF(pageid, store, formdata, mode);
  }else if(pageid === "customGarnishmentTaxFormulas"){
    return buildCustomGarnishmentTaxFormulasViewPDF(pageid, state, formdata, mode);
  }else if(pageid === "pensionWhatIfTaxes" && !fromBar){
      return generatePensionWhatIfTaxesPDF(pageid, filterData, formdata, mode);
  }else if(pageid === "pensionWhatIfTaxes" && fromBar){
      return generatePensionWhatIfCalculateTaxesPDF(pageid, filterData, formdata, mode);
  }else if(pageid === "pensionWhatIfTest"){
      return generatePensionWhatIfTestPDF(pageid, filterData, formdata, mode);
  }else if(pageid === "whatifEmp"){
      return generateWhatifEmpPDFInput(pageid, state, formdata, mode);
  }else if(pageid === "whatifTaxes" && fromBar){
      return calculateTaxesPDFInput(pageid, false);
  }else if(pageid === "whatifGarnishment" && fromBar){
    return calculateTaxesPDFInput(pageid, true);
  }else if(pageid === "wageDetails"){
    return generatewageDetailsPDF(pageid, filterData, formdata, mode);
  }else if(pageid === "whatifTaxes" && !fromBar){
    return generatewhatifTaxesPDF(pageid, filterData, formdata, mode);
  }else if(pageid === "whatifGarnishment" && !fromBar){
    return generateWhatIfGarnishmentPDF(pageid, state, formdata, mode);
  }else if(pageid === "taxLocator"){
    return generateTaxLocatorPDF(pageid, state, formdata, mode);
  }
  else{
    return {
      dataset: appDataset(),
      employee: filterData.employeeCode,
      checkdate: filterData.checkDate,
      empGroup: filterData.id,
      userId: appUserId(),
      showSummary: true
    }
  }
}
/**
 * buildWhatifEmpSaveInput
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 */
function buildWhatifEmpSaveInput(pageid, formdata, editMode) {
  let editRec = "false";
  if (editMode == 1) {
    editRec = "false"
  } else if (editMode == 2) {
    editRec = "true"
  }
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    empCode: formdata.empCode,
    checkDate: moment(formdata.checkDate).format("MM/DD/YYYY"),
    empName: formdata.empName,
    regPen: "R",
    empGroup: formdata.empGroup,
    companyCode: formdata.companyCode,
    paymentType: formdata.paymentType,
    payFreq: formdata.payFreq || 0,
    vacHours: formdata.vacHours || 0.0,
    prorationFreq: formdata.prorationFreq || 0,
    ytdPayPeriod: formdata.ytdPayPeriod || 0,
    payPeriodHours: formdata.payPeriodHours || 0.0,
    grossUpInd: formdata.grossUpInd || 0,
    netWages: formdata.netWages || 0.0,
    estAnnualGrossAmt: formdata.estAnnualGrossAmt || 0.0,
    reciprocalCode: formdata.reciprocalCode,
    residentState: formdata.residentState,
    grossWages: formdata.grossWages || 0.00,
    avgWkGross: formdata.avgWkGross || 0.00,
    garnishment: formdata.garnishment,
    garnishmentGroup: formdata.garnishmentGroup,
    principalStateOfEmp: formdata.principalStateOfEmp,
    calcType: formdata.calcType,
    wageProcCode: formdata.wageProcCode,
    estSpousalIncome: formdata.estSpousalIncome || 0.00,
    empType: formdata.empType,
    emplType: formdata.emplType,
    birthDate: (formdata.birthDate && formdata.birthDate!=="")?moment(formdata.birthDate).format("MM/DD/YYYY"):"",
    dateofDeath: formdata.dateofDeath,
    calculatedLocalTaxIn: formdata.calculatedLocalTaxIn,
    statEEInd: formdata.statEEInd,
    foreignEarnedIncome: formdata.foreignEarnedIncome,
    exemptMilitaryLocation: formdata.exemptMilitaryLocation,
    editRec: editRec,
    contribAlloc: formdata.contribAlloc?formdata.contribAlloc:0,
    terminationDate: getTerminationDate(formdata),
    formulaEffectiveDateYYYYMMDD: (formdata.formulaEffectiveDateYYYYMMDD && formdata.formulaEffectiveDateYYYYMMDD!=="") ?moment(formdata.formulaEffectiveDateYYYYMMDD).format("MM/DD/YYYY"):"",
    taxN: formdata.taxN,
  };
  return input;
}
/**
 * buildWhatifDeductionBenefitsSaveInput
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 */
function buildWhatifDeductionBenefitsSaveInput(pageid, formdata, editMode, state) {
  let editRec = "false";
  if (editMode == 1) {
    editRec = "false";
  } else if (editMode == 2) {
    editRec = "true";
  }
  
  let formstate = state.formFilterData;
  let input = {
    id: {
      dataset: appDataset(),
      regpen: "R",
      empcode: editMode == 2 ? formdata.empcode : formstate.empcode,
      chkdt: editMode == 2 ? formdata.chkdt : formstate.chkdt,
      usrauth: editMode == 2 ? formdata.usrauth : formstate.usrauth,
      usrtxtyp: editMode == 2 ? formdata.usrtxtyp : formstate.usrtxtyp,
      gform: editMode == 2 ? formdata.gform : formstate.gform,
      caseid: editMode == 2 ? formdata.caseid : formstate.caseid,
      docket: editMode == 2 ? formdata.docket : formstate.docket,
      wseqn: editMode == 2 ? formdata.wseqn : 1 //formstate.wseqn,
    },
    editMode: editMode,
    amount: formdata.wamount,
    remncd: formdata.remncd,
    garnwagepriority: formdata.gwPriority //Update when static select fixed in library.
  };
  return input;
}

function buildWhatifWageSaveInput(pageid, formdata, editMode, state) {
  const filterFormData = state.parentInfo;
  let names = formdata.wageCodedesc.split(' - ');
  if (names.length === 3) {
    names = formdata.wageCodedesc.split(' - ')[formdata.wageCodedesc.split(' - ').length - 1];
  } else {
    names = formdata.code;
  }

  return {
    btxtwge: {
      id: {
        dataset: appDataset(),
        regpen: filterFormData.regpen,
        empcode: filterFormData.empCode,
        chkdt: filterFormData.chkdt,
        taxn: filterFormData.taxn,
        seqn: formdata.seqn
      },
      curern: formdata.currentEarning || 0.00,
      curcnt: formdata.currentContribution || 0.00,
      curcrdt: formdata.currentCredit || null,
      curmch: formdata.currentMatch || 0.00,
      mtdcnt: formdata.mtdcnt || 0.00,
      mtdmch: formdata.mtdmch || 0.00,
      qtdcnt: formdata.qtdcnt || 0.00,
      qtdmch: formdata.qtdmch || 0.00,
      ytdcnt: formdata.ytdcnt || 0.00,
      ytdmch: formdata.ytdmch || 0.00,
      eelim: formdata.eelim || 0.00,
      erlim: formdata.erlim || 0.00,
      eeind: formdata.employeeIndicator || 0,
      erind: formdata.employerIndicator || 0,
      catchupEI: formdata.catchupEI || 0,
      remncd: names,
      initdt: moment(formdata.initiationDate).format("MM/DD/YYYY")
    },
    bwapay: {
      name: formdata.wageCodedesc,
      paytype: formdata.paytype,
    },
    editMode : editMode
  }
}
/**
 * buildWhatIfEmployeeGarnishmentSaveInput
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
function buildWhatIfEmployeeGarnishmentSaveInput(pageid, formdata, editMode, state) {
  let editRec = "false";
  if (editMode == 1) {
    editRec = "false";
  } else if (editMode == 2) {
    editRec = "true";
  }
  let taxtyp = formdata.usrtxtyp;
  if (editMode == 1){
    taxtyp = formdata.usrtxtyp;
  } else if (editMode == 2) {
    taxtyp = formdata.taxtype;
  }
  let parentInfo = state.parentInfo;
  let empcode = formdata.empcode ? formdata.empcode: parentInfo.empCode
  let chkdt   = formdata.chkdt ? formdata.chkdt: parentInfo.checkDate
  let input = {
    btxtgrn: {
      id: {
        dataset: appDataset(),
        regpen: "R",
        empcode: empcode,
        chkdt: moment(chkdt).format("MM/DD/YYYY"),
        usrauth: formdata.usrauth && formdata.usrauth.indexOf("BSI")>=0 ? formdata.usrauth:'BSI'+formdata.usrauth,
        usrtxtyp: formdata.usrtxtyp && formdata.usrtxtyp.indexOf("BSI")>=0 ? formdata.usrtxtyp:'BSI'+formdata.usrtxtyp,
        gform: formdata.gform,
        caseid: formdata.caseid,
        docket: formdata.docket? formdata.docket :"",
      },
      mtdwage: formdata.mtdwage ? formdata.mtdwage:0.00,
      annsal: formdata.annsal? formdata.annsal:0.00,
      ordamt: formdata.ordamt?formdata.ordamt:0.00,
      dispern: formdata.dispern?formdata.dispern:0.00,
      exmptamt: formdata.exmptamt?formdata.exmptamt:0.00,
      addexamt: formdata.addexamt? formdata.addexamt:0.00,
      prioramt: formdata.prioramt?formdata.prioramt:0.00,
      mtddispe: formdata.mtddispe?formdata.mtddispe:0.00,
      ytddispe: formdata.ytddispe?formdata.ytddispe:0.00,
      mtdgarn: formdata.mtdgarn?formdata.mtdgarn:0.00,
      ytdgarn: formdata.ytdgarn?formdata.ytdgarn:0.00,
      qtdgarn: formdata.qtdgarn ?formdata.qtdgarn:0.00,
      pptdgarn: formdata.pptdgarn?formdata.pptdgarn:0.00,
      garncap: formdata.garncap?formdata.garncap:0.00,
      garnexem: formdata.garnexem?formdata.garnexem:0.0,
      calcamnt: formdata.calcamnt?formdata.calcamnt:0.0,
      drsvd0: formdata.drsvd0?formdata.drsvd0:0.00,
      drsvd1: formdata.drsvd1?formdata.drsvd1:0.00,
      hrsvd0: formdata.hrsvd0?formdata.hrsvd0:0.000,
      pctwthd: formdata.pctwthd?formdata.pctwthd:0.000000000,
      ordpctg: formdata.ordpctg?formdata.ordpctg:0.000000000,
      thd: formdata.thd?formdata.thd:0.0,
      ohi: formdata.ohi?formdata.ohi:0.0,
      priovrd: formdata.priovrd?formdata.priovrd:0,
      gstats: formdata.gstats?formdata.gstats:0,
      fstats: formdata.fstats?formdata.fstats:0,
      nexem: formdata.nexem ? formdata.nexem : 0,
      addded: formdata.addded ?formdata.addded:0,
      family2: formdata.family2?formdata.family2:0,
      familyh: formdata.familyh ? formdata.familyh:0,
      ndeps: formdata.ndeps?formdata.ndeps:0,
      ndepchld: formdata.ndepchld ? formdata.ndepchld:0,
      vocation: formdata.vocation?formdata.vocation:0,
      delinq: formdata.delinq?formdata.delinq:0,
      gduratn: formdata.gduratn ? formdata.gduratn: 0,
      consent: formdata.consent?formdata.consent:0,
      typedebt: formdata.typedebt?formdata.typedebt:0,
      pymtnmbr: formdata.pymtnmbr?formdata.pymtnmbr:0,
      ordamtflg: formdata.ordamtflg?formdata.ordamtflg:0,
      rndind: formdata.rndind?formdata.rndind:0,
      usefedlmt: formdata.usefedlmt?formdata.usefedlmt:0,
      lumpsum: formdata.lumpsum?formdata.lumpsum:0,
      nperdspmt: formdata.nperdspmt?formdata.nperdspmt:0,
      grnlmtind: formdata.grnlmtind?formdata.grnlmtind:0,
      hassoe: formdata.hassoe?formdata.hassoe:0,
      useAlternateLimit: formdata.useAlternateLimit?formdata.useAlternateLimit:0,
      firstPayCode: formdata.firstPayCode?formdata.firstPayCode:0,
      taxtype: taxtyp,
      grcvddt: formdata.grcvddt? moment(formdata.grcvddt).format("MM/DD/YYYY"): moment().format("MM/DD/YYYY"),
      gstrtdt: formdata.gstrtdt? moment(formdata.gstrtdt).format("MM/DD/YYYY"):moment().format("MM/DD/YYYY"),
      genddt: formdata.genddt? moment(formdata.genddt).format("MM/DD/YYYY"):moment().format("MM/DD/YYYY"),
      remainderOfDisposable: formdata.remainderOfDisposable?formdata.remainderOfDisposable:0,
      taxLeftOver: formdata.taxLeftOver?formdata.taxLeftOver:0.00,
      garnGross: formdata.garnGross?formdata.garnGross:0.00,
      reducingD: formdata.reducingD?formdata.reducingD:0.00,
      lHourlyMin: formdata.lHourlyMin?formdata.lHourlyMin:0.00,
      lprotHours: formdata.lprotHours?formdata.lprotHours:0.000,
      garnType: formdata.garnType?formdata.garnType:0,
      useSoIssue: formdata.useSoIssue?formdata.useSoIssue:0,
    },
    empName: null,
    authorityName: formdata.authorityName?formdata.authorityName:'',
    garnishmentName: formdata.garnishmentName?formdata.garnishmentName:'',
    formulaTitle: formdata.formulaTitle?formdata.formulaTitle:'',
    fstats: formdata.fstats ? formdata.fstats :0,
    editMode: editMode,
    calculatedAmount: formdata.calculatedAmount ? formdata.calculatedAmount:0.0,
  };
  return input;
}
/**
 * buildPaymentOverrideSaveInput
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
function buildPaymentOverrideSaveInput(pageid, formdata, editMode, state) {
  let editRec = "false";
  if (editMode == 1) {
    editRec = "false";
  } else if (editMode == 2) {
    editRec = "true";
  }
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    code: state.parentInfo.id,
    authority: editMode == 1 ? `BSI${formdata.authTaxCode}` : formdata.authTaxCode,
    taxCode: formdata.authTaxCode,
    taxType: formdata.taxType,
    payCode: formdata.planId,
    type: formdata.planId.substr(3,1),
    startDate: moment(formdata.startDate).format("MM/DD/YYYY"),
    endDate: moment(formdata.endDate).format("MM/DD/YYYY"),
    ee_Max: formdata.eeMaxAmount,
    editMode: editMode,
  };
  let formValues = {};
  if (formdata.planId.substr(3,1) && formdata.planId.substr(3,1) === "E") {
    formValues = {
      ee_Max: formdata.earn_eeMaxAmount,
      taxability: formdata.earn_taxability,
      aggStatus: formdata.aggStatus || 'L'
    };
  } else {
    formValues = {
      ee_Max: formdata.eeMaxAmount,
      er_Max: formdata.eeMaxAmount,
      aggStatus: formdata.aggStatus,
      taxability: formdata.taxability,
      er_taxability: formdata.erTaxability,
      useEEMax: formdata.useEEMax,
      useERMax: formdata.useERMax,
    };
  }
  return Object.assign(input, formValues);
}
/**
 * buildAddressOverridesSaveInput
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
function buildAddressOverridesSaveInput(pageid, formdata, editMode, state) {
  let editRec = "false";
  if (editMode == 1) {
    editRec = "false";
  } else if (editMode == 2) {
    editRec = "true";
  }
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    streetName: formdata.fname,
    state: formdata.state,
    countyName: formdata.countyName,
    placeCode: editMode == 1 ? formdata.placeName: formdata.classCode,
    sdName: editMode == 1 ? formdata.sdName : formdata.schoolDistrictTaxCode,
    postDirection: formdata.fpost,
    startNumber: formdata.fadd || formdata.alphaNumericStartingNumber,
    endNumber: formdata.tadd || formdata.alphaNumericEndingNumber,
    snt: formdata.snt,
    secUnit: formdata.sunit,
    placesCode: editMode == 1 ? formdata.placeName: formdata.classCode,
    parity: formdata.parity,
    addChangeDate: moment().format("YYYYMMDD"),
    streetType: formdata.ftype,
    preDirection: formdata.fpre,
    showMessage: formdata.showmsg,
    sdCountyName: "FAIRFIELD",
    taxCode: editMode == 1 ? formdata.sdName : formdata.schoolDistrictTaxCode,
    county: formdata.countyName,
    placeName: editMode == 1 ? formdata.placeName: formdata.classCode,
    classCode: formdata.placeName,
    postalCode: formdata.fzip,
    placeCodeAutoCompl: editMode == 1 ? formdata.placeName: formdata.classCode,
    classesCode: formdata.classCode || "",
    placesName: "",
    schoolDistrictAutoCompl: editMode == 1 ? formdata.sdName : formdata.schoolDistrictTaxCode,
    sdCode: "",
    schooldistrictCode: "",
    schooldistrictName: "",
    schooldistrictCounty: "",
    editMode: editMode
  };
  let formValues = {};
  if (editMode == 1) {
    formValues = {
      bsiseqn: "3",
    };
  } else {
    formValues = {
      bsiseqn: formdata.bsiseqn
    };
  }
  return Object.assign(input, formValues);
}
/**
 * buildUnemploymentCompanyOverridesSaveInput
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
function buildUnemploymentCompanyOverridesSaveInput(pageid, formdata, editMode, state) {
  let editRec = "false";
  if (editMode == 1) {
    editRec = "false";
    store.dispatch(setParentData(state.formFilterData));
  } else if (editMode == 2) {
    editRec = "true";
    //store.dispatch(setParentData(state.formFilterData));
  }
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    startDate: moment(formdata.startDate).format("MM/DD/YYYY"),
    taxCode: formdata.taxCodeUnEmp.indexOf("BSI") === 0 ? formdata.taxCodeUnEmp : 'BSI' + formdata.taxCodeUnEmp,
    authority: formdata.taxCodeUnEmp,
    authorityName: formdata.authName,
    taxType: formdata.taxTypeUnemp,
    formula: formdata.formulaUnemp,
    endDate: moment(formdata.endDate).format("MM/DD/YYYY"),
    account: formdata.account,
    rate: formdata.rate,
    maxWage: formdata.maxWage,
  };
  let formValues = {};
  if (editMode == 1) {
    formValues = {
      editMode: editMode,
      code: state.formFilterData.company ? state.formFilterData.company : state.parentData.company
    };
  } else {
    formValues = {
      editMode: editMode,
      code: formdata.company,
      taxCode: formdata.taxCodeUnEmp
    };
  }
  return Object.assign(input, formValues);
}

function buildwhatifLocationsSaveInput(pageid, formdata, editMode, state) {
  const filterFormData = state.formFilterData;
  const parentInfo = state.parentInfo;

  return {
    btxldetl: {
      id: {
        dataset: appDataset(),
        employee: parentInfo.employeeCode,
        checkdate: parentInfo.checkDate,
        locnnumbr: formdata.locnnumbr
      },
      resident:formdata.liveWork,
      street1: formdata.street1,
      street2: formdata.street2,
      city: formdata.city,
      county: formdata.county.trim(),
      stateabb: formdata.state,
      zipcode: formdata.zip,
      eiccode: formdata.eicCode,
      // primews: formdata.primews
    },
    editMode: editMode

  }
}

function buildReciprocalOverrideSaveInput(pageid, formdata, editMode, state) {
  const filterFormData = state.formFilterData;
if(editMode === 2) {
  return {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    emplGroup: filterFormData.id,
    ovrType: formdata.ovrType,
    startDate: moment(formdata.startDate).format("MM/DD/YYYY"), 
    resTaxCode: formdata.resAuthDisplay && formdata.resAuthDisplay.split('\n')[0],
    resAuth: formdata.resAuth,
    resOvrFltr:"0",
    resTaxType:formdata.resTaxTypeDisplay && formdata.resTaxTypeDisplay.split('\n')[0],
    nonResTaxCode: formdata.nonResAuthDisplay && formdata.nonResAuthDisplay.split('\n')[0],
    nonResAuth: formdata.nonResAuth,
    nonResOvrFltr:"0",
    nonResTaxType: formdata.nonResTaxTypeDisplay && formdata.nonResTaxTypeDisplay.split('\n')[0],
    endDate: moment(formdata.endDate).format("MM/DD/YYYY"),
    method:"Z",
    rate: formdata.rate,
    calcMsg: editMode === 2 ? (formdata.calcMsgDisplay === "N" ? "false": "true") : formdata.showcalcmesg,
    wgRpt: formdata.wageReportingMethod,
    rptMsg: editMode === 2 ? (formdata.rptMsgDisplay === "N" ? "false" : "true") : formdata.showreportmesg,
    editMode,
}
} else {
  return {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    emplGroup: filterFormData.id,
    ovrType: formdata.ovrType,
    startDate: moment(formdata.startDate).format("MM/DD/YYYY"), 
    resTaxCode: formdata.taxCodeToBeOverridden || formdata.taxCodeToBeOverriddenlocal,
    resAuth:  formdata.taxCodeToBeOverridden || formdata.taxCodeToBeOverriddenlocal,
    resOvrFltr:"0",
    resTaxType:formdata.residentTaxType || formdata.residentTaxTypelocal,
    nonResTaxCode: formdata.taxCodeToReciprocate || formdata.taxCodeToReciprocatelocal,
    nonResAuth: formdata.taxCodeToReciprocate || formdata.taxCodeToReciprocatelocal,
    nonResOvrFltr:"0",
    nonResTaxType: formdata.nonresidentTaxType || formdata.nonresidentTaxTypelocal,
    endDate: moment(formdata.endDate).format("MM/DD/YYYY"),
    "method": formdata.calculationMethod || formdata.calculationMthd,
    rate: formdata.rate,
    calcMsg: editMode === 2 ? (formdata.calcMsgDisplay === "N" ? "false": "true") : formdata.showcalcmesg,
    wgRpt: formdata.wageReportingMethod,
    rptMsg: editMode === 2 ? (formdata.rptMsgDisplay === "N" ? "false" : "true") : formdata.showreportmesg,
    editMode,
}
}
  
}

export function buildTaxLocatorSaveInput(pageId, formData, editMode) {
  let createNew = "true";
  if(editMode == 1){
    createNew = "true";
  }else if(editMode == 2){
    createNew = "false";
  }
  return {
    btxlemp: {
      id: {
        dataset: appDataset(),
        employee: formData.employeeCode,
        checkdate: moment(formData.checkDate).format("MM/DD/YYYY")
      },
      empclass: formData.employeeClass || 1,
      eicstatus: formData.eicCode || 1,
      grosswages: formData.grossAmount || 0,
      railroad: formData.railRoadCode || 0,
      taxfilter: formData.taxFilter || 0,
      whopays: formData.paidBy || 0,
      hiredate: formData.hireDate,
      deathdate: formData.dateOfDeath,
      allstates: formData.returnAllStates || 0,
      retireplan: formData.privateSectorRetirementPlanIndicator || 0,
      dataver: formData.dataVersion || 0,
      empsts: 0,
      selstaind: formData.selectedStateIndicator || 0,
      bylocation: 0,
      resicntry: formData.residentCountry,
      selstat: formData.selectedState,
      cpycode: formData.companyCode.trim(),
      fed: formData.fedWthForEeLive,
      empltype: formData.employmentType || 0,
      wCompFlag: 0
    },
    createNew: createNew,
    checkDateYYYYMMDD: "20170119",
    hireDateYYYYMMDD: "",
    dateOfDeathYYYYMMDD: null,
    terminationDateYYYYMMDD: null,
    numberOfTaxEntries: 0,
    numberOfLocationEntries: 0,

  }
}

function buildGroupOverrideSaveInput(pageid, formData, editMode, state) {
  const filterFormData = state.formFilterData;
  let parentInfo = state.parentInfo;

  return {
      btxover : {
        id : {
          dataset : appDataset(),
          userID : appUserId(),
          empgroup : parentInfo.id,
          taxcode : editMode == 1 ?`BSI${formData.authority}`  : formData.taxCode,
          resident : formData.residency === 'N' ? false : true,
          taxtype : editMode == 1 ? formData.taxType : formData.code,
          formula : editMode == 1 ? formData.formulaTitle : formData.formula,
          startdate : moment(formData.startDate).format("YYYYMMDD"),
        },
        btxtaxt : {
          taxtype : editMode == 1 ? formData.taxType : formData.code,
        },
        btxtaxc : {
          id : null,
          btxauth : {
            bsiauth : editMode == 1 ? formData.authority : formData.taxCode.substring(3,11),
          }    
        },
        rescind :  moment(formData.endDate).format("YYYYMMDD"),
        overtype : formData.overtype,
        amount : formData.flatAmunt || 0,
        rate : formData.rate || 0,
        btxovfrs : [ {
          id : {
            empgroup : filterFormData.id,
            taxcode : editMode == 1 ?`BSI${formData.authority}`  : formData.taxCode,
            taxtype : editMode == 1 ? formData.taxType : formData.code,
            formula : editMode == 1 ? formData.formulaTitle : formData.formula,
            startdate : moment(formData.startDate).format("YYYYMMDD"),
            resident : formData.residency === 'N' ? false : true,
            paytype : formData.paymentType || 0
          },
          btxover : null,
          calcmeth : formData.calculationMethod || '0',
          ovfrtax : formData.taxRate || '0',
          "ovfrmaxw" : formData.maximumWage || '0',
          "ovfrminw" : formData.minimumWage || '0',
          "ovfrmaxt" : formData.maximumTax || '0',
          ovfrflat : formData.flatAmount || '0',
          ovfrround : formData.roundingMethod || '0',
          "rescind" : null
        } ]
      },
      editMode : editMode,
      residency : formData.residency,
      formulaTitle: editMode == 1 ? formData.formulaTitle : formData.formula
    }
}

export function buildWorkSiteSaveInput(pageid, formdata, editmode, state) {
  const filterFormData = state.formFilterData;
  let parentInfo = state.parentInfo;
  const worksites = [];
  //TODO
  formdata.forEach(data => {
    let payload = `W1~${data.street1}~~${data.city}~${data.county}~${data.state}~${data.zip}`;
    worksites.push(payload);
  })
  return {
    dataset: appDataset(),
    empCode: parentInfo.employeeCode,
    checkDate: parentInfo.checkDate,
    selectedWorksites: worksites
  }
}

export function buildCustomPaymentSaveInput(pageid, formdata, editMode, state) {
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    payCode: formdata.userCode,
    payType: formdata.payType,
    payName: formdata.name,
    e_taxability:formdata.e_taxability,
    e_maxLimit:(formdata.e_taxability === "100" || formdata.e_taxability === "101" || formdata.e_taxability === "102") ? formdata.eemax : formdata.e_taxability ,
    editMode: editMode
  };
  let formValues = {};
  if (formdata.payType && formdata.payType === "E") {
    formValues = {
      e_taxability:formdata.e_taxability,
      e_maxLimit:(formdata.e_taxability === "100" || formdata.e_taxability === "101" || formdata.e_taxability === "102") ? formdata.eemax : formdata.e_taxability ,
    };
  } else {
    formValues = {
      p_aggStatus:formdata.aggregationStatus,
      p_taxability: formdata.e_taxability,
      p_maxLimit: formdata.eemax,
      er_taxability: formdata.employerTaxability == null ? "0" : formdata.employerTaxability ,
    };
  }
  return Object.assign(input, formValues);
}

export function buildSaveInputForPage(pageid, formdata, editMode, state) {
  if (pageid === "wageDetails") {
    return buildWhatifWageSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === 'whatifLocations') {
    return buildwhatifLocationsSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === 'whatifEmp') {
    return buildWhatifEmpSaveInput(pageid, formdata, editMode);
  } else if (pageid === "taxLocator") {
    return buildTaxLocatorSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "addressFromWorksite") {
    return buildWorkSiteSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === 'whatifDeductionBenefits') {
    return buildWhatifDeductionBenefitsSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === 'whatifGarnishment') {
    return buildWhatIfEmployeeGarnishmentSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === 'paymentOverride') {
    return buildPaymentOverrideSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === 'addressOverrides') {
    return buildAddressOverridesSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === 'unemploymentCompanyOverrides') {
    return buildUnemploymentCompanyOverridesSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === 'groupOverride') {
    return buildGroupOverrideSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "whatifTaxes") {
    return buildWhatIfTaxesSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "reciprocalOverride") {
    return buildReciprocalOverrideSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "garnishmentFormulaOverrides") {
    return buildGarnishmentFormulaOverridesSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "customTaxFormulas") {
    return buildCustomTaxFormulasSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "pensionWhatIfTest") {
    return buildPensionWhatIfTestSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "pensionWhatIfTaxes") {
    return buildPensionWhatIfTaxesSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "optionalRateOverride") {
    return buildOptionalRateOverrideSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "customGarnishmentTaxFormulas") {
    return buildCustomGarnishmentTaxFormulasSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "customPaymentTaxExceptions") {
    return buildCustomPaymentTaxExceptionsSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "customNexusCompanyData") {
    return buildCustomNexusCompanyDataSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "disposableOverride") {
    return buildDisposableOverrideSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "customTaxPaymentOverride") {
    return buildCustomTaxPaymentOverrideSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "mapTaxCode") {
    return buildMapTaxCodeSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "mapTaxType") {
    return buildMapTaxTypeSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "mapPaymentCode") {
    return buildMapPaymentCodeSaveInput(pageid, formdata, editMode, state);
  } else if (pageid === "customPayments") {
    return buildCustomPaymentSaveInput(pageid, formdata, editMode, state);
  } else {
    return buildOtherSaveInput(pageid, formdata, editMode);
  }
}

function buildOtherSaveInput(pageid, formdata, editMode) {
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    editMode: editMode,
    code: getCode(formdata, pageid),
    name: getName(formdata, pageid),
    fein: formdata.fein,
    courtesy: formdata.courtesy,
    payCode: formdata.userCode,
    payType: formdata.payType,
    payName: formdata.name,
    er_taxability: formdata.employerTaxability,
    p_aggStatus:formdata.aggregationStatus,
    p_taxability: formdata.e_taxability,
    p_maxLimit: formdata.eemax,
    e_taxability:formdata.e_taxability,
    taxCode: formdata.taxCode,
    taxName: formdata.name,
    calcMethod: formdata.cmName,
    flatAmount: formdata.flatAmount,
    maxTax: formdata.maxTax,
    maxWage: formdata.maxWage,
    minWage: formdata.minWage,
    endDate: getFrmEndDate(formdata),
    rounding: formdata.roundingDisplay,
    roundingDisplay: formdata.roundingDisplay,
    startDate: getFrmStartDate(formdata),
    effDate: getFrmEffDate(formdata),
    taxRate: formdata.taxRate,
    type: formdata.taxType,
    location: formdata.location,
    street1: formdata.street1,
    street2: formdata.street2,
    city: formdata.city,
    county: formdata.county,
    state: formdata.state,
    zip: formdata.zip
  }
  return input;
}
export function buildSaveInput(pageid, store, formdata, mode) {
  let state = store.getState();
  console.log(formdata);
  let editMode = 0;
  if (mode === "New") {
    editMode = 1;
  } else if (mode === "Edit") {
    editMode = 2;
  }
  let input = buildSaveInputForPage(pageid, formdata, editMode, state);
  return input;
}

export function buildSaveAsInput(pageid, store, formData, mode) {
  return {
    btxlemp: {
      id: {
        dataset: appDataset(),
        employee: formData.employeeCode,
        checkdate: moment(formData.checkDate).format("MM/DD/YYYY")
      },
      btxldetls: [],
      btxdset: null,
      empclass: formData.employeeClass || 1,
      eicstatus: formData.eicCode || 1,
      grosswages: formData.grossAmount || 0,
      railroad: formData.railRoadCode || 0,
      taxfilter: formData.taxFilter || 0,
      whopays: formData.paidBy || 0,
      hiredate: formData.hireDate,
      deathdate: formData.dateOfDeath,
      allstates: formData.returnAllStates || 0,
      retireplan: formData.privateSectorRetirementPlanIndicator || 0,
      dataver: formData.dataVersion || 0,
      empsts: 0,
      bylocation: 0,
      resicntry: formData.residentCountry,
      selstaind: 0,
      selstat: formData.selectedState,
      cpycode: formData.companyCode,
      fed: formData.fedWthForEeLive || 0,
      empltype: formData.employmentType || 0,
      wCompFlag: 0
    },
    createNew: true,
    checkDateYYYYMMDD: "20170119",
    hireDateYYYYMMDD: "",
    dateOfDeathYYYYMMDD: null,
    terminationDateYYYYMMDD: null,
    numberOfTaxEntries: 0,
    numberOfLocationEntries: 0,
    saveAsEmployee: formData.employeeCode,
    saveAsCheckdate: moment(formData.checkDate).format("MM/DD/YYYY"),
  }
}

export function getTerminationDate(filterData) {
  if (filterData && (filterData.terminationDate)) {
    let dt = filterData.terminationDate;
    let newdt = "";
    if (dt.indexOf("/") > 0) {
      return dt;
    } else if (dt.indexOf("-") > 0) {
      let spldt = dt.split("-");
      let newdt = spldt[1] + "/" + spldt[2] + "/" + spldt[0];
      return newdt;
    }
  } else {
    return "";
  }
}
export function getCode(formdata, pageid) {
  if (formdata && formdata.company) {
    return formdata.company;
  } else if (formdata && formdata.code) {
    return formdata.code;
  } else if (formdata && formdata.id) {
    return formdata.id;
  } else if (formdata && formdata.bsiAuth) {
    return formdata.bsiAuth;
  } else if (pageid && pageid == "worksiteCompanies") {
    return store.getState().formFilterData.company;
  }
}
export function getName(formdata, pageid) {
  if (formdata && formdata.companyName) {
    return formdata.companyName;
  } else if (formdata && formdata.name) {
    return formdata.name;
  } else if (formdata && formdata.groupName) {
    return formdata.groupName;
  } else if (pageid && pageid == "worksiteCompanies") {
    return store.getState().formFilterData.companyName;
  }
}
export const reqInfo = data => {
  let info = {};
  if (isMock()) {
    info = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    };
  } else {
    info = {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    };
  }
  return info;
};

export function getUrl(id) {
  let metadataMap = metadatamap.find(metadatam => id == metadatam.id);
  let url = generateUrl.buildURL(metadataMap.url);
  if (isMock()) {
    // for webpack generated mock data
    if (mockDataMapper[id]) {
      url = mockDataMapper[id];
    } else {
      // For custom generated mock data
      metadataMap = mockdatamap.find(metadatam => {
        if (id == metadatam.id) return metadatam;
      });
      url = metadataMap.url;
    }
  }
  console.log("View URL %s for page %s", url, id);
  return url;
}

export function deleteUrl(id) {
  let deldataMap = deletedatamap.find(metadatam => {
    if (id == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(deldataMap.url);
  if (isMock()) {
    if (mockDataMapper[id]) {
      url = mockDataMapper[id];
    } else {
      let deldataMap = mockdelmap.find(metadatam => {
        if (id == metadatam.id) return metadatam;
      });
      url = deldataMap.url;
    }
  }
  console.log("Delete URL %s for page %s", url, id);
  return url;
}

export function deleteAllUrl(id) {
  let deldataallMap = deletealldatamap.find(metadatam => {
    if (id == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(deldataallMap.url);
  console.log("Delete All URL %s for page %s", url, id);
  return url;
}
export function updateUrl(id) {
  let updateAllamap = updatedatamap.find(metadatam => {
    if (id == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(updateAllamap.url);
  console.log("Update URL %s for page %s", url, id);
  return url;
}

export function viewPDFUrl(id) {
  let viewPdf = viewPDFMap.find(metadatam => {
    if (id == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(viewPdf.url);
  if (isMock()) {
    if (mockDataMapper[id]) {
      url = mockDataMapper[id];
    } else {
      let viewPdf = mockdelmap.find(metadatam => {
        if (id == metadatam.id) return metadatam;
      });
      url = viewPdf.url;
    }
  }
  console.log("VIEW PDF URL %s for page %s", url, id);
  return url;
}
export function viewCalcPDFUrl(id) {
  let viewPdf = viewCalcPDFMap.find(metadatam => {
    if (id == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(viewPdf.url);
  console.log("VIEW CALC PDF URL %s for page %s", url, id);
  return url;
}

export function viewPDFUrlButtonBar(id) {
  let viewPdf = viewPDFMapButtonBar.find(metadatam => {
    if (id == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(viewPdf.url);
  if (isMock()) {
    if (mockDataMapper[id]) {
      url = mockDataMapper[id];
    } else {
      let viewPdf = mockdelmap.find(metadatam => {
        if (id == metadatam.id) return metadatam;
      });
      url = viewPdf.url;
    }
  }
  console.log("VIEW PDF URL %s for page %s", url, id);
  return url;
}

export function saveUrl(id) {
  let saveDataMap = savedatamap.find(metadatam => {
    console.log(id, metadatam.id);
    if (id == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(saveDataMap.url);
  if (isMock()) {
    if (mockDataMapper[id]) {
      url = mockDataMapper[id];
    } else {
      let saveDataMap = mocksavmap.find(metadatam => {
        if (id == metadatam.id) return metadatam;
      });
      url = saveDataMap.url;
    }
  }
  console.log("Save URL %s for page %s", url, id);
  return url;
}

//saveAsAPIMap
export function saveAsUrl(id) {
  let saveAsDataMap = saveAsdatamap.find(metadatam => {
    console.log(id, metadatam.id);
    if (id == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(saveAsDataMap.url);
  if (isMock()) {
    if (mockDataMapper[id]) {
      url = mockDataMapper[id];
    } else {
      let saveAsDataMap = mocksavmap.find(metadatam => {
        if (id == metadatam.id) return metadatam;
      });
      url = saveAsDataMap.url;
    }
  }
  console.log("SaveAs URL %s for page %s", url, id);
  return url;
}

export function generateReportUrl(id) {
  let generateRportMap = generateDataMap.find(metadatam => {
    if (id == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(generateRportMap.url);
  if (isMock() && mockDataMapper[id]) {
    url = mockDataMapper[id];
  }
  return url;
}

export function autocompleteURL(id) {
  let autoCompleteDataMap = asyncselfldsmap.find(metadatam => {
    console.log(id, metadatam.id);
    if (id == metadatam.id) return metadatam;
  });
  let url = generateUrl.buildURL(autoCompleteDataMap.url);
  if (isMock()) {
    if (mockAutoCompleteMap[id]) {
      url = mockAutoCompleteMap[id];
    } else {
      autoCompleteDataMap = mockselectmap.find(metadatam => {
        if (id == metadatam.id) return metadatam;
      });
      url = autoCompleteDataMap.url;
    }
  }
  console.log("Save URL %s for page %s", url, id);
  return url;
}

export const setTemplateData = (str, data) => {
  const regex = /\${(.*?)}/gi;
  const matches = str.match(regex);
  if (matches) {
    matches.forEach(match => {
      const regexObj = new RegExp(/\${(.*?)}/, "gi");
      const fieldMatches = regexObj.exec(match);
      if (fieldMatches && fieldMatches[1]) {
        str = str.replace(match, data[fieldMatches[1]]);
      }
    });
  }
  return str;
};

const mockdelmap = [{
    id: "customPayments",
    url: "./DELETE_CUSTOM_PAYMENT.json"
  },
  {
    id: "customTaxCodes",
    url: "./DELETE_CUSTOM_TAX_CODE.json"
  }
];
const mocksavmap = [{
    id: "customPayments",
    url: "./SAVE_CUSTOM_PAYMENT.json"
  },
  {
    id: "customTaxCodes",
    url: "./SAVE_CUSTOM_TAX_CODE.json"
  },
  {
    id: "experienceRates",
    url: "./SAVE_EXPERIENCE_RATES_MOCKDATA.json"
  },
  {
    id: "supplementalMethods",
    url: "SAVE_SUPPLEMENTAL_METHODS_MOCKDATA.json"
  },
  {
    id: "customFormulas",
    url: "./SAVE_CUSTOM_TAX_PAYMENT_MOCKDATA.json"
  },
  {
    id: "customTaxFormulas",
    url: "./SAVE_CUSTOM_TAX_FORMULAS_MOCKDATA.json"
  },
  {
    id: "companies",
    url: "./SAVE_COMPANIES_MOCKDATA.json"
  },
  {
    id: "worksites",
    url: "./SAVE_WORKSITE_MOCKDATA.json"
  },
  {
    id: "worksiteCompanies",
    url: "./SAVE_WORKSITE_COMPANIE_MOCKDATA.json"
  }
];
const mockdatamap = [{
    id: "sampleDateFields",
    url: "./DATE_FIELD_DOC_MOCKDATA.json"
  },
  {
    id: "customFormulas",
    url: "./CUSTOM_TAX_PAYMENT_MOCKDATA.json"
  },
  {
    id: "customTaxFormulas",
    url: "./CUSTOM_TAX_FORMULAS_MOCKDATA.json"
  },
  {
    id: "companies",
    url: "./COMPANIES_MOCKDATA.json"
  },
  {
    id: "worksites",
    url: "./COMPANIES_MOCKDATA.json"
  },
  {
    id: "worksiteCompanies",
    url: "./WORKSITES_MOCKDATA.json"
  },
  {
    id: "recentUsage",
    url: "./RECENT_USAGE.json"
  },
  {
    id: "selectSamplePage",
    url: "./RECENT_USAGE.json"
  },
  {
    id: "whatifEmp",
    url: "./_whatifEmp_MockData.json"
  },
  {
    id: "whatifTaxes",
    url: "./_whatifTaxes_MockData.json"
  },
  {
    id: "whatifGarnishment",
    url: "./_whatifGarnishment_MockData.json"
  }
];
export function populateParentData(fieldInfo,initialValues, pageId) {
  if (pageId === 'customTaxFormulas') {
    const state = store.getState();
    const parentInfo  = state.parentInfo;
    initialValues.taxCode = parentInfo.taxCode;
  }else if (pageId === 'worksiteCompanies') {
    const state = store.getState();
    const parentInfo  = state.parentInfo;
    initialValues.company = parentInfo.company;
    initialValues.companyName = parentInfo.companyName;
  }else if (pageId === 'customPaymentTaxExceptions') {
    const state = store.getState();
    const parentInfo  = state.parentInfo;
    initialValues.userCode = parentInfo.userCode;
    initialValues.payType = parentInfo.payType;
  }
  return initialValues;
}
//all for test autoComplete
const mockselectmap = [];