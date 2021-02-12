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
    checkDate: parentInfo.checkDate || parentInfo.chkdt,
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
    checkDate = state.parentInfo.checkDate ? state.parentInfo.checkDate : state.parentInfo.chkdt;
  } 
  if(!empCode){
    empCode = state.parentInfo.empCode ? state.parentInfo.empCode:state.parentInfo.empcode
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
/**
 * whatifEmpPDFInput
 * @param {*} pageId 
 */
export function generateWhatifEmpPDFInput(pageid, state, formdata, mode) {
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
    paymentName:formdata.paymentType,
    payFreq: formdata.payFreq || 0,
    vacHours: formdata.vacHours || 0.0,
    prorationFreq: formdata.prorationFreq || 0,
    ytdPayPeriod: formdata.ytdPayPeriod || 0,
    payPeriodHours: formdata.payPeriodHours || 0.0,
    grossUpInd: formdata.grossUpInd || 0,
    grossUpIndName: formdata.grossUpInd,
    netWages: formdata.netWages || 0.0,
    estAnnualGrossAmt: formdata.estAnnualGrossAmt || 0.0,
    reciprocalCode: formdata.reciprocalCode,
    residentState: formdata.residentState,
    grossWages: formdata.grossWages || 0.00,
    avgWkGross: formdata.avgWkGross || 0.00,
    garnishment: formdata.garnishment,
    garnishmentName:formdata.garnishment,
    garnishmentGroup: formdata.garnishmentGroup,
    principalStateOfEmp: formdata.principalStateOfEmp,
    calcType: formdata.calcType,
    calcTypeName:formdata.calcType,
    wageProcCode: formdata.wageProcCode,
    wageProcCodeName: formdata.wageProcCode,
    estSpousalIncome: formdata.estSpousalIncome || 0.00,
    empType: formdata.empType,
    empTypeName: formdata.empType,
    emplType: formdata.emplType,
    emplTypeName:formdata.emplType,
    birthDate: (formdata.birthDate && formdata.birthDate!=="")?moment(formdata.birthDate).format("MM/DD/YYYY"):"",
    dateofDeath: formdata.dateofDeath,
    calculatedLocalTaxIn: formdata.calculatedLocalTaxIn,
    calculatedLocalTaxInName: formdata.calculatedLocalTaxIn,
    statEEInd: formdata.statEEInd,
    statEEIndName: formdata.statEEInd,
    foreignEarnedIncome: formdata.foreignEarnedIncome,
    foreignEarnedIncomeName: formdata.foreignEarnedIncome,
    exemptMilitaryLocation: formdata.exemptMilitaryLocation,
    contribAlloc: formdata.contribAlloc?formdata.contribAlloc:0,
    contribAllocName:formdata.contribAlloc,
    // terminationDate: getTerminationDate(formdata),
    formulaEffectiveDateYYYYMMDD: (formdata.formulaEffectiveDateYYYYMMDD && formdata.formulaEffectiveDateYYYYMMDD!=="") ?moment(formdata.formulaEffectiveDateYYYYMMDD).format("MM/DD/YYYY"):"",
    taxN: formdata.taxN,
    terminationDate:formdata.terminationDate
  };
  return input;
}
/**
 * wageDetailsGridInput
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 */
export function wageDetailsGridInput(pageid, filterData, stDate, enDate) {
  let state = store.getState();
  let parentInfo = state.parentInfo;
  if(parentInfo){
    store.dispatch(setFilterFormData(state.parentInfo));
  }
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),    
    empCode: state.parentInfo.empCode,
    checkDate: state.parentInfo.chkdt,
    regPen: state.parentInfo.regpen,
    taxN: state.parentInfo.taxn
  };
  return input;
}
/**
 * wageDetailsPdfInput
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 */
export function generatewageDetailsPDF(pageId, filterFormData, formdata, mode) {
  const state = store.getState();
  let input = {
    btxtwge: {
      id: {
        dataset: appDataset(),
        regpen: state.parentInfo.regpen,
        empcode: state.parentInfo.empCode,
        chkdt: state.parentInfo.chkdt,
        taxn: state.parentInfo.taxn,
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
      remncd: formdata.code,
      initdt: moment(formdata.initiationDate).format("MM/DD/YYYY")
    },
    bwapay: {
      name: formdata.wageCodedesc,
      paytype: formdata.paytype,
    },
    initDate: moment(formdata.initiationDate).format("MM/DD/YYYY")
  };
  return input;
}

/**
 * whatifTaxesPdfInput
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 */
export function generatewhatifTaxesPDF(pageId, filterFormData, formdata, mode) {
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

  return input;
}
/**
 * whatifGarnishmentPdfInput
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 */
export function generateWhatIfGarnishmentPDF(pageId, state, formdata, mode) {
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
        docket: formdata.docket,
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
      taxtype: formdata.taxtype,
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
    calculatedAmount: formdata.calculatedAmount ? formdata.calculatedAmount:0.0,
  };
  return input;
}