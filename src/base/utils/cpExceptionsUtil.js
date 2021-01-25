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
  //let taxCode = state.parentInfo && state.parentInfo.taxCode? state.parentInfo.taxCode:"" ;
  //if(taxCode && !filterData.taxCode){
  //  store.dispatch(setFilterFormData(state.parentInfo));
  //}
  let input = {
    pageId: pageId,
    dataset: appDataset(),
    pmtUsrCode: filterData.userCode //? filterData.taxCode : taxCode
  };
   return input;
}