import moment from "moment";
import store from "../../tf-configuration-n-taxes";
import {setParentData} from '../../app/actions/parentDataActions';
import {setFilterFormData} from '../../app/actions/filterFormActions';
/**
 * calculateTaxesPDFInput
 * @param {*} pageId 
 */
export function calculateTaxesPDFInput(pageId,inclGarnishment) {
  let state = store.getState();
  let parentInfo = state.parentInfo;
  let input = {
    pageId: pageId,
    dataset: appDataset(),
    userId: appUserId(),
    empCode: parentInfo.empCode,
    checkDate: parentInfo.checkDate,
    empName: parentInfo.empName,
    inclGarnishment: inclGarnishment,
    regPen: "R"
  };
  return input;
}
/**
 * buildWhatifEmpDeleteAll
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildWhatifEmpDeleteAll(pageid, formdata, editMode, state) {
  let input = {
    pageId: pageid,
    dataset: appDataset(),
  };
  return input;
}
/**
 * buildWhatifDeductionBenefitsDeleteAll
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildWhatifDeductionBenefitsDeleteAll(pageid, formdata, editMode, state) {
  let parentInfo = state.parentInfo;
  //if(parentInfo){
    //store.dispatch(setFilterFormData(state.parentInfo));
  //}
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    empcode: parentInfo.empcode,
    chkdt: parentInfo.chkdt ? moment(parentInfo.chkdt).format("MM/DD/YYYY"):'',
    usrauth: parentInfo.usrauth,
    usrtxtyp: parentInfo.usrtxtyp,
    gform: parentInfo.gform,
    caseid: parentInfo.caseid,
    docket: parentInfo.docket ? parentInfo.docket:"",
    regpen: "R",
  };
  return input;
}
/**
 * buildWhatifEmpDelete
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildWhatifEmpDelete(pageid, formdata, editMode, state) {
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    empCode: formdata.empCode,
    checkDate: moment(formdata.checkDate).format("MM/DD/YYYY"),
    regPen: "R",
  };
  return input;
}
/**
 * buildWhatIfTaxesSaveInput
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildWhatIfTaxesSaveInput(pageid, formdata, editMode, state) {
  let editRec = "false";
  if (editMode == 1) {
    editRec = "false";
    store.dispatch(setParentData(state.formFilterData));
  } else if (editMode == 2) {
    editRec = "true";
  }
  let input = {
    btxttax: {
      id: {
        dataset: appDataset(),
        regpen: 'R',//formdata.regPen,
        empcode: formdata.empCode ? formdata.empCode : state.formFilterData.empCode,
        chkdt: formdata.chkdt ? moment(formdata.chkdt).format("MM/DD/YYYY"): moment(state.formFilterData.checkDate).format("MM/DD/YYYY"),
        taxn: formdata.taxn,
      },
      btxtaxc: {
        id: null,
        btxauth: {
          bsiauth: formdata.usrauthcd.indexOf("BSI")>=0 ? formdata.usrauthcd.substring(3, 11):formdata.usrauthcd,
          name: formdata.name,
        },
      },
      altagglim: formdata.altagglim,
      ppdwgs: formdata.ppdwgs,
      aytdwgs: formdata.aytdwgs,
      ytdwgs: formdata.ytdwgs,
      ytdtax: formdata.ytdtax,
      regexmamt: formdata.regexmamt,
      addexmamt: formdata.addexmamt,
      basewage: formdata.basewage,
      prrcom: formdata.prrcom,
      addamt: formdata.addamt,
      ppdtax: formdata.ppdtax,
      pptdwgs: formdata.pptdwgs,
      mtdwgs: formdata.mtdwgs,
      mtdtax: formdata.mtdtax,
      qtdwgs: formdata.qtdwgs,
      qtdtax: formdata.qtdtax,
      rcptxcram: formdata.rcptxcram,
      maxwgovr: formdata.maxwgovr,
      calctax: formdata.calctax,
      ttltxbern: formdata.ttltxbern,
      ttlntxecnt: formdata.ttlntxecnt,
      ttlntxrcnt: formdata.ttlntxrcnt,
      ytdsupp: formdata.ytdsupp,
      ytdtaxpws: formdata.ytdtaxpws,
      opttaxpws: formdata.opttaxpws,
      ytdsubjwg: formdata.ytdsubjwg,
      ytdExmptWg: formdata.ytdExmptWg,
      hrswrk: formdata.hrswrk,
      exprate: formdata.exprate,
      pctwrkd: formdata.pctwrkd,
      addtxrt: formdata.addtxrt,
      txrt: formdata.txrt,
      estquargrosswages: formdata.estquargrosswages,
      grossannp: formdata.grossannp,
      addnwi: formdata.addnwi,
      taxcredit: formdata.taxcredit,
      resicd: formdata.resicd,
      rndind: formdata.rndind,
      mart: formdata.mart,
      supcd: formdata.supcd,
      addtxcd: formdata.addtxcd,
      eicstsind: formdata.eicstsind,
      selfadj: formdata.selfadj,
      calcsts: formdata.calcsts,
      aggind: formdata.aggind,
      rcpform: formdata.rcpform,
      formula: formdata.formulawhatif,
      taxexpind: formdata.taxexpind,
      rcppart: formdata.rcppart,
      certcd: formdata.certcd,
      regex: formdata.regex,
      prsex: formdata.prsex,
      depex: formdata.depex,
      addex: formdata.addex,
      elcstind: formdata.elcstind,
      nxind: formdata.nxind,
      srsvd0: 0,
      srsvd1: 0,
      bsitaxtyp: formdata.bsitaxtyp,
      usrtaxtyp: "",
      crsvd0: "",
      crsvd1: "",
      drsvd0: 0.0,
      usrauthcd: formdata.usrauthcd.indexOf("BSI")>=0 ? formdata.usrauthcd:'BSI'+formdata.usrauthcd,
      pnd: formdata.pnd,
      ynd: formdata.ynd,
      qnd: formdata.qnd,
      mnd: formdata.mnd,
      addexind: "",
      taxeffdt: " ",
      riskclass: formdata.riskclass,
      btxtwges: [],
      taxLeftOver: formdata.taxLeftOver,
      currtaxleft: formdata.currtaxleft,
      subjWages: formdata.subjWages,
    },
    btxtaxt: {
      taxtype: formdata.bsitaxtyp,
      taxname: formdata.taxname,
      payee: null,
      recip: false,
      taxid: false,
      railroad: false,
      gttype: formdata.gttype,
      admin: false,
      info: null,
      psrp: false,
      hiredate: null,
    },
    numberOfPaymentEntries: formdata.numberOfPaymentEntries,
    empName: "",
    taxcodetype: formdata.taxcodetype,
    taxeffdate: formdata.taxeffdate
      ? moment(formdata.taxeffdate).format("MM/DD/YYYY")
      : "",
    txblhrs_out: formdata.txblhrs_out,
    wages: null,
    rptTax: formdata.rptTax,
    fymj: formdata.fymj,
  };
  let formValues = {};
  if (editMode == 1) {
    formValues = {
      editMode: editMode,
    };
  } else {
    formValues = {
      editMode: editMode,
    };
  }
  return Object.assign(input, formValues);
}
/**
 * whatifTaxesGridInput
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 */
export function whatifTaxesGridInput(pageid, filterData, stDate, enDate) {
  
  let empCode = filterData.empCode ? filterData.empCode : filterData.empcode;
  let checkDate = filterData.checkDate ? filterData.checkDate : filterData.chkdt;
  let state = store.getState();
  if(!checkDate){
    checkDate = state.parentData.checkDate ? state.parentData.checkDate : state.parentData.chkdt;
  } 
  if(!empCode){
    empCode = state.parentData.empCode ? state.parentData.empCode:state.parentData.empcode
  } 
  let parentInfo = state.parentInfo;
  if(parentInfo){
    store.dispatch(setFilterFormData(state.parentInfo));
  }
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    empCode: empCode,
    checkDate: moment(checkDate).format("MM/DD/YYYY"),
    empName: filterData.empName ? filterData.empName:state.parentData.empName,
    regPen: "R",
  };
  return input;
}
/**
 * buildWhatIfTaxesDelete
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildWhatIfTaxesDelete(pageid, formdata, editMode, state) {
  let input = {
    btxttax: {
      id: {
        dataset: appDataset(),
        regpen: "R",
        empcode: formdata.empCode,
        chkdt: moment(formdata.chkdt).format("MM/DD/YYYY"),
        taxn: formdata.taxn,
      },
    },
  };
  return input;
}
/**
 * getUsrTxTypInput
 * @param {*} input 
 * @param {*} formValues 
 */
