import moment from "moment";
import store from "../../tf-configuration-n-taxes";
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
function buildWhatifEmpDeleteAll(pageid, formdata, editMode, state) {
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
function buildWhatifDeductionBenefitsDeleteAll(pageid, formdata, editMode, state) {
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
function buildWhatifEmpDelete(pageid, formdata, editMode, state) {
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    empCode: formdata.empCode,
    checkDate: moment(formdata.checkDate).format("MM/DD/YYYY"),
    regPen: "R",
  };
  return input;
}