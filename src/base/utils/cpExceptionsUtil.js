import moment from "moment";
import store from "../../tf-configuration-n-taxes";
import {setParentData} from '../../app/actions/parentDataActions';
import {setFilterFormData} from '../../app/actions/filterFormActions';
/**
 * customPaymentTaxExceptionsGridInput
 * @param {*} pageId 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */
export function customPaymentTaxExceptionsGridInput(pageId, filterData, stDate, enDate, state) {
  let parentInfo = state.parentInfo;
  let userCode = parentInfo && parentInfo.userCode? parentInfo.userCode:"" ;
  let payType = parentInfo ? parentInfo.payType: 'E';
  if(userCode &&  state.parentInfo){
    store.dispatch(setFilterFormData(state.parentInfo));
  }
  let input = {
    pageId: pageId,
    dataset: appDataset(),
    pmtUsrCode: filterData.userCode, //? filterData.taxCode : taxCode
    codeType: payType
  };
   return input;
}
/**
 * buildCustomPaymentTaxExceptionsDelete
 * @param {*} pageId 
 * @param {*} formData 
 * @param {*} mode 
 * @param {*} state 
 */
export function buildCustomPaymentTaxExceptionsDelete(pageId, formData, mode, state){
  let parentInfo = state.parentInfo;
  let taxCode = formData.taxCode &&  formData.taxCode.indexOf('BSI')>=0? formData.taxCode:'BSI'+formData.taxCode;
  let taxType = formData.taxType &&  formData.taxType.indexOf('BSI')>=0? formData.taxType.substring(3, 11):formData.taxType;
  let startDate = formData.startDate ? moment(formData.startDate).format("MM/DD/YYYY") : moment().format("MM/DD/YYYY");
  let userCode = formData.userCode ?  formData.userCode: parentInfo.userCode
  let input = {
    dataset: appDataset(),
    userId: appUserId(),
    pmtUsrCode: userCode,
    taxCode: taxCode,
    taxType: taxType,
    startdate: startDate
  };
  return input;
}
/**
 * buildCustomPaymentTaxExceptionsSaveInput
 * @param {*} pageId 
 * @param {*} formData 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildCustomPaymentTaxExceptionsSaveInput(pageId, formData, editMode, state) {
  let parentInfo = state.parentInfo;
  let taxCode = formData.taxCode &&  formData.taxCode.indexOf('BSI')>=0? formData.taxCode:'BSI'+formData.taxCode;
  let taxType = formData.taxType &&  formData.taxType.indexOf('BSI')>=0? formData.taxType.substring(3, 11):formData.taxType;
  let startDate = formData.startDate ? moment(formData.startDate).format("MM/DD/YYYY") : moment().format("MM/DD/YYYY");
  let userCode = formData.userCode ?  formData.userCode: parentInfo.userCode
  let rescind = formData.rescind ? moment(formData.rescind).format("MM/DD/YYYY") :'12/31/9999';
  let payType = parentInfo.payType;
  let input = {
    dataSet: appDataset(),
    taxCode: taxCode,
    taxType: taxType,
    userCode: userCode,
    payType: payType,
    startDate: startDate,
    rescind: rescind,
    eeMax: formData.eeMax? formData.eeMax:0.00,
    erMax: formData.erMax? formData.erMax:0.00,
    nonTaxable: formData.nonTaxable? formData.nonTaxable:0.00,
    lmtFreq:formData.lmtFreq? formData.lmtFreq:0,
    eeFreq: formData.eeFreq? formData.eeFreq:0,
    erFreq: formData.erFreq? formData.erFreq:0,
    aggStatus:formData.aggStatus? formData.aggStatus:"",
    e_taxability: formData.e_taxability ?formData.e_taxability:0,
    p_aggStatus:formData.p_aggStatus? formData.p_aggStatus:"",
    p_taxability:formData.p_taxability? formData.p_taxability:0,
    er_taxability:formData.er_taxability? formData.er_taxability:0,
    e_maxLimit:formData.eeMax? formData.eeMax:0,
    editMode: editMode,
  };
  return input;
}