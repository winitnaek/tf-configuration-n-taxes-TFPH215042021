import moment from "moment";
import store from "../../tf-configuration-n-taxes";
import {setParentData} from '../../app/actions/parentDataActions';
import {setFilterFormData} from '../../app/actions/filterFormActions';
/**
 * disposableOverrideGridInput
 * @param {*} pageId 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */
export function disposableOverrideGridInput(pageId, filterData, stDate, enDate, state) {
  const mapUsage = localStorage.getItem('mapUsage');
  let parentInfo = state.parentInfo;
  let code = '';
  if(parentInfo && parentInfo.code){
    code = parentInfo.code
    store.dispatch(setFilterFormData(parentInfo));
  }else if(parentInfo && parentInfo.empgroup){
    code = parentInfo.empgroup 
    let parentInfoU = {
      code:code
    }
    store.dispatch(setFilterFormData(parentInfoU));
  }
  let input = {
    pageId: pageId,
    dataset: appDataset(),
    garnishmentGroupCode:code || mapUsage
  };
   return input;
}
/**
 * garnishTypeInput
 * @param {*} input 
 * @param {*} formValues 
 */
export function garnishTypeInput(input,formValues){
  let additionalFields = {
    authCode : formValues['dispOvrdAuthTaxCode'].authId, 
  }
  return Object.assign(input, additionalFields);
}
/**
 * buildDisposableOverrideDelete
 * @param {*} pageId 
 * @param {*} formData 
 * @param {*} mode 
 * @param {*} state 
 */
export function buildDisposableOverrideDelete(pageId, formData, mode, state){
  let parentInfo = state.parentInfo;
  let code = parentInfo && parentInfo.code ? parentInfo.code:formData.empgroup;
  let authTaxCode= formData.dispOvrdAuthTaxCode;
  let garnishType= formData.garnishType;
  let paymentCode= formData.dispOvrdPaymentCode;
  let startDate= formData.startDate;
  let endDate= formData.endDate;
  let input = {
    dataset: appDataset(),
    empgroup:code,
    authTaxCode:authTaxCode,
    garnishType:garnishType,
    paymentCode:paymentCode,
    startDate: moment(startDate).format("MM/DD/YYYY"),
    endDate: moment(endDate).format("MM/DD/YYYY"),
    userId: appUserId()
  };
  return input;
}
/**
 * buildDisposableOverrideSaveInput
 * @param {*} pageId 
 * @param {*} formData 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildDisposableOverrideSaveInput(pageId, formData, editMode, state) {
  let parentInfo = state.parentInfo;
  let code = parentInfo && parentInfo.code ? parentInfo.code:formData.empgroup;
  let authTaxCode = formData.dispOvrdAuthTaxCode &&  formData.dispOvrdAuthTaxCode.indexOf('BSI')>=0? formData.dispOvrdAuthTaxCode:'BSI'+formData.dispOvrdAuthTaxCode;
  let authId = formData.dispOvrdAuthTaxCode &&  formData.dispOvrdAuthTaxCode.indexOf('BSI')>=0? formData.dispOvrdAuthTaxCode.substring(3, 11):formData.dispOvrdAuthTaxCode;
  let garnishType= formData.garnishType;
  let paymentCode= formData.dispOvrdPaymentCode;
  let startDate= formData.startDate;
  let endDate= formData.endDate;
  let dateCode= formData.dateCodeVal;
  let processCode= formData.processCodeVal;
  let minAmount= formData.minAmount;
  let maxAmount= formData.maxAmount;
  let minPercent= formData.minPercent;
  let maxPercent= formData.maxPercent;
  let input = {
    dataset: appDataset(),
    userId: appUserId(),
    authId: authId,
    empgroup: code,   
    authTaxCode: authTaxCode,      
    garnishType: garnishType,    
    paymentCode: paymentCode,   
    startDate:moment(startDate).format("MM/DD/YYYY"),
    endDate:moment(endDate).format("MM/DD/YYYY"), 
    dateCode: dateCode ? dateCode : 0,
    processCode: processCode ? processCode:0,
    minAmount: minAmount ? minAmount :0.00,
    maxAmount: maxAmount ? maxAmount:0.00,
    minPercent: minPercent ? minPercent:0.000000000,
    maxPercent: maxPercent ? maxPercent:0.000000000,
	  editMode: editMode,
  };
  return input;
}
/**
 * viewDisposableOverrideGridInput
 * @param {*} pageId 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */
export function viewDisposableOverrideGridInput(pageId, filterData, stDate, enDate, state) {
  let parentInfo = state.parentInfo;
  let formData = state.formData.data;
  let authTaxCode= formData && formData.authTaxCode ? formData.authTaxCode: '';
  let startDate= formData && formData.startDate ? formData.startDate:moment().format("MM/DD/YYYY");
  let endDate= formData && formData.endDate?formData.endDate:moment('12/31/9999').format("MM/DD/YYYY");
  let garnishType= formData && formData.garnishType ? formData.garnishType:'';
  if(state.formData && state.formData.mode==="New"){
    let form = document.forms['myform']
    let typeaheadSel = form.querySelectorAll('input.rbt-input-main.form-control.rbt-input');
    if(!authTaxCode && typeaheadSel){
      if(typeaheadSel[0] && typeaheadSel[0].defaultValue){
        console.log(typeaheadSel[0].defaultValue);
        let sel0 = typeaheadSel[0].defaultValue.split('-')
        authTaxCode = 'BSI'+sel0[0].trim();
      }
    }
    if(!garnishType && typeaheadSel){
      if(typeaheadSel[1] && typeaheadSel[1].defaultValue){
        console.log(typeaheadSel[1].defaultValue);
        let sel0 = typeaheadSel[1].defaultValue.split('-')
        garnishType = sel0[0].trim();
      }
    }
  }
  let input = { 
    pageId: pageId,
    dataset: appDataset(),
    groupCode:garnishType,
    authCode:authTaxCode,      
    startdate:startDate,
    endDate:endDate     
  };
   return input;
}
export function hasValidInputForView(){
  let form = document.forms['myform']
  let typeaheadSel = form.querySelectorAll('input.rbt-input-main.form-control.rbt-input');
  let hasValidInputForView = false;
  if(typeaheadSel){
    if(typeaheadSel[0] && typeaheadSel[0].defaultValue){
      hasValidInputForView =  true;
    }else{
      alert('You must select an Authority before viewing Default Disposables.');
      return hasValidInputForView =  false;
    }
  }
  if(typeaheadSel){
    if(typeaheadSel[1] && typeaheadSel[1].defaultValue){
      hasValidInputForView =  true;
    }else{
      alert('You must select an Garnishment before viewing Default Disposables.');
      return hasValidInputForView =  false;
    }
  }
  return hasValidInputForView;
}
