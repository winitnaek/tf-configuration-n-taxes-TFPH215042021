import moment from "moment";
import store from "../../tf-configuration-n-taxes";
import {setParentData} from '../../app/actions/parentDataActions';
import {setFilterFormData} from '../../app/actions/filterFormActions';
/**
 * customGarnishmentTaxFormulasGridInput
 * @param {*} pageId 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */
export function customGarnishmentTaxFormulasGridInput(pageId, filterData, stDate, enDate, state) {
  let taxCode = state.parentInfo && state.parentInfo.taxCode? state.parentInfo.taxCode:"" ;
  if(taxCode && !filterData.taxCode){
    store.dispatch(setFilterFormData(state.parentInfo));
  }
  let input = {
    pageId: pageId,
    dataset: appDataset(),
    taxCode: filterData.taxCode ? filterData.taxCode : taxCode
  };
   return input;
}
/**
 * buildCustomGarnishmentTaxFormulasDelete
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildCustomGarnishmentTaxFormulasDelete(pageid, formData, editMode, state) {
  let taxCode = state.parentInfo.taxCode;
  let input = {
    dataset: appDataset(),
    usrtax: formData.usrTax,
    taxcode: taxCode,
    startdate: moment(formData.startDate).format("MM/DD/YYYY"),
    userId: appUserId(),
  };
  return input;
}
/**
 * buildCustomGarnishmentTaxFormulasSaveInput
 * @param {*} pageId 
 * @param {*} formData 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildCustomGarnishmentTaxFormulasSaveInput(pageId, formData, editMode, state) {
  let taxCode = state.parentInfo  && state.parentInfo.taxCode ? state.parentInfo.taxCode:'';
  let input = {
    dataset: appDataset(),
    userId: appUserId(),
    usrTax: formData.usrTax,
    garnishmentName: formData.garnishmentName?formData.garnishmentName:"",
    taxCode: taxCode,
    startDate: formData.startDate ? moment(formData.startDate).format("MM/DD/YYYY"):"",
    endDate:  formData.endDate ? moment(formData.endDate).format("MM/DD/YYYY"):"",
    inputMethod: formData.inputMethod ? formData.inputMethod:"0",
    inputFlatAmount: formData.inputFlatAmount? formData.inputFlatAmount:"0.00",
    inputPercent: formData.inputPercent?formData.inputPercent:"0.000000",
    inputPriority: formData.inputPriority?formData.inputPriority:"0",
    exemptionMethod:formData.exemptionMethod?formData.exemptionMethod:"0",
    exemptionFlatAmount:formData.exemptionFlatAmount?formData.exemptionFlatAmount:"0.00",
    exemptionAmount:formData.exemptionAmount?formData.exemptionAmount:"0.00",
    exemptionDependentAmount:formData.exemptionDependentAmount?formData.exemptionDependentAmount:"0.00",
    calculationMethod: formData.calculationMethod?formData.calculationMethod:"0",
    calculationPercent: formData.calculationPercent?formData.calculationPercent:"0.000000",
    calculationAmount: formData.calculationAmount?formData.calculationAmount:"0.00",
    calculationLimit: formData.calculationLimit?formData.calculationLimit:"0.00",
    deductionMethod: formData.deductionMethod?formData.deductionMethod:"0",
    deductionFlatAmount: formData.deductionFlatAmount?formData.deductionFlatAmount:"0.00",
    deductionAmount: formData.deductionAmount?formData.deductionAmount:"0.00",
    deductionDependentAmount: formData.deductionDependentAmount?formData.deductionDependentAmount:"0.00",
    stmtOfException: formData.stmtOfException?formData.stmtOfException:"0",
    editMode: editMode,
  };
  return input;
}
/**
 * buildCustomGarnishmentTaxFormulasViewPDF
 * @param {*} pageId 
 * @param {*} store 
 * @param {*} formData 
 * @param {*} mode 
*/
export function buildCustomGarnishmentTaxFormulasViewPDF(pageId, state, formData, mode) {
  let taxCode = state.parentInfo  && state.parentInfo.taxCode ? state.parentInfo.taxCode:'';
  let input = {
    dataset: appDataset(),
    usrTax: formData.usrTax,
    garnishmentName: formData.garnishmentName,
    taxCode: taxCode,
    startDate: formData.startDate ? moment(formData.startDate).format("MM/DD/YYYY"):'',
    endDate:  formData.endDate ? moment(formData.endDate).format("MM/DD/YYYY"):'',
    inputMethod: formData.inputMethod,
    inputFlatAmount: formData.inputFlatAmount,
    inputPercent: formData.inputPercent,
    inputPriority: formData.inputPriority,
    exemptionMethod:formData.exemptionMethod,
    exemptionFlatAmount:formData.exemptionFlatAmount,
    exemptionAmount:formData.exemptionAmount,
    exemptionDependentAmount:formData.exemptionDependentAmount,
    calculationMethod: formData.calculationMethod,
    calculationPercent: formData.calculationPercent,
    calculationAmount: formData.calculationAmount,
    calculationLimit: formData.calculationLimit,
    deductionMethod: formData.deductionMethod,
    deductionFlatAmount: formData.deductionFlatAmount,
    deductionAmount: formData.deductionAmount,
    deductionDependentAmount: formData.deductionDependentAmount,
    stmtOfException: formData.stmtOfException
  };
  return input;
}
/**
 * getUsrTaxInput
 * @param {*} input 
 * @param {*} formValues 
 */
export function getUsrTaxInput(input,state){
  let taxCode = state.parentInfo  && state.parentInfo.taxCode ? state.parentInfo.taxCode:'';
  let additionalFields = {
    taxcode:taxCode
  }
  return Object.assign(input, additionalFields);
}