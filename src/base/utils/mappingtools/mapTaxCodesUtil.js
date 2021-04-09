import moment from "moment";
import store from "../../../tf-configuration-n-taxes";
import {setParentData} from '../../../app/actions/parentDataActions';
import {setFilterFormData} from '../../../app/actions/filterFormActions';
import { getCheckedValByPgId } from './mapTaxTypesUtil';
/**
 * mapTaxCodesparent
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */

export function mapTaxCodesParentGridInput(pageid, formData, stDate, enDate,state) {
  let input = {
    dataset:appDataset(),
    mapMode:formData.title,
    pattern:(formData.authority || '').toUpperCase(),
    state: formData.countryId
  };
  return input;
}

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
      authCode:  parentInfo.bsiCode ? parentInfo.bsiCode: parentInfo.bsiAuth 
    };
    return input;
}

/**
 * createDefault
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */

export function createDefaultLinkInput(pageid) {
  let input = {
    dataset:appDataset(),
    userId: appUserId(),
  };
  return input;
}

/**
 * createDefaultAuthority
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */

export function createDefaultAuthorityLinkInput(pageid,formFilterData) {
  let input = {
    dataset:appDataset(),
    userId: appUserId(),
    authCode: formFilterData.bsiCode,
    authCodeName: formFilterData.authority
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
    name: parentInfo.name,
    taxCode: formData.taxCode,
    locReturn: formData.preferred == true  ? "Y" : "" 
   };
  return input;
}

/**
 * buildTaxCodeUsageDelete
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildTaxCodeUsageDelete(pageId, formData, editMode, state) {
  let parentInfo = state.parentInfo;
  let input = {
    dataset: appDataset(),
    userId: appUserId(),
    authCode:parentInfo.bsiCode || parentInfo.bsiAuth,
    taxCode:parentInfo.taxCode
  };
  return input;
}

/**
 * buildmapTaxCodeUpdate
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildMapTaxCodeUpdate(pageid, formdata, editMode, state) {
  let parentInfo = state.parentInfo;
  let bsiAuth=formdata.bsiAuth;
  if(parentInfo){
    store.dispatch(setFilterFormData(state.parentInfo));
    bsiAuth = parentInfo.bsiCode ? parentInfo.bsiCode: parentInfo.bsiAuth 
  }
  let taxcode = getCheckedValByPgId(pageid);
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    authCode:bsiAuth,
    taxCode: taxcode ? taxcode:"",
  };
  return input;
}