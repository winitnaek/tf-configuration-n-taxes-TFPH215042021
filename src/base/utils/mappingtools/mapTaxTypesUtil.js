import moment from "moment";
import store from "../../../tf-configuration-n-taxes";
import {setParentData} from '../../../app/actions/parentDataActions';
import {setFilterFormData} from '../../../app/actions/filterFormActions';
/**
 * mapTaxTypesparent
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */

export function mapTaxTypesParentGridInput(pageid, formData, stDate, enDate,state) {
  let input = {
    dataset:appDataset(),
    mapMode:formData.mapMode,
    pattern:formData.bsiCode || ''
  };
  return input;
}

/**
 * mapTaxTypeGridInput
 * @param {*} pageId 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */
export function mapTaxTypeGridInput(pageId, filterData, stDate, enDate, state) {
  let parentInfo = state.parentInfo;
  let taxType=filterData.taxtype;
  if(parentInfo){
    store.dispatch(setFilterFormData(state.parentInfo));
    taxType = parentInfo.taxType ? parentInfo.taxType: parentInfo.taxtype 
  }
  let input = {
    pageId: pageId,
    dataset: appDataset(),
    taxType:taxType ? taxType: parentInfo.taxType
  };
  return input;
}

/**
 * createDefaultTT
 * @param {*} pageid 
 * @param {*} filterData 
 * @param {*} stDate 
 * @param {*} enDate 
 * @param {*} state 
 */

export function createDefaultTTLinkInput(pageid) {
  let input = {
    dataset:appDataset(),
    userId: appUserId(),
  };
  return input;
}

/**
 * buildMapTaxTypeSaveInput
 * @param {*} pageId 
 * @param {*} formData 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildMapTaxTypeSaveInput(pageId, formData, editMode, state) {
  let parentInfo = state.parentInfo;
  let input = {
    dataset: appDataset(),
    userId: appUserId(),
    taxType: parentInfo.taxtype,
    taxTypeName: parentInfo.taxname,
    userTax: formData.userTax,
    locReturn: formData.preferred && formData.preferred===true ? 'Y':'N',
    editMode: editMode,
  };
  return input;
}
/**
 * buildMapTaxTypeUpdate
 * @param {*} pageid 
 * @param {*} formdata 
 * @param {*} editMode 
 * @param {*} state 
 */
export function buildMapTaxTypeUpdate(pageid, formdata, editMode, state) {
  let parentInfo = state.parentInfo;
  let taxType=formdata.taxtype;
  if(parentInfo){
    store.dispatch(setFilterFormData(state.parentInfo));
    taxType = parentInfo.taxType ? parentInfo.taxType: parentInfo.taxtype 
  }
  let usrtax = getCheckedValByPgId(pageid);
  let input = {
    pageId: pageid,
    dataset: appDataset(),
    userId: appUserId(),
    usrtax: usrtax ? usrtax:"",
    taxType: taxType
  };
  return input;
}
/**
 * getCheckedVal
 * @param {*} pageId 
 */
export function getCheckedValByPgId(pageId){
  let _id = document.querySelector("div[role='grid']").id;
  const rows = $(`#${_id}`).jqxGrid("getrows");
  let selectedVal='';
  if(rows && rows.length >=0){
    for(var i = 0; i < rows.length; i++){
      if(pageId==='mapTaxType'){
        if(rows[i].preferred===true){
          return selectedVal = rows[i].userTax;
        }
      }
        if(pageId==='mapTaxCode'){
          if(rows[i].preferred===true){
            return selectedVal = rows[i].taxCode;
          }
      }
    }
    return selectedVal;
  }
}
/**
 * buildDisposableOverrideDelete
 * @param {*} pageId 
 * @param {*} formData 
 * @param {*} mode 
 * @param {*} state 
 */
export function buildMapTaxTypeDelete(pageId, formData, mode, state){
  let parentInfo = state.parentInfo;
  let taxType=formData.taxtype;
  if(parentInfo && !taxType){
    taxType = parentInfo.taxType ? parentInfo.taxType: parentInfo.taxtype 
  }
  let input = {
    dataset: appDataset(),
    userId: appUserId(),
    usrtax: parentInfo.userTax
  };
  return input;
}
/**
 * getMappingToolsCountsInput
 * @param {*} pageId 
 */
export function getMappingToolsCountsInput(pageId) {
  let input = {
    pageid:pageId,
    dataset:appDataset()
  };
  return input;
}