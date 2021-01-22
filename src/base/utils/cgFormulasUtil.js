import moment from "moment";
import store from "../../tf-configuration-n-taxes";
import {setParentData} from '../../app/actions/parentDataActions';
import {setFilterFormData} from '../../app/actions/filterFormActions';
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
  let taxCode = state.parentInfo.taxCode;
  let input = {
    dataset: appDataset(),
    userId: appUserId(),
    usrTax: "CG",
    taxCode: "CUSTTAX",
    startDate: "09/03/2021",
    endDate: "12/31/2021",
    inputMethod: "1",
    inputFlatAmount: "1.00",
    inputPercent: "1.000000000",
    inputPriority: "1",
    exemptionMethod: "3",
    exemptionFlatAmount: "0.00",
    exemptionAmount: "0.00",
    exemptionDependentAmount: "0.00",
    calculationMethod: "4",
    calculationPercent: "0.000000000",
    calculationAmount: "0.00",
    calculationLimit: "0.00",
    deductionMethod: "4",
    deductionFlatAmount: "0.00",
    deductionAmount: "0.00",
    deductionDependentAmount: "0.00",
    stmtOfException: "0",
    editMode: 1,
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
export function buildCustomGarnishmentTaxFormulasViewPDF(pageId, store, formData, mode) {
  let taxCode = state.parentInfo.taxCode;
  let input = {
    dataset: appDataset(),
    usrTax: "CG",
    garnishmentName: "cg",
    taxCode: "CUSTTAX",
    startDate: "09/03/2021",
    endDate: "12/31/2021",
    inputMethod: "1",
    inputFlatAmount: "1.00",
    inputPercent: "1.000000000",
    inputPriority: "1",
    exemptionMethod: "3",
    exemptionFlatAmount: "0.00",
    exemptionAmount: "0.00",
    exemptionDependentAmount: "0.00",
    calculationMethod: "4",
    calculationPercent: "0.000000000",
    calculationAmount: "0.00",
    calculationLimit: "0.00",
    deductionMethod: "4",
    deductionFlatAmount: "0.00",
    deductionAmount: "0.00",
    deductionDependentAmount: "0.00",
    stmtOfException: "0",
  };
  return input;
}