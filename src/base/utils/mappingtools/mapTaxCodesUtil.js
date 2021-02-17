import moment from "moment";
import store from "../../../tf-configuration-n-taxes";
import {setParentData} from '../../../app/actions/parentDataActions';
/**
 * mapTaxCode
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */

export function mapTaxCodeGridInput(pageid, filterData, stDate, enDate,state) {
    let parentInfo = state.parentInfo;
    let input = {
      dataset:appDataset(),
      authCode: parentInfo.bsiCode
    };
    return input;
}

/**
 * mapTaxCode
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildMapTaxCodeSaveInput(pageId, formData, editMode, state) {
  let parentInfo = state.parentInfo;
  
  let input = {
    dataset: appDataset(),
    userId: appUserId(),
    bsiAuth: parentInfo.bsiCode,
    name: parentInfo.authority,
    taxCode: formData.taxCode,
    locReturn: formData.locReturn  ? "Y" : "" 
   }
  return input;
}