export function getUsrTxTypInput(input,formValues){
  let additionalFields = {
    authCode : formValues['usrauth'].bsiauth, 
  }
  return Object.assign(input, additionalFields);
}
/**
 * getGformInput
 * @param {*} input 
 * @param {*} formValues 
 */
export function getGformInput(input,formValues){
  let state = store.getState();
  let checkDate = state.parentInfo &&  state.parentInfo.checkDate ? moment(state.parentInfo.checkDate).format("YYYYMMDD") :moment().format("YYYYMMDD")
  let additionalFields = {
    authCode : formValues['usrauth'].bsiauth, 
    checkDate: checkDate, 
    taxType: formValues['usrtxtyp'].taxType, 
  }
  return Object.assign(input, additionalFields);
}
/**
 * garnishmentsGridInput
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 */
export function whatIfGarnishmentsGridInput(pageid, filterData, stDate, enDate) {
  let empCode = filterData.empCode ? filterData.empCode : filterData.empcode;
  let checkDate = filterData.checkDate ?
    filterData.checkDate :
    filterData.chkdt;
  let state = store.getState();
  let parentInfo = state.parentInfo;
  if(parentInfo){
    store.dispatch(setFilterFormData(state.parentInfo));
  } 
  if(!empCode){
    empCode = parentInfo.empCode;
  }
  if(!checkDate){
    checkDate = parentInfo.checkDate;
  }  
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    empCode: empCode,
    checkDate: checkDate,
    empName: filterData.empName,
    regPen: "R",
  };
  return input;
}